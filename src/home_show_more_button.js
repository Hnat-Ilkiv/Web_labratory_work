const HomeShowMoreButton = (func, text) => {
	return (
		<button className="button" onClick={func}>
			{text}
		</button>
	);
};

export default HomeShowMoreButton;