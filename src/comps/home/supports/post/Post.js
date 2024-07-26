import React, { useEffect, useState } from "react";
import TimeAgo from "javascript-time-ago";
import { useRecoilValue } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

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
	faHeart
);

/* STYLED */

import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);

/* Create formatter (English) */
const timeAgo = new TimeAgo("en-US");

/* STYLED COMPONENTS */
import {
	Dislike_Container,
	Heart_Container,
	MediaCounts_Section,
	Post_Container,
	Smile_Container,
} from "./post.styled";

/* GLOBAL STATES */
import { likeTypeDefault, userDefault } from "../../../auth/shared/store/states";

/* SUB COMPONENTS */
import { Popover } from "../popover/Popover";

/* POST COMPONENT */
export const Post = ({
	post: {
		likes,
		content,
		media,
		createdAt,
		_id,
		owner: { avatar, username },
	},
}) => {
	/* TODO */
	/* everytime when user types something in the post textarea, this POST renders on every letter */
	/* which means whole Home is rendering and posts are itereating every time, soo fix that shit */
	// console.log("renders")

	/**
	 * 	IMPORTANT WE DO NOT NEED
	 * 	global state likeType here. cause Popover.js will update it and Home.js will rerun the usehooks to
	 * 	retrieve all posts again, soo it doesnt make sense keep global likType state here.
	 * 	I commented it out but I will keep it here for future reminders
	 *
	 * */

	/** retrieving global state likeType */
	const likeType = useRecoilValue(likeTypeDefault)

	/* retrieving global state signedUser */
	const signedUser = useRecoilValue(userDefault);

	/** defining local state popoverOpen. which makes popover to be open and closed.
	 * 	used in this file and sending as a prop to this comp's child, <Popover />, line 146, this file.
	 * */
	const [popoverOpen, setPopoverOpen] = useState(false);

	/*  */
	const handleLikeClick = (e) => {
		console.log("like clicked");
		setPopoverOpen((popoverOpen) => !popoverOpen);
	};

	const handleCommentClick = (e) => {};

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
		let newHeart = []
		let newSmile = []
		let newDislike = []
		/* loops the likes array and group them */
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

	return (
		<Post_Container>
			{console.log("Post Container runs")}
			<section className='postowner_avatar_section'>
				<img src={avatar} />
			</section>

			<section className='post_content_section'>
				<section className='header_section'>
					<div className='title_wrapper'>
						<span className='title'>{username}</span>
						<span className='faCircleCheck'>
							<FontAwesomeIcon icon={faCircleCheck} style={{ color: "#005eff" }} />
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
					 * like count section stores the data of the likes under the post and above the like button
					 * its displaying the counts and a valid likes with its owner images and counts.
					 * this section holds likes and comments sections together.
					 */}
					<section className='likes_counts_main_section'>
						{/**
						 * like counts main section covers heart, smile and dislike containers
						 */}
						<div className='likes_icons_usernames_container'>
							<Heart_Container className='heart_container'>
								<div className='heart_icon'>❤️</div>
								<div className='heart_number'>{heart.length}</div>
							</Heart_Container>

							<Smile_Container className='smile_container'>
								<div className='smile_icon'>😂</div>
								<div className='smile_number'>{smile.length}</div>
							</Smile_Container>

							<Dislike_Container className='dislike_container'>
								<div className='dislike_icon'>👎</div>
								<div className='dislike_number'>{dislike.length}</div>
							</Dislike_Container>
						</div>
						{/* <div className='number_reaction_container'>
							<span className='numbers'>{likes.length}</span>
							<span className='likes text'>reactions</span>
						</div> */}
					</section>
					{/* <span className='comments_count'>
						<FontAwesomeIcon className='faComment' icon={faComment} style={{ color: "#0060fa70" }} />
						<span className='numbers'>{0}</span>
						<span className='comments text'>comments</span>
					</span> */}
				</MediaCounts_Section>

				<section className='media_related_section'>
					<span className='likes'>
						{/** Post id passing down for a likepostAPI argument, please read the Popover notes
						 * 	also popoverOpen and Setter will be update the open after the like type is clicked.
						 * 	popoverOpen will be false right after the post like getting updated in the backed server
						 * 	and getting 200 code back in the Popover child component
						 */}
						<Popover popoverOpen={popoverOpen} setPopoverOpen={setPopoverOpen} postId={_id} />

						<div className='sikko_like' onClick={handleLikeClick}>
							Like
						</div>
					</span>
					<span className='comments' onClick={handleCommentClick}>
						Comment
					</span>
					<span className='share'>share</span>

					<span className='bookmark'>
						<FontAwesomeIcon icon={faRegularBookmark} />
					</span>
				</section>
				<section className=''></section>
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
