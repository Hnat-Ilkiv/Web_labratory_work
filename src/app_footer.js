import React from "react";
import "./css/app_footer.css"
import BrandingStuff from "./app_footer_branding";

const AppFooter = () => {
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

export default AppFooter;
