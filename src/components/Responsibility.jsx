import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/Responsibility.css";

const Responsibility = ({ isHide }) => {
  const [responsibility, setResponsibility] = useState([]);

  const deleteResponsibilityHandler = (id) => {
    const updateResponsibility = responsibility.filter(
      (item) => item.id !== id
    );
    setResponsibility(updateResponsibility);
  };

  const responsibilityList = responsibility.map(({ id }) => {
    return (
      <div className="responsibility" key={id}>
        <p>&#8226;</p>
        <textarea
          type="text"
          name="responsibility"
          placeholder="Job Responsibilities"
          aria-label="input skill"
          required
          disabled={isHide}
        />
        {!isHide && (
          <button type="button" onClick={() => deleteResponsibilityHandler(id)}>
            <i className="fa-solid fa-x"></i>
          </button>
        )}
      </div>
    );
  });

  const addResponsibilityHandler = () => {
    const newResponsibility = {
      id: uuidv4(),
      item: "",
    };
    setResponsibility([...responsibility, newResponsibility]);
  };

  return (
    <>
      <div className="job-responsibilities">
        {responsibilityList.length === 0 && !isHide ? (
          <p>Empty Responsibility!</p>
        ) : (
          responsibilityList
        )}
      </div>
      {!isHide && (
        <div>
          <button type="button" onClick={addResponsibilityHandler}>
            <i className="fa-solid fa-plus"></i> Responsibility
          </button>
        </div>
      )}
    </>
  );
};

export default Responsibility;
