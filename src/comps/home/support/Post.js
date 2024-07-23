import React from "react";
import TimeAgo from "javascript-time-ago";

/* TimeAgo English setup */
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);

/* Create formatter (English)  */
const timeAgo = new TimeAgo("en-US");

/* STYLED */
import { Post_Container } from "./support.styled";

export const Post = ({ post }) => {
	console.log(post);
	return (
		<Post_Container>
			{/* <section className='postowner_avatar_section'>
				<img src={avatar} />
			</section> */}

			<section className='post_content_section'>
				<section className='content_section'>{post.content}</section>
				<section className='media_section'></section>
				<section className='header_section'></section>
			</section>
		</Post_Container>
	);
};

/* 




*/
