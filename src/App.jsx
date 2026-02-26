import { useState } from "react";
import PersonalIdentity from "./components/PersonalIdentity";
import OnlinePresence from "./components/OnlinePresence";
import Skills from "./components/Skills";
import Motivation from "./components/Motivation";
import SubmittedForm from "./components/SubmittedForm";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    speciality: "",
    level: "",
    university: "",
    linkedin: "",
    github: "",
    portfolio: "",
    skills: [],
    goal: "",
    objective: "",
    heardFrom: "",
    otherSkills: "",
    primaryInterest: "",
  });
  const [errors, setErrors] = useState("");

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const validate = () => {
    const algerianPhoneRegex = /^0[567][5-9][0-9]{7}$/;
    const newErrors = {};
    if (!formData.fullName)
      newErrors.fullName = "Full name is required";
    if (!formData.age) newErrors.age = "Age is required";
    if (!formData.speciality)
      newErrors.speciality = "Speciality is required";
    if (!formData.level) newErrors.level = "Level is required";
    if (!formData.university)
      newErrors.university = "University is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!algerianPhoneRegex.test(formData.phone)) {
      newErrors.phone =
        "Please enter a valid Algerian phone number (e.g., 0555xxxxxx)";
    }
    if (!formData.primaryInterest)
      newErrors.primaryInterest = "Primary interest is required";

    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="bg-[url('./assets/Gemini_Generated_Image_pj19olpj19olpj19.png')] bg-cover min-h-screen py-14 flex justify-center items-center">
      <div className="bg-white w-120 rounded-3xl shadow-lg flex flex-col items-center text-2xl font-bold pb-8">
        <div className="w-full h-28 bg-[url('./assets/mini_bg.png')] bg-cover rounded-t-3xl flex flex-col justify-center gap-1 p-8 text-white">
          <h1 className="text-3xl">
            Join Our{" "}
            <span className="text-secondary">Syndicate.</span>
          </h1>
          <h6 className="text-xs font-normal text-placeholder">
            Tell us who you are — we review every single application.
          </h6>
          <div className="flex flex-row gap-1 mt-4">
            <span className="w-full h-1 rounded-full bg-secondary"></span>
            <span className="w-full h-1 rounded-full bg-secondary"></span>
            <span className="w-full h-1 rounded-full bg-secondary"></span>
            <span className="w-full h-1 rounded-full bg-secondary"></span>
          </div>
        </div>

        {/* personal identity */}
        <PersonalIdentity
          onChange={handleChange}
          errors={errors}
          formData={formData}
        />

        {/* online presence */}
        <OnlinePresence
          onChange={handleChange}
          errors={errors}
          formData={formData}
        />

        {/* skills */}
        <Skills
          onChange={handleChange}
          errors={errors}
          formData={formData}
        />

        {/* motivation */}
        <Motivation
          onChange={handleChange}
          errors={errors}
          formData={formData}
        />

        <button
          className="text-xs rounded-md border border-placeholder bg-text w-34 h-10 p-2 text-white font-medium mt-4"
          onClick={handleSubmit}
        >
          Submit Application
        </button>
      </div>
      {submitted && <SubmittedForm />}
    </div>
  );
}

export default App;
