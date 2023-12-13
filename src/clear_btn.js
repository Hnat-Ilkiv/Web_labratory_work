import "./css/clear_button.css";

const ClearButton = (func) => {
  return <button className="clear_button" onClick={func}>Clear</button>;
};

export default ClearButton;