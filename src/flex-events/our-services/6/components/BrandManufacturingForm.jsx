import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../utils/firebaseConfig";

const BrandManufacturingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    brandType: "",
    logoDesign: "",
    brandingMaterials: [],
    packagingPreference: "",
    budgetRange: "",
    productionScale: "",
    additionalDetails: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        brandingMaterials: checked
          ? [...prevState.brandingMaterials, value]
          : prevState.brandingMaterials.filter((item) => item !== value),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "services"), {
        ...formData,
        submittedAt: new Date(),
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        brandType: "",
        logoDesign: "",
        brandingMaterials: [],
        packagingPreference: "",
        budgetRange: "",
        productionScale: "",
        additionalDetails: "",
      });

      alert("Brand Manufacturing Consultation Request submitted successfully!");
    } catch (error) {
      console.error("Error submitting request:", error);
      alert("Failed to submit Brand Manufacturing Consultation request.");
    }
  };

  return (
    <div className="border border-gray-400 max-w-4xl mx-auto p-8 font-sans my-6">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Side - Branding */}
        <div>
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Start Your Brand Manufacturing Journey
          </h1>
          <div className="space-y-4 text-gray-600">
            <div className="flex items-center space-x-3">
              📍 <span>Plot 2973, Kisaasi-Kyanja Road, Kyanja, Kampala, Uganda</span>
            </div>
            <div className="flex items-center space-x-3">
              📞{" "}
              <a
                href="tel:+256772406122"
                className="block text-sm underline decoration-black underline-offset-1"
              >
                +256 772 406 122
              </a>
            </div>
            <div className="flex items-center space-x-3">
              ✉️{" "}
              <a
                href="mailto:info@flexevents.ug"
                className="block text-sm underline decoration-black underline-offset-1"
              >
                info@flexevents.ug
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Brand Manufacturing Consultation</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name *"
                required
                className="w-full px-3 py-2 border rounded-md"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name *"
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number *"
                required
                className="w-full px-3 py-2 border rounded-md"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <select
              name="brandType"
              value={formData.brandType}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="">Brand Type *</option>
              <option value="Clothing & Fashion">Clothing & Fashion</option>
              <option value="Beauty & Skincare">Beauty & Skincare</option>
              <option value="Electronics">Electronics</option>
              <option value="Food & Beverages">Food & Beverages</option>
              <option value="Other">Other</option>
            </select>

            <input
              type="text"
              name="logoDesign"
              value={formData.logoDesign}
              onChange={handleChange}
              placeholder="Do you have a logo design? (Yes/No/Need One)"
              className="w-full px-3 py-2 border rounded-md"
            />

            <div className="space-y-2">
              <label className="block font-semibold">Branding Materials *</label>
              <div className="grid md:grid-cols-2 gap-2">
                {["Business Cards", "Labels", "Brochures", "Flyers", "Stickers", "Other"].map(
                  (material) => (
                    <div key={material} className="flex items-center">
                      <input
                        type="checkbox"
                        id={material}
                        name="brandingMaterials"
                        value={material}
                        checked={formData.brandingMaterials.includes(material)}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor={material}>{material}</label>
                    </div>
                  )
                )}
              </div>
            </div>

            <input
              type="text"
              name="packagingPreference"
              value={formData.packagingPreference}
              onChange={handleChange}
              placeholder="Preferred Packaging (Box, Bag, Wrapper, etc.)"
              className="w-full px-3 py-2 border rounded-md"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <select
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Budget Range *</option>
                <option value="500-1000">UGX 500,000 - 1,000,000</option>
                <option value="1000-2500">UGX 1,000,000 - 2,500,000</option>
                <option value="2500-5000">UGX 2,500,000 - 5,000,000</option>
                <option value="5000+">UGX 5,000,000+</option>
              </select>

              <select
                name="productionScale"
                value={formData.productionScale}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Production Scale *</option>
                <option value="Small Batch">Small Batch</option>
                <option value="Medium Scale">Medium Scale</option>
                <option value="Large Scale">Large Scale</option>
              </select>
            </div>

            <textarea
              name="additionalDetails"
              value={formData.additionalDetails}
              onChange={handleChange}
              placeholder="Additional Details or Special Requirements"
              className="w-full px-3 py-2 border rounded-md"
              rows="4"
            ></textarea>

            <button type="submit" className="w-full bg-black text-white py-3 rounded-md">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BrandManufacturingForm;
