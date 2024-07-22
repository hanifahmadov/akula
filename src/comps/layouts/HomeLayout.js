/* NPM PACKAGES */
import React, { useState, useRef, useEffect } from "react";
import { useRecoilState, useResetRecoilState, useRecoilValue } from "recoil";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHouse,
	faBell,
	faMessage,
	faBookmark,
	faBriefcase,
	faArrowUpRightDots,
	faSquarePlus,
	faEllipsis,
	faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(
	faHouse,
	faBell,
	faMessage,
	faBookmark,
	faArrowUpRightDots,
	faBriefcase,
	faSquarePlus,
	faEllipsis,
	faRightFromBracket
);

/* STYLED & STATES & API */
import {
	Navbar_Container,
	HomeLayout_Container,
	Links_Section,
	Logout_Section,
	Content_Container,
} from "./layouts.styled";
import { activeLinkDefault, userDefault } from "../auth/shared/store/states";
import { signoutApi } from "../../apis/apiCalls";

export const HomeLayout = () => {
	const signedUser = useRecoilValue(userDefault);
	const [activeLink, setActiveLink] = useRecoilState(activeLinkDefault);
	const navigate = useNavigate();
	const activeLinkStyled = {
		background: "#ffffff99",
		borderColor: "#ffffff10",
		color: "#000",
	};

	const disabledLinkStyled = {
		color: "#ffffff60",
		background: "#ffffff10",
		cursor: "not-allowed",
	};

	const handleSignoutClick = (e) => {
		signoutApi(signedUser)
			.then((res) => {
				console.log(res);
				navigate("/signin");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<HomeLayout_Container className='homeLayout'>
			<Navbar_Container className='navbar column'>
				<div className='left_content_wrapper'>
					{/* this div is just for to keep the logout button in the end */}
					{/* no idea why position relative-absolute bottom 0 didnt work */}
					<div className='grouping_name_links'>
						<div className='logo_wrapper'>
							<span className='name'>POLARX</span>
						</div>

						<Links_Section className='left_navlinks_section'>
							<Link
								to={"/"}
								onClick={() => setActiveLink(1)}
								style={activeLink == 1 ? activeLinkStyled : {}}
							>
								<FontAwesomeIcon className='icon' icon={faHouse} />
								<span>Home</span>
							</Link>

							<Link
								to={"notifications"}
								onClick={() => setActiveLink(2)}
								style={activeLink == 2 ? activeLinkStyled : {}}
							>
								<FontAwesomeIcon className='icon' icon={faBell} />
								<span>Notifications</span>
							</Link>

							<Link
								to={"messages"}
								onClick={() => setActiveLink(3)}
								style={activeLink == 3 ? activeLinkStyled : {}}
							>
								<FontAwesomeIcon className='icon' icon={faMessage} />
								<span>Messages</span>
							</Link>

							<Link
								to={"bookmarks"}
								onClick={() => setActiveLink(4)}
								style={activeLink == 4 ? activeLinkStyled : {}}
							>
								<FontAwesomeIcon className='icon' icon={faBookmark} />
								<span>Bookmarks</span>
							</Link>

							<Link aria-disabled style={disabledLinkStyled}>
								<FontAwesomeIcon className='icon disabled' icon={faArrowUpRightDots} />
								<span>Premium</span>
							</Link>

							<Link aria-disabled style={disabledLinkStyled}>
								<FontAwesomeIcon className='icon disabled' icon={faBriefcase} />
								<span>Jobs</span>
							</Link>

							<Link aria-disabled style={disabledLinkStyled}>
								<FontAwesomeIcon className='icon disabled' icon={faEllipsis} />
								<span>More</span>
							</Link>

							<button className='post'>POST</button>
						</Links_Section>
					</div>

					<Logout_Section className='logout_section' onClick={handleSignoutClick}>
						<span className='logout'>Sign out</span>
						<FontAwesomeIcon className='icon_logout' icon={faRightFromBracket} />
					</Logout_Section>
				</div>
			</Navbar_Container>

			<Content_Container className='content column'>
				<div className='content_internal_wrapper'>
					<Outlet />
				</div>
			</Content_Container>
		</HomeLayout_Container>
	);
};
