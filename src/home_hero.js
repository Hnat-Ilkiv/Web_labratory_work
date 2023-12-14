import React from "react";
import "./css/home_hero.css";
import hero_img from "./images/hero_image.jpg";

const HomeHero = () => {
	return (
		<div className="home_hero">
			<img className="home_hero_image" src={hero_img} alt="Hero Img" />
			<div className="home_hero_information">
				<div className="home_hero_title">Dating shop</div>
				<div className="home_hero_description">
					<p>
						Welcome to "Kun Market" – your personal space 
						for online dates with your favorite anime guys! 
						In our store, you can choose a personal companion 
						from the anime world for a unique evening together.
					</p>
					<p>
						It's the perfect gift for fans of Japanese culture 
						or those looking to add charm to their lives. 
						Order your online date today and dive into a 
						fantastic world of emotions and adventures!
					</p>
				</div>
			</div>
		</div>
	);
};

export default HomeHero;
