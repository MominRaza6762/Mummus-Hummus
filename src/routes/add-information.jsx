import React, { useState } from "react";
import styles from "../styles/addinfo.module.css";
import { useNavigate } from "react-router-dom";
import NavbarComp from "../NavbarComp";
import { ContactPage } from "../components/contact/contact";
import Footer from "../components/footer/footer";

const AddInformation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();


  // State for form inputs
  const [formData, setFormData] = useState({
    fullName: "",
    contactInfo: "",
    email: "",
    street: "",
    builderNumber: "",
    zipCode: "",
    floor: "",
    apartment: "",
    note: "",
  });

  // State for errors
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear errors when user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }
    if (!formData.contactInfo.trim()) {
      newErrors.contactInfo = "Contact Information is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.street.trim()) {
      newErrors.street = "Street name is required";
    }
    if (!formData.builderNumber.trim()) {
      newErrors.builderNumber = "Builder Number is required";
    }
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = "Zip Code is required";
    }
    if (!formData.floor.trim()) {
      newErrors.floor = "Floor is required";
    }
    if (!formData.apartment.trim()) {
      newErrors.apartment = "Apartment is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Mock API call
      try {
        // const response = await fetch("https://example.com/api/submit", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(formData),
        // });

        // if (response.ok) {
        //   alert("Form submitted successfully!");
        //   // Reset form
        //   setFormData({
        //     fullName: "",
        //     contactInfo: "",
        //     email: "",
        //     street: "",
        //     builderNumber: "",
        //     zipCode: "",
        //     floor: "",
        //     apartment: "",
        //     note: "",
        //   });
        // } else {
        //   alert("Failed to submit form. Please try again.");
        // }

        navigate("/checkout")

      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <NavbarComp isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={`${styles.infoContainer} ${isOpen ? styles.navOpen : ""}`}>
        <div className={styles.infoContent}>
          <div className={styles.infoHeadingCon}>
            <h1>Information Details</h1>
          </div>
          <div className={styles.topHeadingContainer}>
            <p>Name and Address</p>
            <span>Payment Process</span>
          </div>
          {/* Form Container */}
          <form onSubmit={handleSubmit} className={styles.infoForm}>
            {/* Full Name */}
            <label className={styles.label}>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              className={styles.input}
              value={formData.fullName}
              onChange={handleInputChange}
            />
            {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}

            {/* Contact Information */}
            <label className={styles.label}>Contact Information</label>
            <input
              type="text"
              name="contactInfo"
              placeholder="Contact Information"
              className={styles.input}
              value={formData.contactInfo}
              onChange={handleInputChange}
            />
            {errors.contactInfo && <p className={styles.error}>{errors.contactInfo}</p>}

            {/* Email Address */}
            <label className={styles.label}>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              className={styles.input}
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}

            {/* Address Verification */}
            <label className={styles.label}>Address Verification</label>
            <div className={styles.addressContainer}>
              <input
                type="text"
                name="street"
                placeholder="Enter Street name (Stockholm city only)"
                className={styles.addressInput}
                value={formData.street}
                onChange={handleInputChange}
              />
              {errors.street && <p className={styles.error}>{errors.street}</p>}

              <input
                type="text"
                name="builderNumber"
                placeholder="Builder Number"
                className={styles.addressInput}
                value={formData.builderNumber}
                onChange={handleInputChange}
              />
              {errors.builderNumber && <p className={styles.error}>{errors.builderNumber}</p>}

              <input
                type="text"
                name="zipCode"
                placeholder="Zip Code / Area Code"
                className={styles.addressInput}
                value={formData.zipCode}
                onChange={handleInputChange}
              />
              {errors.zipCode && <p className={styles.error}>{errors.zipCode}</p>}

              <input
                type="text"
                name="floor"
                placeholder="Floor"
                className={styles.addressInput}
                value={formData.floor}
                onChange={handleInputChange}
              />
              {errors.floor && <p className={styles.error}>{errors.floor}</p>}

              <input
                type="text"
                name="apartment"
                placeholder="Apartment Company Name or Number"
                className={styles.addressInput}
                value={formData.apartment}
                onChange={handleInputChange}
              />
              {errors.apartment && <p className={styles.error}>{errors.apartment}</p>}
            </div>

            {/* Note for Rider */}
            <label className={styles.label}>Note for Rider</label>
            <textarea
              name="note"
              placeholder="Enter Note here..."
              className={styles.textarea}
              value={formData.note}
              onChange={handleInputChange}
              rows={4}
            />

            {/* Submit Button */}
            <button type="submit" className={styles.submitButton}>
              Confirm Information
            </button>
          </form>
        </div>
        <ContactPage />
        <Footer />
      </div>
    </>
  );
};

export default AddInformation;