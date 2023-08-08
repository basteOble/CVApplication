import { useState } from "react";
import "../styles/Skills.css";
import { v4 as uuidv4 } from "uuid";
import Section from "./Section";

const Skills = ({ isHide }) => {
  const [skills, setSkills] = useState([]);

  const deleteSkillHandler = (id) => {
    const updateSkills = skills.filter((item) => item.id !== id);
    setSkills(updateSkills);
  };

  const skillList = skills.map(({ id }) => {
    return (
      <div className="skill" key={id}>
        <input
          type="text"
          name="skill"
          placeholder="Skill"
          aria-label="input skill"
          required
          disabled={isHide}
        />
        {!isHide &&
          <button type="button" onClick={() => deleteSkillHandler(id)}>
            <i className="fa-solid fa-x"></i>
          </button>
        }
      </div>
    );
  });

  const addSkillHandler = () => {
    const newSkills = {
      id: uuidv4(),
      item: "",
    };
    setSkills([...skills, newSkills]);
  };

  return (
    <Section isHide={isHide} title={"TECHNICAL SKILLS & TOOLS"} onAddHandler={addSkillHandler}>
      {skillList.length === 0 && !isHide ? (
        <p>Skills Empty!</p>
      ) : (
        <div className="skills">{skillList}</div>
      )}
    </Section>
  );
};

export default Skills;
