import React, { useState } from "react";

/* STYLED */
import { Post_Container } from "./post.styled";

/* HELPER */
import { Fontawesome } from "../fontawesome/Fontawesome";

/* SUB COMPONENTS */
import { Post_Reaction } from "./Post_Reaction";
import { Post_Header } from "./Post_Header";
import { Post_Content } from "./Post_Content";
import { ReactionCounts } from "./ReactionCounts";

export const Post = ({ post: { _id, owner, createdAt, content, media, likes, comments } }) => {
	/* TODO */
	/* everytime when user types something in the post textarea, this POST renders on every letter */
	/* which means whole Home is rendering and posts are itereating every time, soo fix that shit */
	// console.log("renders")

	return (
		<Post_Container>
			{/* post row first */}
			<Post_Header avatar={owner.avatar} username={owner.username} createdAt={createdAt} />

			{/* post row second */}
			<Post_Content media={media} content={content} />

			<div className='post_row_third'>
				<div className='reaction_row_one'>
					{/* REACTION COUNTS */}
					<ReactionCounts likes={likes} />

					{/** Reactions
					 * 	likes will be passed to Popover.js
					 */}
					<Post_Reaction postId={_id} likes={likes} comments={comments}/>
				</div>

				<div className='reaction_row_two'>

				</div>
			</div>
		</Post_Container>
	);
};
