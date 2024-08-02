/* NPM PACKAGES */
import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import OutsideClickHandler from "react-outside-click-handler";

/* APIS */
import { addSubReplyAPI } from "../../../../apis/apiCalls";

/* GLOBALS */
import { postSubmittedDefault, userDefault } from "../../../auth/shared/store/states";

/* STYLED */
import { SubReply_Container } from "./subreply.styled";
import { Bottom_Row, Content_Section, Display_User_Avatar, Timeline_Section, Top_Row } from "../helpers/helpers.styled";

/* HELPERS */
import { Timeline } from "../helpers/Timeline";
import { Popover } from "../popover/Popover";
import { ReactionCounts } from "../helpers/ReactionCounts";
import { AddReply } from "../helpers/AddReply";

export const SubReply = ({ subreply: { _id, owner, content, createdAt, likes, replies }, storageId }) => {
	const signedUser = useRecoilValue(userDefault);
	const [postSubmitted, setPostSubmitted] = useRecoilState(postSubmittedDefault);
	/* get rid off all these additional submit shit, create one and make it global */

	const [popoverOpen, setPopoverOpen] = useState(false);

	const [addReply, setAddReply] = useState(false);
	const [replyingTo, setReplyingTo] = useState(undefined);

	const [text, setText] = useState("");
	const [image, setImage] = useState(undefined);

	/**
	 *  Like Button Click
	 */
	const handleLikeButton = (e) => {
		setPopoverOpen((popoverOpen) => !popoverOpen);
	};

	/**
	 *  Reply Button Click
	 */
	const handleReplyButton = (e) => {
		let referral_username = owner._id == signedUser._id ? "yourself" : owner.username;

		setReplyingTo(referral_username);
		setAddReply((addReply) => !addReply);
	};

	/**
	 *  handle Add Reply Submmit
	 */
	const handleAddReplySubmit = (e) => {
		/** important notes
		 *  referalId will output who this reply refers to
		 * 	parentId needs in the server to keep all sub replies in its replies array
		 * 	like => reply[reply[reply(referral), reply(referral), reply(referral), ...]]
		 * 	cant make a reply chains like => reply[reply[reply[reply....]]]
		 */
		addSubReplyAPI({
			accessToken: signedUser.accessToken,
			replyId: _id,
			replyText: text,
			referralId: owner._id,
			storageId,
		})
			.then((res) => {
				setText("");
				setImage(undefined);
				setReplyingTo(null);
				setPostSubmitted((postSubmitted) => !postSubmitted);
			
			})
			.catch((err) => {
				console.log("addSubReplyAPI error");
			});
	};
	return (
		<SubReply_Container>
			<Display_User_Avatar className='display_user_avatar_column_left'>
				<img src={owner.avatar} />
			</Display_User_Avatar>

			<div className='subreply_content_and_timeline_column_right'>
				{/** subreply_main_controller_container
				 * 	 helps mkeep the the content and timeline stay in one section
				 * 	 in that case, its easy to hold the reaction at the end of the comment or reply
				 */}
				<div className='subreply_main_controller_container'>
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
										replyId={_id}
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
								gap={"7px"}
								iconNumberGap={"1px"}
							/>
						</Bottom_Row>
					</Timeline_Section>
				</div>

				<div>
					{replies &&
						replies.length > 0 &&
						replies.map((reply, index) => <SubReply subreply={reply} key={index} storageId={storageId} />)}
				</div>

				{addReply && (
					<AddReply
						uuid={_id}
						replyingTo={replyingTo} // just printing the username into post container
						signedUser={signedUser}
						text={text}
						setText={setText}
						image={image}
						setImage={setImage}
						handlePostClick={handleAddReplySubmit} // actual referral id being passing here
					/>
				)}
			</div>
		</SubReply_Container>
	);
};
