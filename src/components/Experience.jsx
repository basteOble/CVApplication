import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/Experience.css";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Responsibility from "./Responsibility";

const Experience = ({ isHide }) => {
  const [experience, setExperience] = useState([]);

  const deleteExperienceHandler = (id) => {
    const updatedExperience = experience.filter((item) => item.id !== id);
    setExperience(updatedExperience);
  };

  const addExperienceHandler = () => {
    const newExperience = {
      id: uuidv4(),
      item: "",
    };
    setExperience([...experience, newExperience]);
  };

  const experienceList = experience.map(({ id }) => {
    return (
      <div key={id}>
        <SectionHeader onHide={isHide} isExperience={true} />
        <Responsibility isHide={isHide} />
        {!isHide && (
          <button type="button" onClick={() => deleteExperienceHandler(id)}>
            <i className="fa-solid fa-minus"></i> Experience
          </button>
        )}
      </div>
    );
  });

  return (
    <Section isHide={isHide} title={"WORK EXPERIENCE"} onAddHandler={addExperienceHandler}>
      {experienceList.length === 0 && !isHide ? <p>Empty Experience!</p> : experienceList}
    </Section>
  );
};

export default Experience;
