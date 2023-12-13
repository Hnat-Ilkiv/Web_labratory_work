import React from "react";
import "./css/footer.css"
import BrandingStuff from "./branding_stuff";

const Footer = () => {
	return (
		<div className="footer">
			<BrandingStuff />
			<div className="line_div">
				<div className="line">
				</div>
			</div>
			<div className="line_div">2020 IoT © Copyright all rights reserved, bla bla</div>
		</div>
	);
}

export default Footer;
