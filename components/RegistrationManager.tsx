"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";

export default function RegistrationManager() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    userType: "", 
  });

  // FIX: Loftet er ændret fra 6 til 7, så den kan ramme bekræftelsessiden!
  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 7));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleStep2Data = (data: any) => {
    setFormData((prev) => ({ ...prev, userType: data.type }));
    nextStep();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 onNext={nextStep} />;

      case 2:
        return (
          <Step2 
            onNext={handleStep2Data} 
            onBack={prevStep} 
            initialData={formData} 
          />
        );

      case 3:
        return (
          <Step3 
            onNext={(data) => {
              setFormData((prev) => ({ ...prev, ...data }));
              nextStep();
            }} 
            onBack={prevStep}
            initialData={formData} 
          />
        );

      case 4:
        return (
          <Step4 
            onNext={(data) => {
              setFormData((prev) => ({ ...prev, ...data }));
              nextStep();
            }} 
            onBack={prevStep} 
            initialData={formData}
          />
        );

      case 5:
        return (
          <Step5 
            onNext={(data) => {
              setFormData((prev) => ({ ...prev, ...data }));
              nextStep();
            }} 
            onBack={prevStep}
            initialData={formData} 
          />
        );

      case 6:
        return (
          <Step6 
            formData={formData} 
            onBack={prevStep} 
            onEdit={(stepNumber) => setCurrentStep(stepNumber)} 
            onSubmit={(finalData) => {
              console.log("Afsendt data:", finalData);
              nextStep(); 
            }} 
          />
        );

      case 7:
        return (
          <Step7 
            onReset={() => {
              // Sender brugeren trygt tilbage til forsiden af sitet
              window.location.href = '/'; 
            }} 
          />
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center px-4 min-h-screen">
      {/* Progress Bar (Viser stadig de 6 reelle trin, da Step 7 er ren succes-skærm) */}
      <div className="flex items-center justify-between w-full mb-10 md:mb-30 relative md:px-20">
        {[1, 2, 3, 4, 5, 6].map((step) => (
          <div key={step} className="flex items-center flex-1 last:flex-none">
            <div className={`w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center text-sm md:text-2xl font-bold transition-all z-10 ${
              currentStep > step || currentStep === 7 ? "bg-secondary-purple text-white" :
              currentStep === step ? "bg-primary-blue border-2 border-secondary-purple text-secondary-purple scale-110 shadow-md" :
              "bg-primary-blue text-gray-400"
            }`}>
              {currentStep > step || currentStep === 7 ? <Check className="w-5 h-5 md:w-9 md:h-9 stroke-[3px]" /> : step}
            </div>
            {step < 6 && (
              <div className="flex-1 mx-0 md:mx-2">
                <div className={`h-[2px] w-full transition-all duration-700 ${currentStep > step || currentStep === 7 ? "bg-secondary-purple" : "border-t-2 border-dashed border-gray-200"}`} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="w-full">{renderStep()}</div>
    </div>
  );
}