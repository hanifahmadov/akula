import React from "react";
import TimeAgo from "javascript-time-ago";
import { useRecoilValue } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHeart as faRegularHeart,
	faThumbsDown as faRegularThumbsDown,
	faBookmark as faRegularBookmark,
	faThumbsUp as faRegularThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

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
	faComment
);

/* STYLED */

import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);

// Create formatter (English).
const timeAgo = new TimeAgo("en-US");

/* IMPORTS */
import { likePostAPI } from "../../../../apis/apiCalls";
import { Post_Container } from "./support.styled";

import { userDefault } from "../../../auth/shared/store/states";

/* //# POPOVER */
import { PopoverRadix } from "../popover/PopoverRadix";

export const Post = ({
	post: {
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

	// console.log(typeof media);

	const signedUser = useRecoilValue(userDefault);

	const handleLikeClick = (e) => {
		likePostAPI({ accessToken: signedUser.accessToken, postId: _id, likeType: "like" })
			.then((res) => {
				console.log("res inside like click", res);
			})
			.catch((err) => {
				console.log("error inside like click", err);
			});
	};

	const handleCommentClick = (e) => {};

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

				<section className='media_counts_section'>
					<span className='likes_count'>
						<FontAwesomeIcon className='faThumbsUp' icon={faThumbsUp} style={{ color: "#0060fa70" }} />
						<span className='numbers'>{0}</span>
						<span className='likes text'>reactions</span>
					</span>
					<span className='comments_count'>
						<FontAwesomeIcon className='faComment' icon={faComment} style={{ color: "#0060fa70" }} />
						<span className='numbers'>{0}</span>
						<span className='comments text'>comments</span>
					</span>
				</section>

				<section className='media_related_section'>
					<span className='likes'>Like</span>
					<span className='comments' onClick={handleCommentClick}>
						Comment
					</span>
					<span className='share'>
						<PopoverRadix text={"share"} />
					</span>

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




*/
