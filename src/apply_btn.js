import "./css/apply_button.css";

const ApplyButton = (func) => {
  return (
    <button className="apply_button" onClick={func}>
      Apply
    </button>
  );
};

export default ApplyButton;