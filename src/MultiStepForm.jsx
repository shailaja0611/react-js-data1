// src/MultiStepForm.js
import React, { useState } from 'react';
import './App.css'

const steps = [
    { id: 'step1', label: 'Personal Information' },
    { id: 'step2', label: 'Contact Information' },
    { id: 'step3', label: 'Review' },
];

const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const nextStep = () => {
        setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
    };

    const prevStep = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Form submitted! Check the console for details.');
    };

    return (
        <div className="form-container">
            <h1>Multi-Step Form</h1>
            <div className="progress-indicator">
                {steps.map((step, index) => (
                    <div key={step.id} className={`step ${index <= currentStep ? 'active' : ''}`}>
                        {step.label}
                    </div>
                ))}
            </div>

            <form onSubmit={currentStep === steps.length - 1 ? handleSubmit : (e) => e.preventDefault()}>
                {currentStep === 0 && (
                    <div>
                        <label>
                            Name:
                            <input type="text" name="name" onChange={handleChange} required />
                        </label>
                    </div>
                )}
                {currentStep === 1 && (
                    <div>
                        <label>
                            Email:
                            <input type="email" name="email" onChange={handleChange} required />
                        </label>
                        <label>
                            Phone:
                            <input type="tel" name="phone" onChange={handleChange} required />
                        </label>
                    </div>
                )}
                {currentStep === 2 && (
                    <div>
                        <h2>Review Your Information</h2>
                        <p>Name: {formData.name}</p>
                        <p>Email: {formData.email}</p>
                        <p>Phone: {formData.phone}</p>
                    </div>
                )}
                <div className="button-group">
                    {currentStep > 0 && (
                        <button type="button" onClick={prevStep}>
                            Previous
                        </button>
                    )}
                    {currentStep < steps.length - 1 && (
                        <button type="button" onClick={nextStep}>
                            Next
                        </button>
                    )}
                    {currentStep === steps.length - 1 && (
                        <button type="submit">Submit</button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default MultiStepForm;
