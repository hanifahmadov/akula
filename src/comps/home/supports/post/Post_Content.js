import React from "react";

/* STYLED */
import { Post_Content_Container } from "./post.styled";

export const Post_Content = ({media, content}) => {
	return (
		<Post_Content_Container>
			<section className='content'>{content}</section>
			{media && (
				<section className='media_section'>
					<img src={media} alt='upload-media' />
				</section>
			)}
		</Post_Content_Container>
	);
};
