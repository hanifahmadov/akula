import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import OutsideClickHandler from "react-outside-click-handler";
import { v4 as uuidv4 } from "uuid";

/* API */
import { addReplyAPI } from "../../../../apis/apiCalls";

/* GLOBALS */
import { postSubmittedDefault, userDefault } from "../../../auth/shared/store/states";

/* STYLED */
import { Reply_Container } from "./reply.styled";
import { Bottom_Row, Content_Section, Display_User_Avatar, Timeline_Section, Top_Row } from "../helpers/helpers.styled";

/* HELPER */
import { Popover } from "../popover/Popover";
import { Timeline } from "../helpers/Timeline";
import { ReactionCounts } from "../helpers/ReactionCounts";
import { SubReply } from "../subreply/SubReply";
import { AddReply } from "../helpers/AddReply";

export const Reply = ({ reply: { _id, owner, content, createdAt, likes, replies } }) => {




	const signedUser = useRecoilValue(userDefault);
	const [postSubmitted, setPostSubmitted] = useRecoilState(postSubmittedDefault);

	const [popoverOpen, setPopoverOpen] = useState(false);
	const [currentReply, setCurrentReply] = useState(false);
	const [referralId, setReferralId] = useState(null)

	const [unique, setUnique] = useState(1989);

	const [text, setText] = useState("");
	const [image, setImage] = useState(undefined);
	const [replyingTo, setReplyingTo] = useState(undefined);

	const handleLikeButton = (e) => {
		setPopoverOpen((popoverOpen) => !popoverOpen);
	};

	const handleReplyButton = (e) => {
		let referral_username = owner._id == signedUser._id ? "yourself" : owner.username;

		setReplyingTo(referral_username);
		setReferralId(owner._id)
		setCurrentReply(_id);
	};

	const handleAddReplySubmit = (e) => {
		console.log("replyingTo", replyingTo);

		addReplyAPI({ accessToken: signedUser.accessToken, commentId: _id, replyText: text.trim(), referralId: referralId })
			.then((res) => {
				console.log("addReplyAPI inside Reply.js is success");

				setText("");
				setImage(undefined);
				setReplyingTo(undefined);
				setCurrentReply(null)
				setReferralId(null)
				setPostSubmitted((postSubmitted) => !postSubmitted);
			})
			.catch((err) => {
				console.log("addReplyAPI inside Reply.js is error");
			});
	};

	useEffect(() => {
		setUnique(uuidv4());
	}, [currentReply]);

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
										commentId={_id}
										likes={likes}
										top={"-40px"}
									/>
									Like
								</OutsideClickHandler>
							</span>

							<span
								style={{ color: currentReply == _id ? "red" : "black" }}
								className='reply_button button'
								id={_id}
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
						replies.map((reply, index) => (
							<SubReply
								key={index}
								subreply={reply}
								currentReply={currentReply}
								setCurrentReply={setCurrentReply}
								setReplyingTo={setReplyingTo}
								setReferralId={setReferralId}
							/>
						))}
				</div>

				{currentReply && (
					<OutsideClickHandler
						onOutsideClick={() => {
							setCurrentReply(false);
						}}
						// disabled={!popoverOpen}
					>
						<AddReply
							uuid={unique}
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
		</Reply_Container>
	);
};

// const handleAddReplySubmit = (e) => {
/** important notes
 *  referalId will output who this reply refers to
 * 	parentId needs in the server to keep all sub replies in its replies array
 *
 * 	like => reply[reply[reply(referral), reply(referral), reply(referral), ...]]
 * 	cant ma
 * ke a reply chains like => reply[reply[reply[reply....]]]
 */
// 	addReferredReplyAPI({
// 		accessToken: signedUser.accessToken,
// 		replyText: text.trim(),
// 		referredId: owner._id,
// 		storageId,
// 	})
// 		.then((res) => {
// 			console.log("addReferredReplyAPI is succeeded");
// 			setText("");
// 			setImage(undefined);
// 			setReplyingTo(null);
// 			setPostSubmitted((postSubmitted) => !postSubmitted);
// 		})
// 		.catch((err) => {
// 			console.log("addReferredReplyAPI is errored");
// 		});
// };
