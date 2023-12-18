import React, { useState, useEffect } from "react";
import "./css/home_list.css";
import HomeCard from "./home_card";
import HomeShowMoreButton from "./home_show_more_button";
import getKuns from "./api";

const HomeList = () => {
	const [kunsList, setKunsList] = useState([]);
	const [currentPart, setIsViewMore] = useState(1);

	useEffect(() => {
		getKuns().then((data) => {
			setKunsList(data);
		});
	}, []);

	const toggle = () => {
		if ((currentPart + 1) * 4 <= Math.ceil(kunsList.length / 4) * 4) {
			setIsViewMore(currentPart + 1);
			const home_list_show = document.getElementsByClassName("home_list_show")[0];
			const size = ((currentPart + 1) * 400 + 20) + "px";
			home_list_show.style.height = size;
		}
	};

	return (
		<div className="home_list">
			<div className="home_list_show">
			{
				kunsList.length > 0
				? ((kunsList.slice(0, currentPart * 4).map((kun) => HomeCard(kun.id, kun))))
				: (
					<div class="loader-container">
						<div class="loader"></div>
					</div>

				)
			}
			</div>
			{
				(currentPart + 1) * 4 <= Math.ceil(kunsList.length / 4) * 4
				? (
				<div className="home_show_more">
					{
						HomeShowMoreButton(toggle, "View more")
					}
				</div>
				) : (<div style={{ height: "30px" }} />)
			}
		</div>
	);
};

export default HomeList;
