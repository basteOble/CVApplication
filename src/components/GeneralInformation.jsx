import "../styles/GeneralInformation.css";

const GeneralInformation = ({ isHide }) => {

  return (
    <div className="general-information">
      <input
        type="text"
        className="general-information__name"
        name="name"
        placeholder="First Second M. Last"
        aria-label="fullname"
        required
        disabled={isHide}
      />
      <div className="general-information__contacts">
        <div>
          <label>
            <i className="fa-solid fa-envelope"></i>
            <input
              type="email"
              name="email"
              placeholder="firstlast@gmail.com"
              aria-label="email"
              required
              disabled={isHide}
            />
          </label>
        </div>
        <div>
          <label>
            <i className="fa-solid fa-phone"></i>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="+63 (***) *** ****"
              aria-label="phone number"
              required
              disabled={isHide}
            />
          </label>
        </div>
        <div>
          <label>
            <i className="fa-solid fa-location-dot"></i>
            <input
              type="text"
              name="address"
              placeholder="City, Province, Philippines"
              aria-label="address"
              required
              disabled={isHide}
            />
          </label>
        </div>
      </div>
      <div className="general-information__contacts">
        <div>
          <label>
            <i className="fa-brands fa-github"></i>
            <input
              type="url"
              name="github"
              placeholder="https://github.com/codename"
              aria-label="github link"
              required
              disabled={isHide}
            />
          </label>
        </div>
        <div>
          <label>
            <i className="fa-brands fa-linkedin"></i>
            <input
              type="url"
              name="linkedIn"
              placeholder="https://linkedIn.com/in/firstlast"
              aria-label="linkedin link"
              required
              disabled={isHide}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;
