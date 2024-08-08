/* NPM PACKAGES */
import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import OutsideClickHandler from "react-outside-click-handler";

/* APIS */

/* GLOBALS */
import { userDefault } from "../../../auth/shared/store/states";

/* STYLED */
import { SubReply_Container } from "./subreply.styled";
import { Bottom_Row, Content_Section, Display_User_Avatar, Timeline_Section, Top_Row } from "../helpers/helpers.styled";

/* HELPERS */
import { Timeline } from "../helpers/Timeline";
import { Popover } from "../popover/Popover";
import { ReactionCounts } from "../helpers/ReactionCounts";
import {Referral} from "../helpers/Referral";

export const SubReply = ({
	subreply: { _id, owner, content, createdAt, likes, referral },
	currentReply,
	setCurrentReply,
	setReplyingTo,
	setReferralId,
	component,
}) => {
	const signedUser = useRecoilValue(userDefault);
	const [popoverOpen, setPopoverOpen] = useState(false);

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
		setReferralId(owner._id);
		setCurrentReply(_id);
	};

	return (
		<SubReply_Container>
			<Display_User_Avatar className='display_user_avatar_column_left' $component={component}>
				<div className="joinline"/>
				<img src={owner.avatar} />
			</Display_User_Avatar>

			<div className='subreply_content_and_timeline_column_right'>
				{/** subreply_main_controller_container
				 * 	 helps mkeep the the content and timeline stay in one section
				 * 	 in that case, its easy to hold the reaction at the end of the comment or reply
				 */}
				<div className='subreply_main_controller_container'>
					<Content_Section className='content_section'>
						<div className='username'>
							{owner.username} 
							{referral && <Referral referred={referral.username}/>}
						</div>
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

				{/* <div>
					{replies &&
						replies.length > 0 &&
						replies.map((reply, index) => (
							<SubReply
								key={index}
								subreply={reply}
								currentReply={currentReply}
								setCurrentReply={setCurrentReply}
								setReplyingTo={setReplyingTo}
							/>
						))}
				</div> */}
			</div>
		</SubReply_Container>
	);
};
