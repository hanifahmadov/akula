import React, { useEffect, useState, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

// import TimeAgo from "javascript-time-ago";
// import en from "javascript-time-ago/locale/en";
// import es from "javascript-time-ago/locale/es";

// // Add the default locale
// TimeAgo.addDefaultLocale(en);
// // Add other locales
// TimeAgo.addLocale(es);

import TimeAgo from "./timeAgoConfig"; // Import the configured TimeAgo

import {
	faHeart as faRegularHeart,
	faThumbsDown as faRegularThumbsDown,
	faBookmark as faRegularBookmark,
	faThumbsUp as faRegularThumbsUp,
} from "@fortawesome/free-regular-svg-icons";

/* FONTAWESOME */
import {
	faCircleXmark,
	faImage,
	faVideo,
	faMasksTheater,
	faCircleCheck,
	faUniversalAccess,
	faEarthAmericas,
	faThumbsUp,
	faComment,
	faHeart,
	faFaceLaughBeam,
} from "@fortawesome/free-solid-svg-icons";

import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";

library.add(
	faCircleXmark,
	faImage,
	faVideo,
	faMasksTheater,
	faCircleCheck,
	faUniversalAccess,
	faEarthAmericas,
	faComment,
	faRegularHeart,
	faRegularThumbsDown,
	faRegularBookmark,
	faThumbsUp,
	faRegularThumbsUp,
	faComment,
	faHeart,
	faImage,
	faFaceSmile
);

/* STYLED */

/* STYLED COMPONENTS */
import {
	Dislike_Container,
	Heart_Container,
	MediaCounts_Section,
	Post_Container,
	Smile_Container,
	Comment_Displaying_Section,
} from "./post.styled";

/* GLOBAL STATES */
import {
	backdropDefault,
	commentSubmittedDefault,
	likeTypeDefault,
	userDefault,
} from "../../../auth/shared/store/states";

/* SUB COMPONENTS */
import { Popover } from "../popover/Popover";

import { addCommentToPostAPI, replyToCommentAPI } from "../../../../apis/apiCalls";

/* POST COMPONENT */
export const Post = ({
	post: {
		comments,
		likes,
		content,
		media,
		createdAt,
		_id,
		owner: { avatar, username },
	},

	post,
}) => {
	/* TODO */
	/* everytime when user types something in the post textarea, this POST renders on every letter */
	/* which means whole Home is rendering and posts are itereating every time, soo fix that shit */
	// console.log("renders")

	// Create an instance of TimeAgo
	const timeAgo = new TimeAgo("en-US");

	const [text, setText] = useState("");
	const textareaRef = useRef(null);

	const adjustTextareaHeight = () => {
		if (textareaRef.current) {
			textareaRef.current.style.height = "auto"; // Reset height to auto to shrink if necessary
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set height to scrollHeight
		}
	};

	useEffect(() => {
		adjustTextareaHeight(); // Adjust height on initial render
	}, [text]); // Adjust height on every text change

	const handleChange = (event) => {
		setText(event.target.value);
		adjustTextareaHeight();
	};

	/**
	 * 	IMPORTANT WE DO NOT NEED
	 * 	global state likeType here. cause Popover.js will update it and Home.js will rerun the usehooks to
	 * 	retrieve all posts again, soo it doesnt make sense keep global likType state here.
	 * 	I commented it out but I will keep it here for future reminders
	 *
	 * */

	/** retrieving global state likeType */
	const likeType = useRecoilValue(likeTypeDefault);

	/** global state as a trigger role, notjing much */
	const [commentSubmitted, setCommentSubmitted] = useRecoilState(commentSubmittedDefault);

	/* retrieving global state signedUser */
	const signedUser = useRecoilValue(userDefault);

	/* retrieving globa backdrop state to trigger Backdrop display block inside HomeLayout.js, when comment button clicked */
	const [backdrop, setBackdrop] = useRecoilState(backdropDefault);

	/** defining local state popoverOpen. which makes popover to be open and closed.
	 * 	used in this file and sending as a prop to this comp's child, <Popover />, line 146, this file.
	 *
	 * this technique is applying also to comment section only
	 * */
	const [popoverOpen, setPopoverOpen] = useState(false);
	const [commentOpen, setCommentOpen] = useState(false);

	/** userList is a local state that opens the div of users list who liked the post.
	 * 	if someone liked the post and it will be on this list. the state default is false,
	 * 	but when user clicked the number next to icons then this will be true.
	 *
	 * so, there are 3 like icons, heart, smile and dislike. so we have to create a sparate states for all of them.
	 * when user clicks on number next to heart then heart list need to be open, an so on relatively.
	 *
	 *  #bug
	 * when hearlist is open, the items in the background is clickable, and its not okey.
	 * // TODO
	 * 	1. create its ::before element and positon absolute, hight and with 100vh vw and zindex index bla bla. figureit out
	 * 	2. whe I click outside the box, the close it.
	 * 	3. applu the same clicks for popover like section also.
	 * 	4. thanks
	 */
	const [heartList, setHeartList] = useState(false);
	const [smileList, setSmileList] = useState(false);
	const [dislikeList, setDislikeList] = useState(false);

	/*  */
	const handleLikeButtonClick = (e) => {
		console.log("like button clicked");
		setPopoverOpen((popoverOpen) => !popoverOpen);
	};

	/** comment button clicked */
	const handleCommentButtonClick = (e) => {
		console.log("comment button clicked");
		setCommentOpen((commentOpen) => !commentOpen);
	};

	const handleShareButtonClick = (e) => {};
	const handleBookmarkButtonClick = (e) => {};

	/** process the likes
	 * we can set the counts directly, like likes.length.
	 * so, the post can have 1 or 100 likes how to control and get these data
	 *
	 * solution for now
	 * 1. loop the likes and group them based on their reaction type
	 * 2. iterate the groups and present the detailed info
	 */
	const [heart, setHeart] = useState([]);
	const [smile, setSmile] = useState([]);
	const [dislike, setDislike] = useState([]);

	useEffect(() => {
		/** these values are local and every time this useEffect runs (wehn likes gets updated on Homejs useEffect )
		 * 	these arrays defines empty, cause new updated likes need to be stored. cant over loaded the new one to old one
		 * 	important!
		 * */
		let newHeart = [];
		let newSmile = [];
		let newDislike = [];

		/* loops the new likes array and group them based on their reaction */
		likes.map((like) => {
			if (like.reaction == "heart") {
				newHeart.push(like);
			}

			if (like.reaction == "smile") {
				newSmile.push(like);
			}

			if (like.reaction == "dislike") {
				newDislike.push(like);
			}
		});

		/* set the final values as a result */
		setHeart(newHeart);
		setSmile(newSmile);
		setDislike(newDislike);

		console.log(heart, smile, dislike);
	}, [likes]);

	/** handling comment submit
	 *
	 *
	 */
	const handleCommentSendClick = (e) => {
		const commentText = text.trim();

		addCommentToPostAPI({ accessToken: signedUser.accessToken, postId: _id, commentText })
			.then((res) => {
				/** we need a global state to update it here and it will tigger the homejs useEffect get all posts.
				 * the posts will get all field populated and we can display the comments here.
				 *
				 */

				/* clear the comment textarea */
				setText("");

				/* update the global state to trigger the  homejs useEffect hook */
				setCommentSubmitted((commentSubmitted) => !commentSubmitted);
			})

			.catch((err) => {
				console.log(err);
			});
	};

	/** @ Reply Comment
	 *
	 */

	const [replyCommentText, setReplyCommentText] = useState("");

	const handleCommentInputChange = (e) => {
		setReplyCommentText(e.target.value);
	};

	const handleCommentReplySubmit = e =>{

		console.log(replyCommentText)

		/** called the replyComment API here. detailed explained the API in apiCalls.js file
		 */

		replyToCommentAPI({accessToken: signedUser.accessToken, })


	}

	return (
		<Post_Container>
			<section className='postowner_avatar_section'>
				<img src={avatar} />
			</section>

			<section className='post_content_section'>
				<section className='header_section'>
					<div className='title_wrapper'>
						<span className='title'>{username}</span>
						<span className='faCircleCheck'>
							<FontAwesomeIcon icon={faCircleCheck} />
						</span>
						<span>{/* add username here, if user is kokuma, username must be @kokuma */}</span>
					</div>
					<div className='timeline_wrapper'>
						<span className='timeline'>{timeAgo.format(new Date(createdAt))}</span>
						<span className='faUniversalAccess'>
							<FontAwesomeIcon icon={faEarthAmericas} />
						</span>
					</div>
				</section>

				<section className='text_section'>{content}</section>
				{media && (
					<section className='media_section'>
						<img src={media} alt='upload-media' />
					</section>
				)}

				<MediaCounts_Section className='media_counts_section'>
					{/**
					 ** classsname "like_count_section" stores the data of the likes and located under the post text
					 *	or image file and above the like-comment-share-bookmark buttons section
					 * 	this section holds likes icons with numbres(counts) and comments text and comments counts sections together.
					 */}
					<div className='likesIcons_withTheirCounts_container'>
						{/* likes icons (3 icons) and their counts next to each other */}
						<Heart_Container className='heart_container' $heart={heart}>
							<div className='heart_icon'>❤️</div>
							<div className='heart_number' onClick={() => setHeartList((heartList) => !heartList)}>
								{heart.length}
							</div>
							{heartList && <div className='heart_list users_list'></div>}
						</Heart_Container>

						<Smile_Container className='smile_container' $smile={smile}>
							<div className='smile_icon'>😂</div>
							<div className='smile_number'>{smile.length}</div>
						</Smile_Container>

						<Dislike_Container className='dislike_container' $dislike={dislike}>
							<div className='dislike_icon'>👎</div>
							<div className='dislike_number'>{dislike.length}</div>
						</Dislike_Container>
					</div>

					{/* <span className='comments_count'>
						<FontAwesomeIcon className='faComment' icon={faComment} style={{ color: "#0060fa70" }} />
						<span className='numbers'>{0}</span>
						<span className='comments text'>comments</span>
					</span> */}
				</MediaCounts_Section>

				<section className='media_related_section'>
					{/** media related section has 4 divs and all divs classnames are related_section.wrapper
					 * do not use section or contaiern inside small sections,
					 * remember container -> section -> wrapper -> block
					 */}
					<div className='like_wrapper'>
						{/** Post id passing down for a likepostAPI argument, please read the Popover notes
						 * 	also popoverOpen and Setter will be update the open after the like type is clicked.
						 * 	popoverOpen will be false right after the post like getting updated in the backed server
						 * 	and getting 200 code back in the Popover child component
						 */}
						<Popover popoverOpen={popoverOpen} setPopoverOpen={setPopoverOpen} postId={_id} />

						<div className='like_button button' onClick={handleLikeButtonClick}>
							Like
						</div>
					</div>
					<div className='comment_wrapper'>
						<div className='comment_button button' onClick={handleCommentButtonClick}>
							Comment
						</div>
						{/** this comment is for the next shit. for now we will provide a comment section in the below of the
						 * post, when user click the content, the post section will be open and will show the posts, but in the furure
						 * we will update it to take the all post comments to the modal, usign the below version.
						 *
						 * 	<Comment commentOpen={commentOpen} setCommentOpen={setCommentOpen} post={post} />
						 */}
					</div>
					<div className='share_wrapper'>
						<div className='share_button button' onClick={handleShareButtonClick}>
							share
						</div>
					</div>

					<div className='bookmark_wrapper'>
						<div className='bookmark_button button' onClick={handleBookmarkButtonClick}>
							<FontAwesomeIcon icon={faRegularBookmark} />
						</div>
					</div>
				</section>
				<Comment_Displaying_Section className='comment_section'>
					{/* text comment will be here */}
					<div className='comments_content_display_wrapper'>
						{/* text area */}
						{comments.map((comment, id) => (
							/* this div is the content owner avatar, username, content */
							<div key={id} className='signle_comment_content_block'>
								{/* first row content owner avatart */}
								<div className='comment_content_block_first_row'>
									<div className='comment_owner_avatar'>
										<img src={comment.owner.avatar} />
									</div>
								</div>

								{/* second row - this row sections idea sucks here  */}
								<div className='comment_content_block_second_row'>
									<div>
										<div className='comment_owner_username'>{comment.owner.username}</div>
										<div className='comment_content'>{comment.content}</div>
									</div>
									<div className='comment_reaction_block'>
										<span> {/* time ago */} 12h </span>
										<span>Like</span>
										<span>Reply</span>
									</div>

									<div className='reply_comment'>
										<input
											type='text'
											value={replyCommentText}
											onChange={handleCommentInputChange}
										/>
										<button style={{ marginLeft: "10px", padding: "2px 5px" }}
											onClick={handleCommentReplySubmit}
										>reply</button>
									</div>
								</div>
							</div>
						))}
						{/* comment details and reaction */}
					</div>

					<div className='comment_input_section_with_user_avatar'>
						{/* user avatar here */}
						<div className='avatar_wrapper'>
							<img src={signedUser.avatar} />
						</div>
						<div className='textarea_sendbutton_wrapper'>
							{/* input text area */}
							<div className='textarea_wrapper'>
								<textarea
									className='textarea'
									ref={textareaRef}
									value={text}
									onChange={handleChange}
									placeholder='Please be respectful to everyone...'
									rows={2} // Start with one row
								/>

								{/* this is for send button and adding sctiker and image to the reply comments */}
								<div className='comment_send_button_with_sticker_gifs_wrapper'>
									{/* doing groping, left side is upload imaage and gif, right side is send button
									 * like this wway its easy to array distance between like space-between justtify content
									 */}
									<div className='reply_with_images_smile_and_gifs_block'>
										<div>
											{/* image icon here */}
											<span>
												<FontAwesomeIcon icon={faImage} />
											</span>
										</div>
										<div>
											{/* gifs here, mf fontawesome has no free gifs icon, i added smile for now */}
											<span>
												<FontAwesomeIcon icon={faFaceSmile} />
											</span>
										</div>
									</div>
									{/*comment send button block  */}
									<div className='comment_send_button_block'>
										{/* // TODO add comment with image or gif or  */}
										{/* send button */}
										<span onClick={handleCommentSendClick}>send</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Comment_Displaying_Section>
			</section>
		</Post_Container>
	);
};

/* 


	// TODO

	1 - when I click like button, it open popover, its great.
		so, when I click to popover icons, I need to send that data to server as a liketype.
		when I get liketyope change, useEffect will gets all posts and update all posts, for now. but read below cons!

		# cons:
			if one post get liked, whole posts will get pulled and updared if there is no change the other posts 
			why all those are getting updated, so figure out how to stop that shit

		-	solution 1: right now I am gonna get the specific post back which just got updated, and updated that post only.
						
		

			<div className='heart_owner'>
									<div className='image_wrapper'>
										<img src={signedUser.avatar} />
									</div>
									<div className='image_wrapper' style={{ left: "0px" }}>
										<img src={signedUser.avatar} />
									</div>

									<div className='image_wrapper' style={{ left: "11px" }}>
										<img src={signedUser.avatar} />
									</div>
									<div className='image_wrapper' style={{ left: "21px" }}>
										<img src={signedUser.avatar} />
									</div>
									<div className='image_wrapper' style={{ left: "31px" }}>
										<img src={signedUser.avatar} />
									</div>
									<div className='image_wrapper' style={{ left: "20px" }}>
										<img src={signedUser.avatar} />
									</div>
								</div>


*/
