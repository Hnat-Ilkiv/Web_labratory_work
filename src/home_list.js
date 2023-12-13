import React, { useState, useEffect } from "react";
import "./css/home_list.css";
import HomeCard from "./home_card";
import HomeShowMoreButton from "./home_show_more_button";
import getKuns from "./api";

const HomeList = () => {
	const [items, setItems] = useState([]);
	const [isViewMore, setIsViewMore] = useState(false);

	useEffect(() => {
		getKuns().then((data) => {
			setItems(data);
		});
	}, []);

	const toggle = () => {
		setIsViewMore(!isViewMore);
		const element = document.getElementsByClassName("bank_list1")[0];
		if (!isViewMore) {
			const size = Math.ceil((items.length / 5) * 450) + "px";
			element.style.height = size;
		} else {
			element.style.height = "420px";
		}
	};

	return (
		<div className="second_section">
			<div className="bank_list1">
			{
				items.length > 0
				? (isViewMore
					? (items.map((item) => HomeCard(item.id, item)))
					: (items.slice(0, 5).map((item) => HomeCard(item.id, item))))
				: (
					<div className="loader">
						Loading...
					</div>
				)
			}
			</div>

			<div className="button_div">
				{
					isViewMore
					? HomeShowMoreButton(toggle, "Hide")
					: HomeShowMoreButton(toggle, "View more")
				}
			</div>
		</div>
	);
};

export default HomeList;
