import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

/* GLOBAL STATES  & APIS*/
import { deviceDefault, userDefault } from "../../auth/shared/store/states";
import { signoutAPI } from "../../../apis/apiCalls";

/* STYLED COMPS */
import { Navbar_Container } from "./navbar.styled";

/* HELPER COMPS */
import Links from "./Links";
import { Fontawesome } from "../../home/supports/fontawesome/Fontawesome";

export const Navbar = () => {
	const { tablet } = useRecoilValue(deviceDefault);
	const signedUser = useRecoilValue(userDefault);
	const navigate = useNavigate();

	/** Logout click handler */
	const handleLogoutClick = (e) => {
		signoutAPI(signedUser)
			.then((res) => {
				console.log("Logout successful");
				navigate("/signin");
			})
			.catch((err) => {
				console.log("Logout error");
				console.log(err);
			});
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
						<Fontawesome type={"faPlus"} />
					</span>
				</div>
			</div>

			<div className='navbar_footer_row'>
				<button className='logout_button' onClick={handleLogoutClick}>
					Logout
				</button>
			</div>
		</Navbar_Container>
	);
};
