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


/** imported in the Popover.js file to handle the like functionality
 * 
 * 	- user accessToken 
 * 	user accessToken attached to the header, and the url in the serverside is passing requiredToken middleware 
 * 	from passport.js library. it the requared passport middleware the accessToken getting decoded and getting info of user email
 * 	which is unique and user _id. on the serverside when user sign in, the access token params are made of these 2 values.
 * 	so, when accessToken decoded, we can get these 2 unique value and pull the User object and attached to the req object.
 * 	inside the router function we can get user details like req.user 
 * 
 * 	- postId
 * 	the liked postId is attached to the url and passing through url.
 * 	in the server side thst id is getting from req.params
 * 
 */
export const likePostAPI = ({ accessToken, postId, likeType }) => {
	/* axios is returning a promise that we have to use await keyword to wait it get resolved */
	return axios({
		/* apiUrl explained in the above how it gets defined  // # explain inthe import field */
		url: `${apiUrl}/posts/${postId}/like`,
		/* PUT request is for the existing file gets updated */
		method: "PUT",
		/* credetials true and includes enables the cookies are attached to the send request */
		/* expalin cookie checks here or above // # later */
		withCredentials: true,
		credentials: "include",

		headers: {
			Authorization: `Bearer ${accessToken}`, /* passing user token  */
			"Content-Type": "application/json", // Ensure proper content type if sending a body
		},
		/* data is sending the only like type that we have to get it from the req.body */
		data: { likeType },
	});
};

/* JUST ADDED THIS LINE TO ALL APIS. Ensure proper content type if sending a body. 
If any problem on the apis, check out this additions   */
// # 'Content-Type': 'application/json'

/* 

###### write whole documentation about these APIs that what api is handling evreyone of them

*/