import React, { useRef, useState } from "react";
import styles from "../styles/pyament.module.css";
import { useNavigate } from "react-router-dom";
import NavbarComp from "../NavbarComp";
import { ContactPage } from "../components/contact/contact";
import Footer from "../components/footer/footer";

const PaymentRoute = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const [orderOption, setOrderOption] = useState("delivery");
  const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const deliveryPrice = orderOption === "delivery" ? 100 : 0;
  const salesTax = (totalPrice * 12) / 100;
  const totalAmount = deliveryPrice + totalPrice + salesTax;
  // State for date and time
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");
  // states for the payment right container
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [isBillingSameAsShipping, setIsBillingSameAsShipping] = useState(true);
  // Function to disable past dates and weekends
  const disablePastDatesAndWeekends = (date) => {
    const today = new Date();
    const day = date.getDay();
    return date >= today && day !== 0 && day !== 6;
  };
  // Ref for time input
  const timeInputRef = useRef(null);

  // Function to handle time container click
  const handleTimeContainerClick = () => {
    timeInputRef.current.showPicker(); // Open time picker
  };

  const handleProceedWithPayment = () => {
    // Regular expressions for validation
    const cardNumberRegex = /^[0-9]{16}$/; // 16-digit card number
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/; // MM/YY format
    const cvcRegex = /^[0-9]{3,4}$/; // 3 or 4 digit CVC

    // Validation checks
    if (!cardName.trim()) {
      alert("Please enter the name on the card.");
      return;
    }

    if (!cardNumberRegex.test(cardNumber.replace(/\s/g, ""))) {
      alert("Please enter a valid 16-digit card number.");
      return;
    }

    if (!expiryDateRegex.test(expiryDate)) {
      alert("Please enter a valid expiry date in MM/YY format.");
      return;
    }

    if (!cvcRegex.test(cvc)) {
      alert("Please enter a valid CVC.");
      return;
    }

    // If all fields are valid, proceed with payment
    const paymentDetails = {
      cardName,
      cardNumber,
      expiryDate,
      cvc,
      isBillingSameAsShipping,
    };

    console.log("Payment Details:", paymentDetails);

    // You can add API call logic here to process the payment
  };
  const handleExpiryDateChange = (value) => {
    // Remove any non-numeric characters except "/"
    let formattedValue = value.replace(/\D/g, "");
  
    // Add "/" after two digits for month
    if (formattedValue.length > 2) {
      formattedValue = formattedValue.slice(0, 2) + "/" + formattedValue.slice(2);
    }
  
    // Ensure max length is "MM/YY" (5 characters)
    if (formattedValue.length > 5) {
      formattedValue = formattedValue.slice(0, 5);
    }
  
    setExpiryDate(formattedValue);
  };
  

  return (
    <>
      <NavbarComp isOpen={isOpen} setIsOpen={setIsOpen} />

      <div
        className={`${styles.paymentContainer} ${isOpen ? styles.navOpen : ""}`}
      >
        <div className={styles.paymentContent}>
          <div className={styles.paymentHeadingCon}>
            <h1>Order & Payment Details</h1>
          </div>
          <div className={styles.topHeadingContainer}>
            <span>Information Detail</span>
            <p>Payment Process</p>
          </div>

          {/* payment data */}

          <div className={styles.paymentData}>
            <div className={styles.paymentDataLeft}>
              {cart.map((item, index) => (
                <div key={index} className={styles.cartItemContainer}>
                  {/* Left Container */}
                  <div className={styles.cartItemLeft}>
                    <img
                      src={item.img}
                      alt={item.title}
                      className={styles.cartItemImage}
                    />
                    <div className={styles.cartItemDetails}>
                      <p className={styles.cartItemTitle}>{item.title}</p>
                      <h1 className={styles.cartItemCategory}>
                        {item.category}
                      </h1>
                      <p className={styles.cartItemQuantity}>
                        Quantity: {item.quantity}
                      </p>
                    </div>
                  </div>

                  {/* Right Container */}
                  <div className={styles.cartItemRight}>
                    <span>Subtotal</span>
                    <p className={styles.cartItemPrice}>
                      {item.totalPrice} SEK
                    </p>
                  </div>
                </div>
              ))}

              <div className={styles.orderOptions}>
                <h2>Order Options</h2>
                <div>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="orderOption"
                      value="delivery"
                      checked={orderOption === "delivery"}
                      onChange={(e) => setOrderOption(e.target.value)}
                      className={styles.paymentRadioBtn}
                    />
                    Delivery
                  </label>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="orderOption"
                      value="pickup"
                      checked={orderOption === "pickup"}
                      onChange={(e) => setOrderOption(e.target.value)}
                      className={styles.paymentRadioBtn}
                    />
                    Pickup
                  </label>
                </div>
              </div>
              {/* total orders */}
              <div className={styles.totalPrice}>
                <p>Total Order</p>
                <span>{totalPrice.toFixed(2)} SEK</span>
              </div>
              <div className={styles.totalOrder}>
                <div>
                  <p>Sales Tax (12%)</p>
                  <span>{salesTax.toFixed(2)} SEK</span>
                </div>
                <div
                  style={{
                    display: orderOption === "delivery" ? "flex" : "none",
                  }}
                >
                  <p>Delivery Charges</p>
                  <span>{deliveryPrice} SEK</span>
                </div>
              </div>
              {/* total amout */}
              <div className={styles.totalAmount}>
                <p>Total Amount</p>
                <span>{totalAmount.toFixed(2)} SEK</span>
              </div>
              {/* Date and time Container */}
              <div className={styles.dataAndTimeWrap}>
                {/* Date Container */}
                <div className={styles.dateContainer}>
                  <label>Delivery Date</label>
                  <input
                    type="date"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    onFocus={(e) => e.target.showPicker()}
                    className={styles.dateInput}
                  />
                </div>

                {/* Time Container */}
                <div
                  className={styles.timeContainer}
                  onClick={handleTimeContainerClick}
                >
                  <label>Delivery Time</label>
                  <input
                    type="time"
                    value={deliveryTime}
                    onChange={(e) => setDeliveryTime(e.target.value)}
                    ref={timeInputRef}
                    className={styles.timeInput}
                    placeholder="HH : MM"
                  />
                </div>
              </div>
              <div className={styles.instructionsContainer}>
                <p>Special Instructions</p>
                <textarea
                  name="instructions"
                  placeholder="Enter Special Instructions here..."
                  className={styles.textarea}
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  rows={3}
                />
              </div>
            </div>

            <div className={styles.paymentDataRight}>
              <h1 className={styles.paymentHeading}>Payment Information</h1>
              <div className={styles.paymentCardDetails}>
                {/* Card Name */}
                <div className={styles.cardNameContainer}>
                  <label>Name on Card</label>
                  <input
                    type="text"
                    placeholder="Enter Name on Card"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className={styles.cardInput}
                  />
                </div>

                {/* Card Information */}
                <div className={styles.cardInfo}>
                  <label>Card Information</label>
                  <div className={styles.cardNumberContainer}>
                    <input
                      type="text"
                      placeholder="1234 1234 1234 1234"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className={styles.cardInput}
                      max={16}
                      maxLength={16}
                    />
                    {/* Card Icons */}
                    <div className={styles.cardIcons}>
                      <img
                        src="/visa.png"
                        alt="Visa"
                        className={styles.cardIcon}
                      />
                      <img
                        src="/express.png"
                        alt="Card"
                        className={styles.cardIcon}
                      />
                    </div>
                  </div>

                  {/* Expiry Date and CVC */}
                  <div className={styles.cardDetailsRow}>
                    <div className={styles.expiryDateContainer}>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={expiryDate}
                        onChange={(e) => handleExpiryDateChange(e.target.value)}
                        className={styles.cardInput}
                        maxLength={5} // Limit input to "MM/YY"
                      />
                    </div>

                    <div className={styles.cvcContainer}>
                      <input
                        type="text"
                        placeholder="CVC"
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value)}
                        className={styles.cardInput}
                        maxLength={3}
                      />
                      {/* CVC Image */}
                      <img
                        src="/Group.png"
                        alt="CVC"
                        className={styles.cvcImage}
                      />
                    </div>
                  </div>
                </div>

                {/* Billing Address Radio Button */}
                <div className={styles.billingAddressContainer}>
                  <label>
                    <input
                      type="radio"
                      checked={isBillingSameAsShipping}
                      className={styles.paymentRadioBtn}
                      onChange={() => setIsBillingSameAsShipping(true)}
                    />
                    Billing Address is same as Shipping Address
                  </label>
                </div>

                {/* Proceed With Payment Button */}
                <button
                  className={styles.proceedButton}
                  onClick={handleProceedWithPayment}
                >
                  Proceed With Payment
                </button>
              </div>
            </div>
          </div>
        </div>
        <ContactPage />
        <Footer />
      </div>
    </>
  );
};

export default PaymentRoute;
