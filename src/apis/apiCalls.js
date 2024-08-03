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

export const signoutAPI = ({ accessToken, _id }) => {
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



//////////////////////////////////
//  ###  POST ROUTES APIS ###  //
/////////////////////////////////

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

/** add comment api 
 * 	this looks for Post modelled Objects 
 * 	in the backend server
 * 	handle the when new comment applied.
 * 	arguments are token, the post ID which has been gotten commented 
 * 	comment text-content
 */
export const addCommentAPI = ({ accessToken, postId, text }) => {
	/* axios is returning a promise that we have to use await keyword to wait it get resolved */
	return axios({
		/* apiUrl explained in the above how it gets defined */
		url: `${apiUrl}/posts/${postId}/addcomment`,
		/* PUT request is for the existing file gets updated */
		method: "POST",
		/* credetials true and includes enables the cookies are attached to the send request */
		/* expalin cookie checks here or above // # later */
		withCredentials: true,
		credentials: "include",

		headers: {
			Authorization: `Bearer ${accessToken}` /* passing user token  */,
			"Content-Type": "application/json", // Ensure proper content type if sending a body
		},
		/* data is sending the only like type that we have to get it from the req.body */
		data: { text },
	});
};

/** add reply apis
 * 	this is different than add comment apis in the above
 *  because this looks for Comment modelled Objects 
 * 	in the backend server 
 */

export const addReplyAPI = ({ accessToken, commentId, replyText, referralId }) => {
	/* axios is returning a promise that we have to use await keyword to wait it get resolved */
	return axios({
		/* apiUrl explained in the above how it gets defined  // # explain inthe import field */
		url: `${apiUrl}/comments/${commentId}/addreply`,
		/* PUT request is for the existing file gets updated */
		method: "POST",
		/* credetials true and includes enables the cookies are attached to the send request */
		/* expalin cookie checks here or above // # later */
		withCredentials: true,
		credentials: "include",

		headers: {
			Authorization: `Bearer ${accessToken}` /* passing user token  */,
			"Content-Type": "application/json", // Ensure proper content type if sending a body
		},
		/* data is sending the only like type that we have to get it from the req.body */
		data: { replyText, referralId },
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
 * /** //# LIKE POST APIs
 */
export const likePostAPI = ({ accessToken, postId, likeType }) => {
	/* axios is returning a promise that we have to use await keyword to wait it get resolved */
	return axios({
		/* apiUrl explained in the above how it gets defined  // # explain inthe import field */
		url: `${apiUrl}/posts/${postId}/reaction`,
		/* PUT request is for the existing file gets updated */
		method: "PUT",
		/* credetials true and includes enables the cookies are attached to the send request */
		/* expalin cookie checks here or above // # later */
		withCredentials: true,
		credentials: "include",

		headers: {
			Authorization: `Bearer ${accessToken}` /* passing user token  */,
			"Content-Type": "application/json", // Ensure proper content type if sending a body
		},
		/* data is sending the only like type that we have to get it from the req.body */
		data: { likeType },
	});
};




/** //# LIKE COMMENT APIs
 */
export const likeCommentAPI = ({ accessToken, commentId, likeType }) => {
	/* axios is returning a promise that we have to use await keyword to wait it get resolved */
	return axios({
		/* apiUrl explained in the above how it gets defined  // # explain inthe import field */
		url: `${apiUrl}/comments/${commentId}/reaction`,
		/* PUT request is for the existing file gets updated */
		method: "PUT",
		/* credetials true and includes enables the cookies are attached to the send request */
		/* expalin cookie checks here or above // # later */
		withCredentials: true,
		credentials: "include",

		headers: {
			Authorization: `Bearer ${accessToken}` /* passing user token  */,
			"Content-Type": "application/json", // Ensure proper content type if sending a body
		},
		/* data is sending the only like type that we have to get it from the req.body */
		data: { likeType },
	});
};


