import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

/* STYLED */
import { Comment_Container } from "./post.styled";

/* HELPER */
import TimeAgo from "./timeAgoConfig"; // Import the configured TimeAgo
import { Fontawesome } from "../fontawesome/Fontawesome";
import { Popover } from "../popover/Popover";

export const Comment = ({
	comment: {
		_id,
		owner: { avatar: comment_owner, username },
		content,
		createdAt,
		likes,
	},

	postId,
	comment,
	signedUser,
}) => {

	// console.log(comment)

	const timeAgo = new TimeAgo("en-US");

	const [popoverOpen, setPopoverOpen] = useState(false);

	const handleReplyButtonClick = (e) => {};

	const handleLikeButtonClick = (e) => {
		console.log("handleLikeButtonClick");
		setPopoverOpen((popoverOpen) => !popoverOpen);
	};

	return (
		<Comment_Container>
			<div className='comment_column_avatar'>
				<img src={comment_owner} />
			</div>
			{console.log(popoverOpen)}

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
									likes={likes}
									comp={"comment"}
								/>
								Like
							</span>
						</OutsideClickHandler>
						<span className='reply_button' onClick={handleReplyButtonClick}>
							Reply
						</span>
					</div>

					<div className='comment_like_counts'>{/* need another like section here */}</div>
				</div>
			</div>
		</Comment_Container>
	);
};
