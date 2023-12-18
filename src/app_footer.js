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
			<div className="line_div">2023 IoT © Web programing</div>
		</div>
	);
}

export default AppFooter;
