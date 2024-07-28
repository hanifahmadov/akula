/** NPM IMPORTS */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

/** Fontawesome imports and setups
 *
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
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

/**
 * STYLED COMPONENTS
 * Links is using navbar styled comps
 * */
import { Links_Container } from "./navbar.styled";

/** GLOBAL STATES */
import { activeLinkDefault } from "../../auth/shared/store/states";

/** Link is an react-router-dom element and cant send a activeLink as a prop to it.
 * so, i am gonna make a inline-styling for now, maybe later i can change it
 */

const Links = () => {
	/** activeLink is an global state */
	const [activeLink, setActiveLink] = useRecoilState(activeLinkDefault);

	/** those are styles for active link and disabled links
	 *  some navbar links are disabled, will work on it later
	 */

	const activeLinkStyled = {
		background: "#000",
		borderColor: "#ffffff10",
		color: "#fff",
	};

	const disabledLinkStyled = {
		color: "#00000070",
		background: "#fff",
		cursor: "not-allowed",
	};

	return (
		<Links_Container className='links_container'>
			<Link to={"/"} onClick={() => setActiveLink(1)} style={activeLink == 1 ? activeLinkStyled : {}}>
				<FontAwesomeIcon className='icon' icon={faHouse} />
				<span className='link_text home'>Home</span>
			</Link>

			<Link to={"notifications"} onClick={() => setActiveLink(2)} style={activeLink == 2 ? activeLinkStyled : {}}>
				<FontAwesomeIcon className='icon' icon={faBell} />
				<span className='link_text notifications'>Notifications</span>
			</Link>

			<Link to={"messages"} onClick={() => setActiveLink(3)} style={activeLink == 3 ? activeLinkStyled : {}}>
				<FontAwesomeIcon className='icon' icon={faMessage} />
				<span className='link_text messages'>Messages</span>
			</Link>

			<Link to={"bookmarks"} onClick={() => setActiveLink(4)} style={activeLink == 4 ? activeLinkStyled : {}}>
				<FontAwesomeIcon className='icon' icon={faBookmark} />
				<span className='link_text bookmarks'>Bookmarks</span>
			</Link>

			<Link aria-disabled style={disabledLinkStyled}>
				<FontAwesomeIcon className='icon disabled' icon={faArrowUpRightDots} />
				<span className='link_text premium'>Premium</span>
			</Link>

			<Link aria-disabled style={disabledLinkStyled}>
				<FontAwesomeIcon className='icon disabled' icon={faBriefcase} />
				<span className='link_text jobs'>Jobs</span>
			</Link>

			<Link aria-disabled style={disabledLinkStyled}>
				<FontAwesomeIcon className='icon disabled' icon={faEllipsis} />
				<span className='link_text more'>More</span>
			</Link>
		</Links_Container>
	);
};

export default Links;
