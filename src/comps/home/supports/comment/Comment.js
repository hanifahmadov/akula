import React, { useState, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";

/* STYLED */
import { Comment_Container } from "./comment.styled";

/* HELPER */
import TimeAgo from "../post/timeAgoConfig"; // Import the configured TimeAgo
import { Fontawesome } from "../fontawesome/Fontawesome";
import { Popover } from "../popover/Popover";

export const Comment = ({
	comment: {
		_id,
		owner: { avatar: comment_owner, username },
		content,
		createdAt,
		likes,
		replies,
	},

	postId,
	replyId,
	isFor,
	signedUser,
}) => {
	const timeAgo = new TimeAgo("en-US");
	const [popoverOpen, setPopoverOpen] = useState(false);

	const handleReplyButtonClick = (e) => {};

	const handleLikeButtonClick = (e) => {
		console.log("handleLikeButtonClick");
		setPopoverOpen((popoverOpen) => !popoverOpen);
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
					<div className='username'>{username}</div>
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
						<span className='reply_button' onClick={handleReplyButtonClick}>
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

					<div className="addReply_container">

						
						
					</div>
				</div>

				<div className='comment_replies'>
					{replies.map((reply, index) => (
						<div key={index} style={{ margin: "10px 0px" }}>
							<Comment
								comment={reply}
								postId={postId}
								commentId={_id}
								replyId={reply._id}
								isFor={"reply"}
							/>
						</div>
					))}
				</div>
			</div>
		</Comment_Container>
	);
};
