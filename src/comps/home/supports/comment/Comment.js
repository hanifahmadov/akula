import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import OutsideClickHandler from "react-outside-click-handler";
import { motion } from "framer-motion";

/* APIS */
import { addReplyAPI } from "../../../../apis/apiCalls";

/* GLOBALS */
import { replySubmitDefault, userDefault } from "../../../auth/shared/store/states";

/* STYLED */
import { Bottom_Row, Content_Section, Display_User_Avatar, Timeline_Section, Top_Row } from "../helpers/helpers.styled";
import { Comment_Container } from "./comment.styled";

/* HELPER */
import TimeAgo from "../post/timeAgoConfig"; // Import the configured TimeAgo
import { Fontawesome } from "../fontawesome/Fontawesome";
import { Popover } from "../popover/Popover";
import { Textarea } from "../form/Textarea";
import { ImagePreview } from "../form/ImagePreview";
import { Timeline } from "../helpers/Timeline";
import { ReactionCounts } from "../helpers/ReactionCounts";
import { AddReply } from "../post/AddReply";

export const Comment = ({ comment: { _id, owner, content, createdAt, likes, replies }, parentId }) => {
	const signedUser = useRecoilValue(userDefault);
	const [replySubmit, setReplySubmit] = useRecoilState(replySubmitDefault);
	const [popoverOpen, setPopoverOpen] = useState(false);

	const [replyButton, setReplyButton] = useState(false);
	const [replyPost, setReplyPost] = useState(false);

	const [text, setText] = useState("");
	const [referral, setReferral] = useState("");
	const [replyImage, setReplyImage] = useState(undefined);

	const handleCommenLikeButtonClick = (e) => {
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

	console.log("image image ", image);

	return (
		<Comment_Container>
			<Display_User_Avatar className='display_user_avatar_column_left'>
				<img src={owner.avatar} />
			</Display_User_Avatar>

			<div className='comment_content_and_timeline_column_right'>
				<Content_Section className='content_section'>
					<div className='username'>{owner.username}</div>
					<div className='content'>{content}</div>
				</Content_Section>

				<Timeline_Section className='timeline_section'>
					<Top_Row className='top_row'>
						<Timeline createdAt={createdAt} size={"mini"} fontSize={".7rem"} fontWeight={500} />
						<span className='like_button button' onClick={handleCommenLikeButtonClick}>
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

						<span className='reply_button button'>Reply</span>
					</Top_Row>

					<Bottom_Row className='bottom_row'>
						<ReactionCounts
							likes={likes}
							margin={"0px"}
							padding={"0px"}
							iconSize={"10px"}
							numberFontSize={".75rem"}
							numberPadding={"0px"}
							gap={"12px"}
						/>
					</Bottom_Row>
				</Timeline_Section>

				<AddReply
					signedUser={signedUser}
					text={text}
					setText={setText}
					replyImage={replyImage}
					setReplyImage={setReplyImage}
					handlePostClick={handleAddReplySubmit}
				/>
			</div>
		</Comment_Container>
	);
};
