/* NPM IMPORTS*/
import React from "react";
import { useRecoilValue } from "recoil";
import { Navigate, Outlet } from "react-router-dom";

/* GLOBAL STATE */
import { userDefault } from "../auth/shared/store/states";

export const RequireAuthLayout = () => {
	const user = useRecoilValue(userDefault);

	return user?.accessToken ? <Outlet /> : <Navigate to='/signin' />;
};
