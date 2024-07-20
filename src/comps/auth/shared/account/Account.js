/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRecoilState, useResetRecoilState } from "recoil";
import { NavLink, useNavigate } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";


/* STATE & APIs & STYLED */
import { userState } from "../shared/store";
import {
	roomsState,
	curRoomState,
	usersState,
	activeUsersState,
	socketConState,
	displayAccountState
} from "../../home/homeStore/states";
import { AccountContainer } from "./account.styled";
import { signOutApi } from "../../../apis/apiCalls";


/* SUBS */
import { reset } from "../../home/homeStore/helpers";

export const Account = () => {
	const [user, setUser] = useRecoilState(userState);

	// resets
	const resetall = {
		resetUser: useResetRecoilState(userState),
		resetRooms: useResetRecoilState(roomsState),
		resetCurRoom: useResetRecoilState(curRoomState),
		resetUsers: useResetRecoilState(usersState),
		resetActiveUsers: useResetRecoilState(activeUsersState),
		resetSocketCon: useResetRecoilState(socketConState),
	};

	const [dis, setDis] = useRecoilState(displayAccountState);
	const navigate = useNavigate();

	let dropDownVariant = {
		defaults: {
			display: "none",
			opacity: 0,
		},

		anime: {
			display: dis ? "block" : "none",
			opacity: dis ? 1 : 0,

			transition: {
				delay: 0.1,
			},
		},
	};

	const handleOutsideClick = (e) => {
		let val = e.target.className;

		if (val === "account-img") {
			setDis(!dis);
		} else {
			setDis(false);
		}
	};

	const handleLinksClick = (e) => {
		setDis(false);
	};

	const handleSignOut = async () => {
		signOutApi(user)
			.then((res) => {
				console.log("sign out result");
				console.log(res);

				window.socket.disconnect();

				console.log('82: Account.js ~ signedOutApi ~ succeessful')
				reset(resetall)
				navigate("/welcome");
			})
			.catch((err) => {
				console.log('87: Account.js ~ signedOutApi ~ failed')
				console.log(err);
			});
	};

	return (
		<AccountContainer className='account' $displayNavbarAccount={dis}>
			<div className='account-img'>
				<img src={user.avatar} alt='logo' className='account-img' />
			</div>

			<OutsideClickHandler onOutsideClick={handleOutsideClick}>
				<motion.div
					className='account-dropdown'
					variants={dropDownVariant}
					initial='defaults'
					animate='anime'
				>
					<div className='account-dropdown-links'>
						<span className='account-dropdown-links-img'>
							<img src={user.avatar} alt='logo' />
						</span>

						<span className='username'>{user.username}</span>
						<div>
							<NavLink to='#' onClick={handleLinksClick}>
								Change Logo
							</NavLink>
						</div>
						{/* <div>
							<NavLink to='#' onClick={handleLinksClick}>
								Orders
							</NavLink>
						</div> */}
						<div>
							<NavLink
								onClick={() => {
									handleLinksClick();
									handleSignOut();
								}}
							>
								Sign Out
							</NavLink>
						</div>
					</div>
				</motion.div>
			</OutsideClickHandler>
		</AccountContainer>
	);
};
