/* eslint-disable */
import React from "react";
import { Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import "animate.css";

/* Styled */
import { RegisterLayout_Container } from "./layouts.styled";

export const RegisterLayout = () => {
	// let [modal, setModal] = useRecoilState(modalState);
	// console.log("modal::", modal);

	return (
		<RegisterLayout_Container>
			<Outlet />
		</RegisterLayout_Container>
	);
};
