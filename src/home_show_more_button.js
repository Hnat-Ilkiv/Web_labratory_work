import "./css/home_show_more_button.css"

const HomeShowMoreButton = (func, text) => {
	return (
		<button className="home_show_more_button" onClick={func}>
			{text}
		</button>
	);
};

export default HomeShowMoreButton;