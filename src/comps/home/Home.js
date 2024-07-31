import React, { useState, useRef, useEffect } from "react";
import { useRecoilValue } from "recoil";
import FormData from "form-data";

/* APIS */
import apiUrl from "../../apis/apiUrl";
import { newpostAPI, postsAPI } from "../../apis/apiCalls";

/* GLOBAL STATES */
import { userDefault, likeTypeDefault, commentSubmitDefault } from "../auth/shared/store/states";

/* STYLED COMPONENTS */
import { Bottom_Section, Home_Container, Top_Section } from "./home.styled";

/* COMPONENTS */
import { Account } from "../auth/account/Account";
import { Textarea } from "./supports/form/Textarea";
import { ImagePreview } from "./supports/form/ImagePreview";
import { Media } from "./supports/form/Media";
import { Post } from "./supports/post/Post";

export const Home = () => {
	/** GLOBAL STATES
	 * get all posts useEffect triggers
	 * */
	const signedUser = useRecoilValue(userDefault);
	const likeType = useRecoilValue(likeTypeDefault);
	const commentSubmit = useRecoilValue(commentSubmitDefault);
	const [postSubmit, setPostSubmit] = useState(false);

	/**
	 *  image grabs the post media
	 */
	const [image, setImage] = useState(undefined);

	/** Local state sets the all posts returns from the postsAPI, useEffect */
	const [posts, setPosts] = useState([]);

	/**
	 *  textarea values and refs
	 */
	const [text, setText] = useState("");
	// const textareaRef = useRef(null);

	/**
	 * handles whne post is clicked
	 */
	const handlePostClick = (e) => {
		const data = new FormData();

		data.append("text", text);
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
	}, [postSubmit, likeType, commentSubmit]);

	return (
		<Home_Container className='home_container'>
			{/** home has 2 column left and right
			 * left is for the posts
			 * right is for the account, make the right sticky to top.
			 */}

			{/** LEFT COLUMN, flex grow 1
			 * 	THIS IS FOR CONTENT OF POSTS, CENTER SECTION.
			 * 	home_left_columns takes whole row and we need a normal middle column for posts and comments
			 * 	so, fixed_width container is gonna be fixed and stays in the middle
			 */}

			<div className='home_left_column'>
				<div className='fixed_with'>
					{/* POST INPUT */}
					<div className='post_input'>
						<Top_Section>
							<img src={signedUser.avatar} className='signedUser_avatar' />
							{/** because of the text and img goes in the same text area, we have to group them */}
							<div className='textarea_wrapper'>
								<Textarea text={text} setText={setText} />
								{image && <ImagePreview image={image} setImage={setImage} />}
							</div>
						</Top_Section>
						<Bottom_Section>
							<Media setImage={setImage} />

							<div className='post_button_wrapper' onClick={handlePostClick}>
								<button>POST</button>
							</div>
						</Bottom_Section>
					</div>

					{/* ALL POSTS */}
					<div className='posts'>
						{posts.map((post, index) => {
							return <Post key={index} post={post} />;
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
