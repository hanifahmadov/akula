/* eslint-disable */
import React from "react";
import { Outlet, useLocation } from "react-router-dom";

// STYLED
import { AppLayout_Container, AppLayout_Content } from "./layouts.styled";

export const AppLayout = () => {
	/**
	 *  AppLayoutContainer has a 100 * 100 width and height
	 *  then will make the content center width justify content
	 */

	return (
		<AppLayout_Container className='appLayout'>
			{/* NO HEADER SO FAR */}
			<AppLayout_Content className='appLayout_content'>
				<Outlet />
			</AppLayout_Content>
		</AppLayout_Container>
	);
};
