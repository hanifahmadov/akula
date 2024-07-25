import React, { useState, useRef, useEffect } from "react";
import FormData from "form-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilValue } from "recoil";

/* FONTAWESOME */
import {
	faCircleXmark,
	faImage,
	faVideo,
	faMasksTheater,
	faCircleCheck,
	faUniversalAccess,
	faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faCircleXmark, faImage, faVideo, faMasksTheater, faCircleCheck, faUniversalAccess, faEarthAmericas);

/* STYLED */
import {
	Home_Container,
	Center_Section,
	Right_Section,
	Post_Section,
	Buttons_Section,
	Display_Section,
} from "./home.styled";

/* APIS */
import apiUrl from "../../apis/apiUrl";
import { newpostAPI, postsAPI } from "../../apis/apiCalls";

/* STATES */
import { userDefault, likeTypeDefault } from "../auth/shared/store/states";

/* COMPS */
import { Account } from "../auth/account/Account";
import { Post } from "./supports/post/Post";

export const Home = () => {
	const signedUser = useRecoilValue(userDefault);
	const likeType = useRecoilValue(likeTypeDefault);
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

				console.log("post insdie the useEffect hooks", posts)
			})
			.catch((err) => {
				console.log("postsAPI ERROR =>");
				console.log(err);
			});
	}, [submit, likeType]);

	return (
		<Home_Container className='home'>
			{console.log("likeType", likeType)}
			<Center_Section className='center_section'>
				<Post_Section className='post_section'>
					<div className='top_section'>
						<img src={signedUser.avatar} className='signedUser_avatar' />
						<div className='textarea_wrapper'>
							<textarea
								className='textarea'
								ref={textareaRef}
								value={text}
								onChange={handleChange}
								placeholder='Whats going on...'
								rows={1} // Start with one row
							/>
							{image && (
								<div className='image_preview'>
									<img src={URL.createObjectURL(image)} className='selected_image' />
									<span className='faCircleXmark'>
										<FontAwesomeIcon icon={faCircleXmark} onClick={() => setImage(undefined)} />
									</span>
								</div>
							)}
						</div>
					</div>
					<div className='bottom_section'>
						<Buttons_Section className='group_buttons'>
							<div className='select_image'>
								<input
									type='file'
									id='image'
									name='image'
									className='d-none'
									ref={imageRef}
									accept='image/png, image/jpeg, image/jpg'
									onChange={handleImageChange}
								/>
								<label htmlFor='image' className='label image'>
									<FontAwesomeIcon icon={faImage} className='icon image' />
								</label>
							</div>

							<div className='select_video'>
								<label htmlFor='' className='label video'>
									<FontAwesomeIcon icon={faVideo} className='icon video' />
								</label>
							</div>

							<div className='select_poll'>
								<label htmlFor='' className='label poll'>
									<FontAwesomeIcon icon={faMasksTheater} className='icon poll' />
								</label>
							</div>
						</Buttons_Section>

						<div className='post_button_wrapper' onClick={handlePostClick}>
							<button>POST</button>
						</div>
					</div>
				</Post_Section>

				{/* this section is displaying all posts from all users, so the section is devided into 2 columns 
					for post owner avatar and post itself details */}

				<Display_Section className='display_section'>
					{posts.map((post, id) => (
						<Post key={id} post={post} />
					))}
				</Display_Section>
			</Center_Section>

			<Right_Section className='center_section'>
				{/* top account info  */}
				<section className='account_section'>
					<Account />
				</section>

				{/* other users top account info  */}
				<section className='allusers_section'></section>
			</Right_Section>
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
