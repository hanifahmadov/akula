import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import FormData from "form-data";

/* APIS */
import apiUrl from "../../apis/apiUrl";
import { newpostAPI, postsAPI } from "../../apis/apiCalls";

/* GLOBAL STATES */
import { userDefault, postSubmittedDefault, likeTypeDefault } from "../auth/shared/store/states";

/* STYLED COMPONENTS */
import { Home_Container } from "./home.styled";

/* COMPONENTS */
import { Account } from "../auth/account/Account";
import { Post } from "./supports/post/Post";
import { AddPost } from "./supports/post/AddPost";

export const Home = () => {
	/** GLOBAL STATES
	 * get all posts useEffect triggers
	 * */
	const signedUser = useRecoilValue(userDefault);
	const postSubmitted = useRecoilValue(postSubmittedDefault);
	const likeType = useRecoilValue(likeTypeDefault);

	// const commentSubmit = useRecoilValue(commentSubmitDefault);
	// const replySubmit = useRecoilValue(replySubmitDefault);
	// const reReplySubmit = useRecoilValue(reReplySubmitDefault);

	/** Local state sets the all posts returns from the postsAPI, useEffect */
	const [posts, setPosts] = useState([]);
	const [postSubmit, setPostSubmit] = useState(false);

	/**
	 *  textarea values and refs
	 * 	uploads values
	 */
	const [text, setText] = useState("");
	const [image, setImage] = useState(undefined);

	/**
	 * handles whne post is clicked
	 */
	const handlePostClick = (e) => {
		/** check - validate the text or content is added
		 * handle react-toaster-notify
		 * // TODO
		 */

		if (!text.trim().length && !image) {
			console.log("Please add a text or image file");
			return;
		}

		const data = new FormData();

		data.append("text", text.trim());
		data.append("image", image);
		data.append("baseurl", apiUrl);

		newpostAPI(signedUser, data)
			.then((res) => {
				setImage(undefined);
				setText("");
				setPostSubmit((postSubmit) => !postSubmit);
			})
			.catch((err) => {
				console.log("newpostAPI error", err);
			});
	};

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
	}, [postSubmit, postSubmitted, likeType]);

	return (
		<Home_Container className='home_container'>
			<div className='home_left_column'>
				{/** fixed_width has a fixed min width  */}
				<div className='fixed_width'>
					<AddPost
						isfor={"post"}
						uuid={"1"}
						signedUser={signedUser}
						text={text}
						setText={setText}
						image={image}
						setImage={setImage}
						handlePostClick={handlePostClick}
						TAparentPadding={"7px 0px 0px 0px"}
						TAfontSize={"1rem"}
						avatarWidth={"3rem"}
						avatarHeight={"3rem"}
						uploadsIconSize={"1rem"}
						labelHeight={"22px"}
						labelWidth={"22px"}
						buttonFontSize={"1rem"}
						buttonPadding={"0px 5px"}
						addPostPadding={"5px"}
					/>

					{/** ALL POSTS RENDERS */}
					<div className='all_posts_container'>
						{posts.map((post, index) => {
							return <Post key={index} post={post} index={index} />;
						})}
					</div>
				</div>
			</div>

			{/** RIGHT COLUMN width 21rem
			 *  THIS IS FOR CONTENT OF POSTS, CENTER SECTION
			 */}
			<div className='home_right_column'>
				<div className='top_row_presents_account'>
					<Account />
				</div>

				<div className='bottom_row_presents_allusers'></div>
			</div>
		</Home_Container>
	);
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
