import React from "react";

const FaqSection = () => {
  return (
    <div className="w-11/12 mx-auto py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-700 tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 mt-2">
          Everything you need to know about our platform
        </p>
      </div>

      <div className="space-y-4">
        <div tabIndex="0" className="collapse collapse-arrow bg-white border border-emerald-100 shadow-sm rounded-xl">
          <div className="collapse-title font-bold text-gray-800">
            How do I create an account?
          </div>
          <div className="collapse-content text-gray-600 text-sm">
            Click the "Sign Up" button in the top right corner and follow the registration process step by step.
          </div>
        </div>
        <div tabIndex="0" className="collapse collapse-arrow bg-white border border-emerald-100 shadow-sm rounded-xl">
          <div className="collapse-title font-bold text-gray-800">
            How can I book a sports facility?
          </div>
          <div className="collapse-content text-gray-600 text-sm">
            Choose your preferred facility, select a time slot, and confirm your booking instantly.
          </div>
        </div>
        <div tabIndex="0" className="collapse collapse-arrow bg-white border border-emerald-100 shadow-sm rounded-xl">
          <div className="collapse-title font-bold text-gray-800">
            Can I cancel my booking?
          </div>
          <div className="collapse-content text-gray-600 text-sm">
            Yes, you can cancel your booking before 24 hours of the scheduled time from your dashboard.
          </div>
        </div>
        <div tabIndex="0" className="collapse collapse-arrow bg-white border border-emerald-100 shadow-sm rounded-xl">
          <div className="collapse-title font-bold text-gray-800">
            Is the platform free to use?
          </div>
          <div className="collapse-content text-gray-600 text-sm">
            Browsing is free, but booking charges depend on the selected sports facility.
          </div>
        </div>

      </div>
    </div>
  );
};

export default FaqSection;