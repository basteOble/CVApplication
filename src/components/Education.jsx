import { useState } from "react";
import "../styles/Education.css";
import Section from "./Section";
import { v4 as uuidv4 } from "uuid";
import SectionHeader from "./SectionHeader";

const Education = ({ isHide }) => {
  const [education, setEducation] = useState([]);

  const addEducationHandler = () => {
    const newEducation = {
      id: uuidv4(),
      item: "",
    };
    setEducation([...education, newEducation]);
  };

  const deleteEducationHandler = (id) => {
    const updateEducation = education.filter((item) => item.id !== id);
    setEducation(updateEducation);
  };

  const educationList = education.map(({ id }) => {
    return (
      <div key={id}>
        <SectionHeader isHide={isHide} />
        {!isHide && (
          <button type="button" onClick={() => deleteEducationHandler(id)}>
            <i className="fa-solid fa-minus"></i> Education
          </button>
        )}
      </div>
    );
  });

  return (
    <Section
      isHide={isHide}
      title={"EDUCATION & CERTIFICATION"}
      onAddHandler={addEducationHandler}
    >
      {educationList.length === 0 && !isHide ? (
        <p>Empty Education!</p>
      ) : (
        educationList
      )}
    </Section>
  );
};

export default Education;
