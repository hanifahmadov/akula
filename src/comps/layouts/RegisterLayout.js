/* eslint-disable */
import React from "react";
import { Outlet } from "react-router-dom";

/* STYLED */
import { RegisterLayout_Container } from "./layouts.styled";

export const RegisterLayout = () => {
	return (
		<RegisterLayout_Container className="registerLayout">
			<Outlet />
		</RegisterLayout_Container>
	);
};
