/* NPM */
import React, { useState, useRef, useEffect } from "react";
import { useRecoilState, useResetRecoilState, useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHouse,
	faBell,
	faMessage,
	faBookmark,
	faBriefcase,
	faArrowUpRightDots,
	faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faHouse, faBell, faMessage, faBookmark, faArrowUpRightDots, faBriefcase, faSquarePlus);
import axios from "axios";

// STYLED
import { Left_Container, Main_Container } from "./main.styled";
import shark from "./sharkNoBG.png";

export const Main = () => {
	return (
		<Main_Container className='main_container'>
			<Left_Container className='left column'>
				<div className='left_content_wrapper'>
					<div className='logo_wrapper'>
						<span className='name'>AKULA</span>
					</div>

					<div className='left_navlinks_wrapper'>
						<p>
							<FontAwesomeIcon className="icon" icon={faHouse} />
							<Link to={"home"}>Home</Link>
						</p>

						<p>
							<FontAwesomeIcon  className="icon" icon={faBell} />
							<Link to={"notifications"}>Notifications</Link>
						</p>

						<p>
							<FontAwesomeIcon  className="icon" icon={faMessage} />
							<Link to={"messages"}>Messages</Link>
						</p>

						<p>
							<FontAwesomeIcon className="icon" icon={faBookmark} />
							<Link to={"bookmarks"}>Bookmarks</Link>
						</p>

						<p>
							<FontAwesomeIcon className="icon" icon={faArrowUpRightDots} />
							<Link aria-disabled>Premium</Link>
						</p>

						<p>
							<FontAwesomeIcon className="icon" icon={faBriefcase} />
							<Link aria-disabled>Jobs</Link>
						</p>

						<p>
							<FontAwesomeIcon className="icon" icon={faSquarePlus} />
							<Link aria-disabled>More</Link>
						</p>

						<button>POST</button>
					</div>

					<div className='logout_wrapper'>{/* logout button */}</div>
				</div>
			</Left_Container>

			<section className='center column'></section>

			<section className='right column'></section>
		</Main_Container>
	);
};
