import React, { useState } from "react";

/* STYLED */
import { Post_Container } from "./post.styled";

/* HELPER */
import { Fontawesome } from "../fontawesome/Fontawesome";

/* SUB COMPONENTS */
import { Post_Header } from "./Post_Header";
import { Post_Content } from "./Post_Content";
import { ReactionCounts } from "../helpers/ReactionCounts";
import { AddComment } from "./AddComment";
import { Button_Groups } from "./Button_Groups";
import { Comment } from "../comment/Comment";

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

			<div className='reaction_counts_and_button_groups_row_third'>
				{/* REACTION COUNTS */}
				<ReactionCounts likes={likes} />

				{/* Like-Comment-Share-Bookmark */}
				<Button_Groups postId={_id} postLikes={likes} />
			</div>

			<div className='all_comments_row_four'>
				{comments &&
					comments.length &&
					comments.map((comment, index) => {
						return <Comment key={index}  comment={comment} parentId={_id} />;
					})}
			</div>

			<div className='add_comment_wrapper_row_five'>
				<AddComment postId={_id} />
			</div>
		</Post_Container>
	);
};
