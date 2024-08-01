import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import OutsideClickHandler from "react-outside-click-handler";
import { motion } from "framer-motion";

/* APIS */
import { addReplyAPI } from "../../../../apis/apiCalls";

/* GLOBALS */
import { replySubmitDefault } from "../../../auth/shared/store/states";

/* STYLED */
import { Comment_Container } from "./comment.styled";

/* HELPER */
import TimeAgo from "../post/timeAgoConfig"; // Import the configured TimeAgo
import { Fontawesome } from "../fontawesome/Fontawesome";
import { Popover } from "../popover/Popover";
import { Textarea } from "../form/Textarea";
import { ImagePreview } from "../form/ImagePreview";

export const Comment = ({
	comment: {
		_id,
		owner: { avatar: comment_owner, username, _id: referralId },
		content,
		createdAt,
		likes,
		replies,
	},

	metionedInReply: { username: mentioned, _id: mentionerID },
	postId,
	replyId,
	isFor,
	signedUser,
}) => {
	console.log(mentionerID);
	const [replySubmit, setReplySubmit] = useRecoilState(replySubmitDefault);
	const timeAgo = new TimeAgo("en-US");
	const [popoverOpen, setPopoverOpen] = useState(false);

	const [replyButton, setReplyButton] = useState(false);
	const [replyPost, setReplyPost] = useState(false);

	const [text, setText] = useState("");
	const [referral, setReferral] = useState("");
	const [image, setImage] = useState(undefined);

	const handleLikeButtonClick = (e) => {
		console.log("handleLikeButtonClick");
		setPopoverOpen((popoverOpen) => !popoverOpen);
	};

	const handleReplyButtonClick = (e) => {
		setReferral(username);
		setReplyPost((replyPost) => !replyPost);
	};

	const handleAddReplySubmit = (e) => {
		addReplyAPI({ accessToken: signedUser.accessToken, commentId: _id, replyText: text.trim(), referralId })
			.then((res) => {
				console.log("addReplyAPI sucess");

				setText("");
				setReplySubmit((replySubmit) => !replySubmit);
			})
			.catch((err) => {
				console.log("addReplyAPI error");
			});
	};
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
		/* // TODO 
            create a lists that shows who liked the posts when mouse over the numbers
        */
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

		// console.log(heart, smile, dislike);
	}, [likes]);

	return (
		<Comment_Container $isFor={isFor}>
			<div className='comment_column_avatar'>
				<img src={comment_owner} />
			</div>

			<div className='comment_column_body'>
				<div className='comment_body_row_top'>
					<div className='username'>
						<span>{username}</span>
						{mentioned && (
							<div className='mentioned_block'>
								<span className='replied'>replied to @</span>
								<span className='mentioned'>{mentionerID == referralId ? "self" : mentioned}</span>
							</div>
						)}
					</div>
					<div className='content'>{content}</div>
				</div>

				<div className='comment_body_row_bottom'>
					<div className='timeline_like_reply'>
						<span className='timeago'>{timeAgo.format(new Date(createdAt), "mini")}</span>

						<OutsideClickHandler
							onOutsideClick={() => {
								setPopoverOpen(false);
							}}
							disabled={!popoverOpen}
						>
							<span className='like_button' onClick={handleLikeButtonClick}>
								<Popover
									popoverOpen={popoverOpen}
									setPopoverOpen={setPopoverOpen}
									postId={postId}
									commentId={_id}
									replyId={replyId}
									likes={likes}
									reactElement={isFor}
								/>
								Like
							</span>
						</OutsideClickHandler>
						<span
							className='reply_button'
							onClick={handleReplyButtonClick}
							style={{ color: replyPost ? "red" : "black" }}
						>
							Reply
						</span>
					</div>

					<div className='comment_like_counts'>
						{/* heart icon and count */}
						{heart.length > 0 && (
							<div>
								<Fontawesome type={"faHeart"} fontSize={".8rem"} />
								<span className='heart_number number'>{heart.length}</span>
							</div>
						)}

						{/* smile icon and count */}
						{smile.length > 0 && (
							<div>
								<Fontawesome type={"faFaceLaughBeam"} fontSize={".8rem"} />
								<span className='heart_number number'>{smile.length}</span>
							</div>
						)}

						{/* dis icon and count */}
						{dislike.length > 0 && (
							<div>
								<Fontawesome type={"faThumbsDown"} fontSize={".8rem"} />
								<span className='heart_number number'>{dislike.length}</span>
							</div>
						)}
					</div>
				</div>

				<div className='comment_replies'>
					{replies.map((reply, index) => (
						<div key={index} style={{ margin: "10px 0px" }}>
							<Comment
								signedUser={signedUser}
								comment={reply}
								postId={postId}
								commentId={_id}
								replyId={reply._id}
								/* if there is an reply, it has a referral 100% */
								metionedInReply={reply.referral}
								isFor={"reply"}
							/>
						</div>
					))}
				</div>

				{replyPost && (
					<div className='addReply_container'>
						<div className='addReply_avatar_column'>
							<img src={signedUser.avatar} />
						</div>

						<div className='addReply_post_column'>
							<OutsideClickHandler
								onOutsideClick={() => {
									setReplyButton(false);
								}}
								disabled={!replyButton}
							>
								<div className='addReply_post_column_top_row'>
									<Textarea
										text={text}
										setText={setText}
										fontSize={".9rem"}
										borderRadius={"25px"}
										height={1}
										maxHeight={"5rem"}
										owner={"addComment"}
										setDisplay={setReplyButton}
										padding={"5px 17px"}
										parentPadding={replyButton ? "5px 0px 20px 0px" : "5px 0px 5px 0px"}
									/>
									{replyButton && (
										<div className='addReplySendButton_wrapper'>
											<span className='replying_to_wrapper'>
												replying to <span className='replying_to'>{"@" + referral}</span>
											</span>
											<span className='addReplySendButton' onClick={handleAddReplySubmit}>
												➤
											</span>
										</div>
									)}
									{/* {image && <ImagePreview image={image} setImage={setImage} />} */}
								</div>
							</OutsideClickHandler>
						</div>
					</div>
				)}
			</div>
		</Comment_Container>
	);
};
