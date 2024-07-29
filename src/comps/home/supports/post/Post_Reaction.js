import React, { useState } from "react";
/* STYLED */
import { Post_Reaction_Container } from "./post.styled";

/* COMPONENTS */
import { Button_Groups } from "./Button_Groups";
import { Comment } from "./Comment";

export const Post_Reaction = ({ postId, likes, comments }) => {
	/** defining local state popoverOpen. which makes popover to be open and closed.
	 * 	used in this file and sending as a prop to this comp's child, <Popover />, line 146, this file.
	 *
	 * this technique is applying also to comment section only
	 * */
	const [commentOpen, setCommentOpen] = useState(false);

	console.log(comments, "asdedeasde ded");

	return (
		<Post_Reaction_Container $commentOpen={commentOpen}>
			<Button_Groups postId={postId} likes={likes} commentOpen={commentOpen} setCommentOpen={setCommentOpen} />

			<div className='comments_section'>

				<div className='all_comments_row'>
					<div className="first_comment">
                        <Comment comment={comments[0]}/>
                    </div>

                    <div className="rest_of_comments"> 

                    </div>
				</div>

                <div className="comment_input_row">
                    
                </div>
			</div>
		</Post_Reaction_Container>
	);
};
