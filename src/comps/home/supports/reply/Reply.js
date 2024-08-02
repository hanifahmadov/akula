import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import OutsideClickHandler from "react-outside-click-handler";

/* API */
import { addReReplyAPI } from "../../../../apis/apiCalls";

/* GLOBALS */
import { reReplySubmitDefault, userDefault } from "../../../auth/shared/store/states";

/* STYLED */
import { Reply_Container } from "./reply.styled";
import { Bottom_Row, Content_Section, Display_User_Avatar, Timeline_Section, Top_Row } from "../helpers/helpers.styled";

/* HELPER */
import { Popover } from "../popover/Popover";
import { Timeline } from "../helpers/Timeline";
import { ReactionCounts } from "../helpers/ReactionCounts";
import { SubReply } from "../subreply/SubReply";
import { AddReply } from "../helpers/AddReply";

export const Reply = ({ reply: { _id, owner, content, createdAt, likes, replies }, storageId }) => {



	const signedUser = useRecoilValue(userDefault);
	const [reReplySubmit, setReReplySubmit] = useRecoilState(reReplySubmitDefault);
	const [popoverOpen, setPopoverOpen] = useState(false);
	const [addReply, setAddReply] = useState(false);

	const [text, setText] = useState("");
	const [image, setImage] = useState(undefined);
	const [replyingTo, setReplyingTo] = useState(undefined);

	const handleLikeButton = (e) => {
		setPopoverOpen((popoverOpen) => !popoverOpen);
	};

	const handleReplyButton = (e) => {
		let referral_username = owner._id == signedUser._id ? "yourself" : owner.username;

		setReplyingTo(referral_username);
		setAddReply((addReply) => !addReply);

	};

	const handleAddReplySubmit = (e) => {
		addReReplyAPI({ accessToken: signedUser.accessToken, reReplyId: _id, reReplyText: text, referralId: owner._id })
			.then((res) => {
				console.log("reReply api success");

				setReReplySubmit((reReplySubmit) => !reReplySubmit);
			})
			.catch((err) => {
				console.log("reReply api error");
			});
	};

	return (
		<Reply_Container>
			<Display_User_Avatar className='display_user_avatar_column_left'>
				<img src={owner.avatar} />
			</Display_User_Avatar>

			<div className='reply_content_and_timeline_column_right'>
				{/** reply_main_controller_container
				 * 	 helps mkeep the the content and timeline stay in one section
				 * 	 in that case, its easy to hold the reaction at the end of the comment or reply
				 */}
				<div className='reply_main_controller_container'>
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
						replies.map((reply, index) => <SubReply subreply={reply} key={index} storageId={_id} />)}
				</div>

				{addReply && (
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
				)}
			</div>
		</Reply_Container>
	);
};
