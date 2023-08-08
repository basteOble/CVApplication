import Education from "./Education";
import GeneralInformation from "./GeneralInformation";
import Skills from "./Skills";
import Experience from "./Experience";
import { useState } from "react";

const Resume = () => {
  const [preview, setPreview] = useState(false)

  const generateCV = (e) => {
    e.preventDefault();
    setPreview(!preview)
  };

  return (
    <div className="resume">
      <form onSubmit={generateCV} action="">
        <GeneralInformation isHide={preview}/>
        <Skills isHide={preview}/>
        <Experience isHide={preview}/>
        <Education isHide={preview}/>
        <button className="submit">{preview ? 'Edit' : 'Preview'} CV</button>
      </form>
    </div>
  );
};

export default Resume;
