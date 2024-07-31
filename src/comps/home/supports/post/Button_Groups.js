import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

/* STYLED */
import { Button_Groups_Container } from "./post.styled";

/* HELPER */
import { Fontawesome } from "../fontawesome/Fontawesome";

/* COMPONENTS */
import { Popover } from "../popover/Popover";

export const Button_Groups = ({ postId, likes, commentOpen, setCommentOpen }) => {
	/** defining local state popoverOpen. which makes popover to be open and closed.
	 * 	used in this file and sending as a prop to this comp's child, <Popover />, line 146, this file.
	 *
	 * this technique is applying also to comment section only
	 * */
	const [popoverOpen, setPopoverOpen] = useState(false);

	/* Like Button Clicked */
	const handleLikeButtonClick = (e) => {
		console.log("like button clicked");
		setPopoverOpen((popoverOpen) => !popoverOpen);
	};

	/** Comment Button clicked */
	const handleCommentButtonClick = (e) => {
		console.log("comment button clicked");
		setCommentOpen((commentOpen) => !commentOpen);
	};

	return (
		<Button_Groups_Container className='button_groups_container'>


			<OutsideClickHandler
				onOutsideClick={() => {
					setPopoverOpen(false);
					console.log("clicked outside");
				}}
				disabled={!popoverOpen}
			>
				<button className='like_wrapper'>
					{/** Post id passing down for a likepostAPI argument, please read the Popover notes
					 * 	also popoverOpen and Setter will be update the open after the like type is clicked.
					 * 	popoverOpen will be false right after the post like getting updated in the backed server
					 * 	and getting 200 code back in the Popover child component
					 */}
					<Popover
						popoverOpen={popoverOpen}
						setPopoverOpen={setPopoverOpen}
						postId={postId}
						likes={likes}
						reactElement={"post"}
					/>

					<div className='like_button button' onClick={handleLikeButtonClick}>
						Like
					</div>
				</button>
			</OutsideClickHandler>

			{/* COMMENT */}
			<div className='comment_wrapper'>
				<button className='comment_button button' onClick={handleCommentButtonClick}>
					Comment
				</button>
				{/** this comment is for the next shit. for now we will provide a comment section in the below of the
				 * post, when user click the content, the post section will be open and will show the posts, but in the furure
				 * we will update it to take the all post comments to the modal, usign the below version.
				 *
				 * 	<Comment commentOpen={commentOpen} setCommentOpen={setCommentOpen} post={post} />
				 */}
			</div>

			{/* SHARE */}
			<div className='share_wrapper'>
				<button className='share_button button' disabled>
					Share
				</button>
			</div>

			{/* BOOKMARK */}
			<div className='bookmark_wrapper'>
				<button className='bookmark_button button'>
					<Fontawesome type={"faRegularBookmark"} />
				</button>
			</div>
		</Button_Groups_Container>
	);
};
