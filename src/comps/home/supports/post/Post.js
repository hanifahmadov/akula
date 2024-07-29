import React from "react";

/* STYLED */
import { Post_Container } from "./post.styled";
import { Post_Header } from "./Post_Header";
import { Post_Content } from "./Post_Content";

export const Post = ({ post: { owner, createdAt, content, media } }) => {
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
				

					<div className='comments'></div>
				</div>
				<div className='reaction_row_two'></div>
			</div>
		</Post_Container>
	);
};
