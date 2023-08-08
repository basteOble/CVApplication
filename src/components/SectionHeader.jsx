import "../styles/SectionHeader.css";

const SectionHeader = ({ isExperience, isHide }) => {
  return (
    <div className="section-header">
      <div>
        <input
          type="text"
          name={isExperience ? "company" : "school"}
          placeholder={isExperience ? "Company Name" : "School Name"}
          aria-label={`input ${isExperience ? "company" : "school"} name`}
          required
          disabled={isHide}
        />
        <input
          type="text"
          name={isExperience ? "job-title" : "program"}
          placeholder={
            isExperience ? "ex. Software Engineer" : "ex. Bs. Computer Science"
          }
          aria-label={`input ${isExperience ? "job title" : "degree"}`}
          required
          disabled={isHide}
        />
      </div>
      <div>
        <input
          type="text"
          name={isExperience ? "job-duration" : "program-duration"}
          placeholder="ex. Jan. 2020 - Jun. 2021"
          aria-label="start date to end date"
          required
          disabled={isHide}
        />
        <input
          type="text"
          name={isExperience ? "company-address" : "shool-address"}
          placeholder="Address"
          aria-label={`${
            isExperience ? "job-duration" : "program-duration"
          } location`}
          required
          disabled={isHide}
        />
      </div>
    </div>
  );
};

export default SectionHeader;
