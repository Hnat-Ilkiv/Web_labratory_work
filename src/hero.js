import React from "react";
import "./css/hero.css";
import hero_bank from "./images/hero_bank.jfif";

const Hero = () => {
	return (
		<div className="hero">
			<img src={hero_bank} alt="" />
			<div className="text_div">
				<div className="text_title">
					Banks catalog
				</div>
				<div>
					Here you can choose bank
				</div>
			</div>
		</div>
	);
};

export default Hero;
