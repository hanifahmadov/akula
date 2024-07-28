/* NPM PACKAGES */
import React from "react";
import { Outlet } from "react-router-dom";

/* STYLED & STATES & API */
import { MainLayout_Container } from "./layouts.styled";

/* COMPONENTS  */
import { Navbar } from "../shared/navbar/Navbar";


export const MainLayout = () => {
	return (
		/** Home Layout Main Container
		 *  divided into 3 column that
		 *  Navbar, Content, Profile.
		 * 	Left, Center, Right
		 */
		<MainLayout_Container className='main_layout'>
			<div className='main_left_column'>
				<Navbar />
			</div>

			{/* center div will be scrollable */}
			<div className='main_right_column'>
				<Outlet />
			</div>
		</MainLayout_Container>
	);
};
