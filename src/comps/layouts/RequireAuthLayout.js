/* eslint-disable */
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Navigate, Outlet, useLocation } from "react-router-dom";

//: states
import { userState } from "../auth/shared/store";

export const RequireAuthLayout = () => {
	const [user, setUser] = useRecoilState(userState);

	// console.log(user)
	const location = useLocation();

	return user?.accessToken ? <Outlet /> : <Navigate to='/welcome' />;
};
