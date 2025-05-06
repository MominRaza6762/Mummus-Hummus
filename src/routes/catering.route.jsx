import React, { useState, useRef, useEffect, useMemo } from "react";
import styles from "../styles/catering.module.css";
import { categories, categoryData } from "../data/data";
import Footer from "../components/footer/footer.jsx";
import { ContactPage } from "../components/contact/contact.jsx";
import ButtonComp from "../components/button.jsx";
import NavbarComp from "../NavbarComp.jsx";
import { useNavigate } from "react-router-dom";
import { useLang } from "../context/LangContext.jsx";

const Catering = () => {
  const [activeCategory, setActiveCategory] = useState("Bowls");
  const [expandedCard, setExpandedCard] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [showCartModel, setShowCartModel] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedToppings, setSelectedToppings] = useState({});
  const [selectedGrams, setSelectedGrams] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const { language} = useLang();



  const handleProceedToCheckout = () =>{
      localStorage.setItem("cart", JSON.stringify(cart));
      navigate('/add-information')
  } 

  // const activeCategoryData = categoryData(language)[activeCategory];
  const activeCategoryData = useMemo(() => {
    return categoryData(language)[activeCategory];
  }, [language, activeCategory]);


  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  // updatting through deepseek

  // add to cart function
  const addToCart = (item) => {
    const selectedToppingPrice = Number(selectedToppings[item.id]?.price) || 0;
    const selectedGramPrice = Number(selectedGrams[item.id]?.price) || 0;
    const basePrice = extractNumericValue(item.pricing); // Use the updated function

    const totalPrice =
      (basePrice + selectedToppingPrice + selectedGramPrice) *
      (quantities[item.id] || 1);

    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + (quantities[item.id] || 1),
                totalPrice: cartItem.totalPrice + totalPrice,
                toppingPrice: selectedToppingPrice,
                gramPrice: selectedGramPrice,
              }
            : cartItem
        );
      } else {
        return [
          ...prevCart,
          {
            ...item,
            quantity: quantities[item.id] || 1,
            category: activeCategory,
            selectedTopping: selectedToppings[item.id] || null,
            selectedGram: selectedGrams[item.id] || null,
            totalPrice,
            toppingPrice: selectedToppingPrice,
            gramPrice: selectedGramPrice,
          },
        ];
      }
    });
  };
  // extract numeric values
  const extractNumericValue = (priceString) => {
    // Extract the first numeric value from the string
    const numericValue = parseFloat(priceString.match(/\d+/)?.[0] || "0");
    return isNaN(numericValue) ? 0 : numericValue;
  };

  // get toppings value

  const handleToppingSelect = (itemId, topping) => {
    setSelectedToppings((prev) => ({ ...prev, [itemId]: topping }));
  };

  // handlecartQuantity change
  const handleCartQuantityChange = (itemId, type) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((cartItem) => {
        if (cartItem.id === itemId) {
          const newQuantity =
            type === "increment"
              ? cartItem.quantity + 1
              : Math.max(cartItem.quantity - 1, 0);

          if (newQuantity === 0) {
            return null; // Mark for removal
          }

          const basePrice = extractNumericValue(cartItem.pricing); // Use the updated function
          const totalPrice =
            (basePrice +
              (cartItem.toppingPrice || 0) +
              (cartItem.gramPrice || 0)) *
            newQuantity;

          return {
            ...cartItem,
            quantity: newQuantity,
            totalPrice,
          };
        }
        return cartItem;
      });

      // Filter out null values (items to be removed)
      return updatedCart.filter((cartItem) => cartItem !== null);
    });
  };

  // get grams value

  const handleGramSelect = (itemId, gram) => {
    setSelectedGrams((prev) => ({ ...prev, [itemId]: gram }));
  };

  const handleQuantityChange = (id, type) => {
    setQuantities((prev) => {
      const newValue =
        type === "increment"
          ? (prev[id] || 1) + 1
          : Math.max((prev[id] || 1) - 1, 1);
      return { ...prev, [id]: newValue };
    });
  };
  const cartRef = useRef(null);
  const cartContRef = useRef(null);

  const flyToCart = (event) => {
    const button = event.currentTarget;
    const cart = cartRef.current;

    if (!button || !cart) return;

    const buttonRect = button.getBoundingClientRect();
    const cartRect = cart.getBoundingClientRect();

    const flyingElement = button.cloneNode(true);
    document.body.appendChild(flyingElement);

    flyingElement.style.position = "fixed";
    flyingElement.style.top = `${buttonRect.top}px`;
    flyingElement.style.left = `${buttonRect.left}px`;
    flyingElement.style.width = `${buttonRect.width}px`;
    flyingElement.style.height = `${buttonRect.height}px`;
    flyingElement.style.opacity = "1";
    flyingElement.style.transition = "all 0.8s ease-in-out";

    setTimeout(() => {
      flyingElement.style.top = `${cartRect.top + cartRect.height / 2}px`;
      flyingElement.style.left = `${cartRect.left + cartRect.width / 2}px`;
      flyingElement.style.transform = "scale(0)";
      flyingElement.style.opacity = "0";
    }, 50);

    setTimeout(() => {
      document.body.removeChild(flyingElement);
    }, 800);
  };

  const totalCartPrice = cart.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartContRef.current && !cartContRef.current.contains(event.target)) {
        setShowCartModel(false);
      }
    };

    if (showCartModel) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCartModel]);

  return (
    <>
      <NavbarComp isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={`${styles.cateringCont} ${isOpen ? styles.navOpen : ""}`}>
        {/* cart */}
        <a
          className={styles.cartcontainer}
          id="cart"
          ref={cartRef}
          onClick={() => setShowCartModel(!showCartModel)}
        >
          <img src="/Vector.png" alt="cart" />
          <span className={styles.cartCounter}>
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </span>
        </a>

        {/* Cart Model Begins Here */}
        {showCartModel && (
          <div className={styles.cartModal} id="cartModal" ref={cartContRef}>
            {cart?.length > 0 ? (
              <div className={styles.cartContent}>
                <div
                  className={styles.closeButton}
                  onClick={() => setShowCartModel(false)}
                >
                  <img src="/cross-icon.png" alt="Close Cart" />
                </div>
                <h1 className={styles.cartTopHeading}>
                  My Cart ({cart.length})
                </h1>
                <div className={styles.cartContentItemCont}>
                  {cart &&
                    cart.map((item) => {
                      return (
                        <div id={item?.id} className={styles.cartItem}>
                          <div className={styles.cartItemLeft}>
                            <img src={item?.img} alt="" />
                            <div className={styles.cartItemLeftContents}>
                              <h3>{item?.title}</h3>
                              <h1>{item?.category}</h1>
                              <p>Quantity : {item?.quantity}</p>
                            </div>
                          </div>
                          <div className={styles.cartItemRight}>
                            <p>subtotal</p>
                            <h3>SEK {item.totalPrice.toFixed(2)}</h3>

                            {/* Quantity Selector */}
                            <button className={styles.cartBtnContainer}>
                              <span
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCartQuantityChange(
                                    item.id,
                                    "decrement"
                                  );
                                }}
                              >
                                {item?.quantity == 1 ? (
                                  <img
                                    className={styles.trashimg}
                                    src="/recycle-bin.png"
                                    alt="decrement category"
                                  />
                                ) : (
                                  "-"
                                )}
                              </span>
                              <span>{item?.quantity}</span>
                              <span
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCartQuantityChange(
                                    item.id,
                                    "increment"
                                  );
                                }}
                              >
                                +
                              </span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  <div className={styles.totalPriceCon}>
                    <p>Total (Including fees. & taxes):</p>
                    <h2>SEK {totalCartPrice.toFixed(2)}</h2>
                  </div>
                  <ButtonComp title={"PROCEED TO CHECKOUT"} onClick={handleProceedToCheckout} />
                </div>
              </div>
            ) : (
              <>
                <div
                  className={styles.closeButton}
                  onClick={() => setShowCartModel(false)}
                >
                  <img src="/cross-icon.png" alt="Close Cart" />
                </div>
                <h1 className={styles.emptyCart}>Cart is Empty</h1>
              </>
            )}
          </div>
        )}
        {/* Cart Model End here */}

        <div className={styles.cateringContent}>
          {/* Top Heading */}
          <div className={styles.cateringHeadingCon}>
            <h1>Catering Menu</h1>
            <p>
              Please list if there are any allergies. <br />
              Orders to be sent to: Info@mummus.se <br />
              At least 48 hours before or call at 0701756565
            </p>
          </div>

          {/* Categories List */}
          <div className={styles.categoriesContainer}>
            {categories.map((category) => (
              <h1
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`${styles.categoryItem} ${
                  activeCategory === category ? styles.activeCat : ""
                }`}
                style={{ fontFamily: "belmonte" }}
              >
                {category}
              </h1>
            ))}
          </div>

          {/* Category Cards */}
          <div className={styles.categoryDetailsWrapper}>
            {activeCategoryData &&
              Object.values(activeCategoryData).map((item) => (
                <div
                  key={item.id}
                  className={`${styles.categoryItemCard} ${
                    expandedCard === item.id ? styles.expandedCard : ""
                  }`}
                  onClick={() => toggleCard(item.id)}
                >
                  {/* Image */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className={styles.itemImage}
                  />
                  {/* Title */}
                  <h2 className={styles.itemTitle}>{item.title}</h2>
                  {/* Location */}
                  <p className={styles.itemLocation}>{item.location}</p>

                  {/* Expanded Content */}
                  {expandedCard === item.id && (
                    <div className={styles.itemDetails}>
                      {/* Description */}
                      <h3 className={styles.sectionHeading}>Description</h3>
                      <p className={styles.sectionText}>{item.description}</p>

                      {/* Notes */}
                      <h3 className={styles.sectionHeading}>Notes</h3>
                      <ul className={styles.notesList}>
                        {item.notes?.map((note, index) => (
                          <li key={index}>{note}</li>
                        ))}
                      </ul>

                      {/* Serving & Price Row */}
                      <div className={styles.servingPriceRow}>
                        <div>
                          <h4 className={styles.servingHeading}>Serving</h4>
                          <p className={styles.servingValue}>{item?.serving}</p>
                        </div>
                        <div>
                          <h4 className={styles.priceHeading}>Pricing</h4>
                          <p className={styles.priceValue}>{item?.pricing}</p>
                        </div>
                      </div>

                      {/* Toppings */}
                      {item?.toppings && item?.toppings?.length > 0 && (
                        <>
                          <h3 className={styles.toppingsHeading}>
                            Select Toppings{" "}
                            <span className={styles.optionalText}>
                              (Optional)
                            </span>
                          </h3>
                          {item?.toppings?.map((topping, index) => (
                            <div key={index} className={styles.optionRow}>
                              <div className={styles.optionRowContent}>
                                <input
                                  type="radio"
                                  name={`topping-${item.id}`}
                                  className={styles.cardRadioBtns}
                                  onChange={() =>
                                    handleToppingSelect(item.id, topping)
                                  }
                                  onClick={(e) => e.stopPropagation()}
                                />
                                <span className={styles.optionText}>
                                  {topping.title}
                                </span>
                              </div>
                              <span className={styles.optionPrice}>
                                {topping.price}:-
                              </span>
                            </div>
                          ))}
                        </>
                      )}

                      {/* Grams */}
                      {item?.grams && item?.grams?.length > 0 && (
                        <>
                          <div className={styles.gramsHeader}>
                            <h3>Select Gram</h3>
                            <h3>Price</h3>
                          </div>
                          {item.grams.map((gram, index) => (
                            <div key={index} className={styles.optionRow}>
                              <div className={styles.optionRowContent}>
                                <input
                                  type="radio"
                                  name={`grams-${item.id}`}
                                  className={styles.cardRadioBtns}
                                  onChange={() =>
                                    handleGramSelect(item.id, gram)
                                  }
                                  onClick={(e) => e.stopPropagation()}
                                />
                                <span className={styles.optionText}>
                                  {gram.title}
                                </span>
                              </div>
                              <span className={styles.optionPrice}>
                                {gram.price}:-
                              </span>
                            </div>
                          ))}
                        </>
                      )}

                      <br style={{ padding: "30px 0" }} />
                      {/* Buttons */}
                      <div className={styles.buttonsContainer}>
                        {/* Quantity Selector */}
                        <button
                          className={styles.quantityButton}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span
                            onClick={() =>
                              handleQuantityChange(item.id, "decrement")
                            }
                          >
                            -
                          </span>
                          <span>{quantities[item.id] || 1}</span>
                          <span
                            onClick={() =>
                              handleQuantityChange(item.id, "increment")
                            }
                          >
                            +
                          </span>
                        </button>

                        {/* Add to Cart */}
                        <button
                          className={styles.addToCartButton}
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(item);
                            flyToCart(e);
                          }}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
          <ContactPage />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Catering;
