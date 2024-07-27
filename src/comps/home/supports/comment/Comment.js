import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import TimeAgo from "../post/timeAgoConfig"; // Import the configured TimeAgo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/** // #HUGE BUG
 *
 *
 * I re-write (copy-past) the whole Post section again in here
 * make it common and shareable // TODO
 */

/* STYLED COMPONENTS */
import { Comment_Container, Comment_Header, Comment_Body } from "./comment.styled";

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

export const Comment = (
	/** commentOpen passed through Postjs section that triggers the display non or auto inside Comment Container */
	{
		commentOpen,
		setCommentOpen,
		post: {
			owner: { username, avatar },
			createdAt,
			media,
			content,
		},
	}
) => {
	// Create an instance of TimeAgo
	const timeAgo = new TimeAgo("en-US");

	const handleOutsideClick = (e) => {
		setCommentOpen(false);
		console.log("clicked outside");
	};

	return (
		<Comment_Container $commentOpen={commentOpen}>
			{/** when user click outside the white box in the middle, comment contaienr will get displyed none.
			 * by the way, if no disabled option, the outside box stays clickable no matter of display none section.
			 * so, when no comment button, it disabled the outside click option
			 */}
			<OutsideClickHandler onOutsideClick={handleOutsideClick} disabled={!commentOpen}>
				{/**building the same post here again with the post that been passed from the parent.
				 * thus is comment content container that is the showing the post detailes,
				 * comment_container is a backdrop in here.
				 *
				 */}

				<div className='comment_content_container'>
					<Comment_Header>
						<div className='headeer'>{username.toUpperCase()}'S &nbsp; POST</div>
					</Comment_Header>

					<Comment_Body>
						<div className='row_first'>
							<section className='postowner_avatar_section'>
								<img src={avatar} />
							</section>

							<section className='comment_post_header_section'>
								<div className='title_wrapper'>
									<span className='title'>{username}</span>
									<span className='faCircleCheck'>
										<FontAwesomeIcon icon={faCircleCheck} />
									</span>
									<span>
										{/* add description here, if user is kokuma, username must be @kokuma */}
									</span>
								</div>
								<div className='timeline_wrapper'>
									<span className='timeline'>{timeAgo.format(new Date(createdAt))}</span>
									<span className='faUniversalAccess'>
										<FontAwesomeIcon icon={faEarthAmericas} />
									</span>
								</div>
							</section>
						</div>

						<div className='row_second'>
							<section className='text_section'>{content}</section>
							{media && (
								<section className='media_section'>
									<img src={media} alt='upload-media' />
								</section>
							)}

							<section className='text_section'>{content}</section>
							{media && (
								<section className='media_section'>
									<img src={media} alt='upload-media' />
								</section>
							)}

							{/* <section className='text_section'>{content}</section>
							{media && (
								<section className='media_section'>
									<img src={media} alt='upload-media' />
								</section>
							)} */}
						</div>
					</Comment_Body>

					{/* <Comment_Footer></Comment_Footer> */}
				</div>
			</OutsideClickHandler>
		</Comment_Container>
	);
};
