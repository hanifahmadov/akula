/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { produce } from "immer";

// states
import apiUrl from "../../apis/apiUrl";
import { useRefreshAccessApi } from "../../apis/apiCalls";

// STATES
import { userDefault } from "../auth/shared/store/states";

/* STYLED  */
import { Loading, PersistentLayout_Container } from "./layouts.styled";

export const PersistentLayout = () => {
	const [isLoading, setIsLoading] = useState(true);
	let [user, setUser] = useRecoilState(userDefault);
	user = JSON.parse(JSON.stringify(user));

	const navigate = useNavigate();

	useEffect(() => {
		let mounted = true;
		/* Soo, trying fetch the token from the backend  */
		const fetchData = async () => {
			// if useRefreshAccessApi() fails, it will throw it to catch block
			try {
				let res = await useRefreshAccessApi();

				/* 	cookies refresh token expires in a day
					if keep login is on, this will return a already signed in user
					and we can pass the login page.

					if keep login is not selelected, we have to clear cookies
					for not to use Refresh Token to retrieve user data
				*/



				const { user: temp } = await res.data;


				const tempUser = produce(user, (draft) => {
					draft = temp;
					draft.avatar = apiUrl + "/" + temp.avatar;
					// this return keeps the user signed in when page reloaded
					// mf prodcue need a return statement, this is the fact
					return draft
				});

				setUser(tempUser);
			} catch (err) {
				// if error navigate to signin page
				console.log("Persisntent Layout: useRefreshAccessApi() has failed, ERROR IS:", err);
				navigate("/signin");
			} finally {
				mounted && setIsLoading(false);
			}
		};

		!user?.accessToken ? fetchData() : setIsLoading(false);

		return () => {
			// Cleanup logic, if needed
			mounted = false;
		};
	}, []);

	return (
		<PersistentLayout_Container className='persistentLayout'>
			{isLoading ? <Loading /> : <Outlet />}
		</PersistentLayout_Container>
	);
};
