import React from "react";
import "./css/home_hero.css";
import hero_img from "./images/hero_bank.jfif";

const HomeHero = () => {
	return (
		<div className="hero">
			<img src={hero_img} alt="Hero Img" />
			<div className="text_div">
				<div className="text_title">WaifuSelector</div>
				<div className="page_description">
					Welcome to "WaifuSelector" – your personal guide to the world of
					waifus. On our website, you'll discover a wide array of
					waifu characters who are ready to become your loyal companions and
					cherished friends. We offer you a vast selection of anime characters,
					among which you can find the one that resonates with you the most.
					<br />
					At "WaifuSelector," you can search for waifus based on various
					criteria such as appearance, personality, interests, and more. Each
					character has their unique page with detailed descriptions and images.
					You can also interact with fellow users, exchanging tips and
					recommendations on choosing your ideal waifu.
					<br />
					Join our community and find your perfect waifu. It's time to embark on
					a journey into the enchanting world of waifus, all in the English
					language!
				</div>
			</div>
		</div>
	);
};

export default HomeHero;
