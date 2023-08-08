const Section = (props) => {
  const { title, children, isHide, onAddHandler } = props
  return (
    <div>
      <h1>{title}</h1>
      {children}
      {!isHide && (
        <div>
          <button
            type="button"
            onClick={onAddHandler}
            aria-label={`add ${title}`}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Section;
