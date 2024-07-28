/**
 * NPM PACKAGES IMPORTS
 */
import React, { useState, useRef, useEffect } from "react";
import { useRecoilValue } from "recoil";
import FormData from "form-data";

/* FONTAWESOME */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faCircleXmark,
	faImage,
	faVideo,
	faMasksTheater,
	faCircleCheck,
	faUniversalAccess,
	faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
library.add(faCircleXmark, faImage, faVideo, faMasksTheater, faCircleCheck, faUniversalAccess, faEarthAmericas);

/* STYLED COMPONENTS */
import { Home_Container } from "./home.styled";

/* APIS & URLS */
import apiUrl from "../../apis/apiUrl";
import { newpostAPI, postsAPI } from "../../apis/apiCalls";

/* GLOBAL STATES */
import { userDefault, likeTypeDefault, commentSubmittedDefault } from "../auth/shared/store/states";

/* HELPER COMPONENTS */
import { Account } from "../auth/account/Account";
import { Post } from "./supports/post/Post";

export const Home = () => {
	/** GLOBAL STATES */
	const signedUser = useRecoilValue(userDefault);
	const likeType = useRecoilValue(likeTypeDefault);
	const commentSubmitted = useRecoilValue(commentSubmittedDefault);

	/* LOCAL STATES */

	const [image, setImage] = useState(undefined);
	const [submit, setSubmit] = useState(false);
	const [posts, setPosts] = useState([]);

	const [text, setText] = useState("");
	const textareaRef = useRef(null);
	const imageRef = useRef();

	const handleChange = (event) => {
		setText(event.target.value);
		adjustTextareaHeight();
	};

	const adjustTextareaHeight = () => {
		if (textareaRef.current) {
			textareaRef.current.style.height = "auto"; // Reset height to auto to shrink if necessary
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set height to scrollHeight
		}
	};

	const handleImageChange = () => {
		const [file] = imageRef.current?.files;
		setImage(file);
	};

	const handlePostClick = (e) => {
		const data = new FormData();

		data.append("text", text);
		data.append("image", image);
		data.append("baseurl", apiUrl);

		newpostAPI(signedUser, data)
			.then((res) => {
				setImage(undefined);
				setText("");
				setSubmit((submit) => !submit);
			})
			.catch((err) => {
				console.log("newpostAPI error", err);
			});
	};

	useEffect(() => {
		adjustTextareaHeight(); // Adjust height on initial render
	}, [text]); // Adjust height on every text change

	/**
	 * use hooks gets/retrieves all posts when new post posted,
	 * 201 code then works (line 75 above, this file) and
	 * globaly likeType state changes, when user likes the post from popover it will change the likeType
	 * on Popover.js inside likepostAPI, because of that this useEffect must re-call the all posts with updated posts
	 * so, we have to get all fields, owners, like-owner with populated ones. //# ALL FIELD MUST BE POPULATED.
	 *
	 */
	useEffect(() => {
		postsAPI(signedUser)
			.then((res) => {
				const { posts } = res.data;
				setPosts(posts);

				console.log("post insdie the useEffect hooks", posts);
			})
			.catch((err) => {
				console.log("postsAPI ERROR =>");
				console.log(err);
			});
	}, [submit, likeType, commentSubmitted]);

	return <Home_Container className='home_container'></Home_Container>;
};

/* 


	// TODO

	1 -	retrieve all posts when reloaded, useEffect hooks.

	2 - posts are getting retrieving here on Home component and hirearchy is like Home -> Post -> Like -> Popover.
		the issue is when I click the popover, then I need to retrieve all posts again because that one post is updated
		and need reload the page with new updated posts. So how I can trigger the useEffect hooks which will get all posts
		inside the Home component ?!

		-	solution A for now:  I am going to add global likeType, and ig that updated , get posts useEffect inside Home js
			line 



*/
