import React from "react";
import "./css/app_footer_branding.css";
import logo from "./images/logo.png";

const BrandingStuff = (props) => {
	return (
		<div className="branding_stuff">
			<div className="branding_stuff_text">
				<p className="branding_stuff_title">
					KUN market
				</p>
				<p>
				The best shop for singles :{")"}
				</p>
			</div>
			<div>
				<img src={logo} className="logo_footer" alt="Logo" />
			</div>
			<div className="social_networks">
				<a href="https://www.facebook.com">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="" />
				</a>
				<a href="https://twitter.com">
					<img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png " alt="" />
				</a>
				<a href="https://www.linkedin.com/">
					<img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="" />
				</a>
			</div>
		</div>
	);
};

export default BrandingStuff;
