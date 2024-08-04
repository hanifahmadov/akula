/* NPM PACKAGES */
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

/* APIS */
import { addCommentAPI } from "../../../../apis/apiCalls";

/* GLOBALS */
import { postSubmittedDefault, userDefault } from "../../../auth/shared/store/states";

/* STYLED */
import { Post_Container } from "./post.styled";

/* HELPER */
import { Post_Header } from "./Post_Header";
import { Post_Content } from "./Post_Content";
import { ReactionCounts } from "../helpers/ReactionCounts";
import { Button_Groups } from "./Button_Groups";
import { Comment } from "../comment/Comment";
import { AddPost } from "./AddPost";



export const Post = ({ post: { _id, owner, createdAt, content, media, likes, comments } }) => {
	/* TODO */
	/* everytime when user types something in the post textarea, this POST renders on every letter */
	/* which means whole Home is rendering and posts are itereating every time, soo fix that shit */
	// console.log("renders")

	const signeddUser = useRecoilValue(userDefault);
	const [postSubmitted, setPostSubmitted] = useRecoilState(postSubmittedDefault);

	/**
	 *  textarea values and refs
	 * 	uploads values
	 */
	const [text, setText] = useState("");
	const [image, setImage] = useState(undefined);

	const handleCommentSubmit = (e) => {
		/** Adding comment to post
		 *  so, need that post id to pull and add the comment
		 */
		addCommentAPI({ accessToken: signeddUser.accessToken, postId:_id, text })
			.then((res) => {
				console.log("addCommentAPI success");

				/* trigger getAllPosts inside Home.js */
				setPostSubmitted((postSubmitted) => !postSubmitted);

				/* reset textArea & img */
				setText("");
				setImage(undefined)
				
			})
			.catch((err) => {
				console.log(" addCommentAPI err");
			});
	};
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
					comments.length > 0 &&
					comments.map((comment, index) => {
						return <Comment key={index} comment={comment} storageId={undefined} />;
					})}
			</div>

			<div className='add_comment_wrapper_row_five'>
				<AddPost
					isfor={"comment"}
					uuid={_id}
					signedUser={signeddUser}
					text={text}
					setText={setText}
					image={image}
					setImage={setImage}
					handlePostClick={handleCommentSubmit}
					avatarHeight={'2.25rem'}
					avatarWidth={'2.25rem'}
					avatarBorder={'2px solid white'}
					TAheight={2}
					TApadding={'8px 10px'}
					TAfontSize={'.9rem'}
					uploadsIconSize={'.8rem'}
					labelHeight={"20px"}
					labelWidth = {"20px"}
					buttonFontSize={'.9rem'}
					buttonPadding={'0px 5px'}
					addPostPadding={'5px'}

				/>
			</div>
		</Post_Container>
	);
};


/* 
 ADD POST PROPS

 	uuid,
	signedUser,
	text,
	setText,
	image,
	setImage,
	handlePostClick,

	avatarWidth,
	avatarHeight,
	TAheight,
	TApadding,
	TAfontSize,
	uploadsIconSize,
	labelHeight,
	labelWidth,
	uploadsGap,
	buttonFontSize,
	buttonPadding,


*/