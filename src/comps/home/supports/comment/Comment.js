import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import OutsideClickHandler from "react-outside-click-handler";
import { motion } from "framer-motion";

/* APIS */
import { addReplyAPI } from "../../../../apis/apiCalls";

/* GLOBALS */
import { postSubmittedDefault, userDefault } from "../../../auth/shared/store/states";

/* STYLED */
import {
	Bottom_Row,
	Content_Section,
	Display_User_Avatar,
	Timeline_Section,
	Top_Row,
	ViewReplies,
} from "../helpers/helpers.styled";
import { Comment_Container } from "./comment.styled";

/* HELPER */
import { Popover } from "../popover/Popover";
import { Timeline } from "../helpers/Timeline";
import { ReactionCounts } from "../helpers/ReactionCounts";
import { AddReply } from "../helpers/AddReply";
import { Reply } from "../reply/Reply";

export const Comment = ({ comment: { _id, owner, content, createdAt, likes, replies }, storageId }) => {
	const signedUser = useRecoilValue(userDefault);
	const [postSubmitted, setPostSubmitted] = useRecoilState(postSubmittedDefault);

	const [popoverOpen, setPopoverOpen] = useState(false);
	const [addReply, setAddReply] = useState(false);
	const [viewReplies, setViewReplies] = useState(false);

	const [text, setText] = useState("");
	const [image, setImage] = useState(undefined);
	const [replyingTo, setReplyingTo] = useState(undefined);

	const handleLikeButton = (e) => {
		console.log("handle-Comment-LikeButtonClick");
		setPopoverOpen((popoverOpen) => !popoverOpen);
	};

	const handleReplyButton = (e) => {
		let referral = owner._id == signedUser._id ? "yourself" : owner.username;

		setReplyingTo(referral);
		setAddReply((addReply) => !addReply);
	};

	const handleAddReplySubmit = (e) => {
		addReplyAPI({ accessToken: signedUser.accessToken, commentId: _id, replyText: text.trim(), referralId: null })
			.then((res) => {
				console.log("addReplyAPI sucess");

				setText("");
				setImage(undefined);
				setPostSubmitted((postSubmitted) => !postSubmitted);
			})
			.catch((err) => {
				console.log("addReplyAPI error");
			});
	};

	return (
		<Comment_Container>
			<Display_User_Avatar className='display_user_avatar_column_left'>
				<img src={owner.avatar} />
			</Display_User_Avatar>

			<div className='comment_content_and_timeline_column_right'>
				{/** comment_main_controller_container
				 * 	 helps mkeep the the content and timeline stay in one section
				 * 	 in that case, its easy to hold the reaction at the end of the comment or reply
				 */}
				<div className='comment_main_controller_container'>
					<Content_Section className='content_section'>
						<div className='username'>{owner.username}</div>
						<div className='content'>{content}</div>
					</Content_Section>

					<Timeline_Section className='timeline_section'>
						<Top_Row className='top_row'>
							<Timeline createdAt={createdAt} size={"mini"} fontSize={".7rem"} fontWeight={500} />
							<span className='like_button button' onClick={handleLikeButton}>
								<OutsideClickHandler
									onOutsideClick={() => {
										setPopoverOpen(false);
									}}
									disabled={!popoverOpen}
								>
									<Popover
										popoverOpen={popoverOpen}
										setPopoverOpen={setPopoverOpen}
										commentId={_id}
										likes={likes}
										top={"-40px"}
									/>
									Like
								</OutsideClickHandler>
							</span>

							<span
								style={{ color: addReply ? "red" : "black" }}
								className='reply_button button'
								onClick={handleReplyButton}
							>
								Reply
							</span>
						</Top_Row>

						<Bottom_Row className='bottom_row'>
							<ReactionCounts
								likes={likes}
								margin={"0px"}
								padding={"0px"}
								iconSize={"9px"}
								numberFontSize={".75rem"}
								numberPadding={"0px"}
								gap={"9px"}
								iconNumberGap={"1px"}
							/>
						</Bottom_Row>
					</Timeline_Section>
				</div>

				<>
					{replies && replies.length > 0 && (
						<>
							<ViewReplies
								style={{ display: !viewReplies ? "flex" : "none" }}
								onClick={() => setViewReplies(true)}
							>
								<span>view </span>
								<span>{replies && replies.length > 0 && replies.length}</span>
								<span>replies</span>
							</ViewReplies>

							<div style={{ display: viewReplies ? "flex" : "none", flexDirection: "column" }}>
								{replies.map((reply, index) => (
									<Reply reply={reply} key={index}/>
								))}
							</div>
						</>
					)}
				</>

				{addReply && (
					<OutsideClickHandler
						onOutsideClick={() => {
							setAddReply(false);
						}}
						// disabled={!popoverOpen}
					>
						<AddReply
							uuid={_id}
							replyingTo={replyingTo}
							signedUser={signedUser}
							text={text}
							setText={setText}
							image={image}
							setImage={setImage}
							handlePostClick={handleAddReplySubmit}
						/>
					</OutsideClickHandler>
				)}
			</div>
		</Comment_Container>
	);
};

/* 

<div className='d-none'>
			{replies &&
						replies.length > 0 &&
						replies.map((reply, index) => <Reply reply={reply} key={index} storageId={undefined} />)}
			 </div>

*/
