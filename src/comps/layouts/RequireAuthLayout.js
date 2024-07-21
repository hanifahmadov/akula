/* eslint-disable */
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Navigate, Outlet, useLocation } from "react-router-dom";

//: states
import { userDefault } from "../auth/shared/store/states";

export const RequireAuthLayout = () => {
	const [user, setUser] = useRecoilState(userDefault);

	// console.log(user)
	const location = useLocation();

	return user?.accessToken ? <Outlet /> : <Navigate to='/signin' />;
};
