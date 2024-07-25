/* eslint-disable */
import axios from "axios";
import apiUrl from "./apiUrl";

export const signupApi = (data) => {
	return axios({
		url: apiUrl + "/signup/",
		method: "POST",
		withCredentials: true,
		credentials: "include", // this is important to get image file in the backend
		data,

		headers: {
			accept: "application/json",
			"Accept-Language": "en-US,en;q=0.8",
			"Content-Type": `multipart/form-data; boundary=${data._boundary}`,
		},
	});
};

export const signinApi = ({ email, password, remember }) => {
	return axios({
		url: apiUrl + "/signin/",
		method: "POST",
		withCredentials: true,
		credentials: "include",
		data: {
			credentials: {
				email,
				password,
				remember,
			},
		},
	});
};

export const changePwdApi = ({ oldPassword, newPassword }, accessToken) => {
	return axios({
		url: apiUrl + "/changepwd/",
		method: "PATCH",
		withCredentials: true,
		credentials: "include",
		headers: {
			Authorization: `Bearer ${accessToken}`,
			"Content-Type": "application/json", // Ensure proper content type if sending a body
		},
		data: {
			passwords: {
				old: oldPassword,
				new: newPassword,
			},
		},
	});
};

export const signoutApi = ({ accessToken, _id }) => {
	return axios({
		url: apiUrl + "/signout",
		method: "DELETE",
		withCredentials: true,
		credentials: "include",
		headers: {
			Authorization: `Bearer ${accessToken}`,
			"Content-Type": "application/json", // Ensure proper content type if sending a body
		},
		data: {
			_id,
		},
	});
};

export const useRefreshAccessApi = () => {
	return axios({
		url: apiUrl + "/refreshAccess",
		method: "GET",
		withCredentials: true,
		credentials: "include",
	});
};

export const useVerifyAccessApi = ({ accessToken }) => {
	return axios({
		url: apiUrl + "/verifyaccess",
		method: "GET",
		withCredentials: true,
		credentials: "include",
		headers: {
			Authorization: `Bearer ${accessToken}`,
			"Content-Type": "application/json", // Ensure proper content type if sending a body
		},
	});
};

export const createNewRoomApi = (user, data) => {
	return axios({
		url: apiUrl + "/newroom_icon",
		method: "POST",
		withCredentials: true,
		credentials: "include",
		data,
		headers: {
			accept: "application/json",
			"Accept-Language": "en-US,en;q=0.8",
			"Content-Type": `multipart/form-data; boundary=${data._boundary}`,
			Authorization: `Bearer ${user.accessToken}`,
		},
	});
};

/////////////////////////////////

/* POST ROUTES APIS */

////////////////////////////////

export const newpostAPI = ({ accessToken }, data) => {
	return axios({
		url: apiUrl + "/newpost",
		method: "POST",
		withCredentials: true,
		credentials: "include" /*  this is important to get image file in the backend  */,
		data,

		headers: {
			accept: "application/json",
			"Accept-Language": "en-US,en;q=0.8",
			"Content-Type": `multipart/form-data; boundary=${data._boundary}`,
			Authorization: `Bearer ${accessToken}`,
		},
	});
};

export const postsAPI = ({ accessToken }) => {
	return axios({
		url: apiUrl + "/posts",
		method: "GET",
		withCredentials: true,
		credentials: "include",
		headers: {
			Authorization: `Bearer ${accessToken}`,
			"Content-Type": "application/json", // Ensure proper content type if sending a body
		},
	});
};


export const likePostAPI = ({ accessToken, postId, likeType }) => {
	return axios({
		url: `${apiUrl}/posts/${postId}/like`,
		method: "PUT",
		withCredentials: true,
		credentials: "include",
		headers: {
			Authorization: `Bearer ${accessToken}`,
			"Content-Type": "application/json", // Ensure proper content type if sending a body
		},
		data: { likeType },
	});
};

/* JUST ADDED THIS LINE TO ALL APIS. Ensure proper content type if sending a body. 
If any problem on the apis, check out this additions   */
// # 'Content-Type': 'application/json'
