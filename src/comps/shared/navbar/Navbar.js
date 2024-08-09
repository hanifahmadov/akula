import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";

/* GLOBAL STATES  & APIS*/
import { deviceDefault, userDefault } from "../../auth/shared/store/states";
import { signoutAPI } from "../../../apis/apiCalls";

/* STYLED COMPS */
import { Navbar_Container } from "./navbar.styled";

/* HELPER COMPS */
import Links from "./Links";
import { Fontawesome } from "../../home/supports/fontawesome/Fontawesome";
import { Account } from "../../auth/account/Account";
import OutsideClickHandler from "react-outside-click-handler";

export const Navbar = () => {
	const { tablet, mobile } = useRecoilValue(deviceDefault);
	const signedUser = useRecoilValue(userDefault);
	const resetSignedUser = useResetRecoilState(userDefault);

	const [showSettings, setShowSettings] = useState(false);

	const navigate = useNavigate();

	/** Logout click handler */
	const handleLogoutClick = (e) => {
		signoutAPI(signedUser)
			.then((res) => {
				console.log("Logout successful");
				resetSignedUser();
				navigate("/signin");
			})
			.catch((err) => {
				console.log("Logout error");
				console.log(err);
			});
	};

	const handleSettingsAvatarClick = (e) => {
		setShowSettings((showSettings) => !showSettings);
	};
	return (
		/** Navbar Main Container
		 *  add the same name as a classname
		 *  easy to track on console
		 */
		<Navbar_Container className='navbar_container'>
			{/** Navbar has 3 row container
			 * top : app header and links and POST button
			 * footer: logout
			 */}
			<div className='navbar_top_row'>
				{/*  application header */}
				<div className='application_header'>{tablet ? "PX" : "POLARX"}</div>

				<div className='navbar_links_wrapper'>
					<Links />
				</div>

				{/** button opens modal to post
				 * // TODO
				 */}
				<div className='post_button_from_navbar'>
					<span className='post'>POST</span>
					<span className='plus'>
						<Fontawesome type={"faPlus"} fontSize={"1.1rem"} />
					</span>
				</div>
			</div>

			<div className='navbar_footer_row'>
				{tablet ? (
					<div className='settings_on_mobileView'>
						<div className='settings_img_wrapper' onClick={handleSettingsAvatarClick}>
							<img src={signedUser.avatar} />
						</div>

						{showSettings && (
							<OutsideClickHandler
								onOutsideClick={() => {
									setShowSettings(false);
								}}
							>
								<div className='settings_account_wrapper'>
									<div className='settings_button button'>Settings</div>

									<motion.div
										onClick={handleLogoutClick}
										whileTap={{ scale: 0.95 }}
										className='logout button'
									>
										Logout
									</motion.div>
								</div>
							</OutsideClickHandler>
						)}
					</div>
				) : (
					<button className='logout_button' onClick={handleLogoutClick}>
						Logout
					</button>
				)}
			</div>
		</Navbar_Container>
	);
};
