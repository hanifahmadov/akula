import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { motion } from "framer-motion";

/* STYLED */
import { Button_Groups_Container } from "./post.styled";

/* HELPER */
import { Fontawesome } from "../fontawesome/Fontawesome";

/* COMPONENTS */
import { Popover } from "../popover/Popover";

export const Button_Groups = ({ postId, postLikes }) => {
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
		// setCommentOpen((commentOpen) => !commentOpen);
		/* this will open the comment section and activete the comment textarea */
	};

	return (
		<Button_Groups_Container className='button_groups_container'>
			<OutsideClickHandler
				onOutsideClick={() => {
					setPopoverOpen(false);
					console.log("clicked outside");
				}}
				/** this will disabled the ourside click calls if popover is closed, this is a must */
				disabled={!popoverOpen}
			>
				<div className='like_wrapper'>
					{/** Post id passing down for a likepostAPI argument, please read the Popover notes
					 * 	also popoverOpen and Setter will be update the open after the like type is clicked.
					 * 	popoverOpen will be false right after the post like getting updated in the backed server
					 * 	and getting 200 code back in the Popover child component
					 */}
					<Popover
						popoverOpen={popoverOpen}
						setPopoverOpen={setPopoverOpen}
						postId={postId}
						/* likes are passing because of red icon on popover */
						likes={postLikes}
						top={"-43px"}
						left={"0px"}
						translateX={'-100%'}
					/>

					<motion.div
						whileTap={{ backgroundColor: "#003888" }}
						className='like_button sikko_button'
						onClick={handleLikeButtonClick}
					>
						Like
					</motion.div>
				</div>
			</OutsideClickHandler>

			{/* COMMENT */}
			<div className='comment_wrapper'>
				<motion.div
					whileTap={{ backgroundColor: "#003888" }}
					className='comment_button sikko_button'
					onClick={handleCommentButtonClick}
				>
					Comment
				</motion.div>
				{/** this comment is for the next shit. for now we will provide a comment section in the below of the
				 * post, when user click the content, the post section will be open and will show the posts, but in the furure
				 * we will update it to take the all post comments to the modal, usign the below version.
				 *
				 * 	<Comment commentOpen={commentOpen} setCommentOpen={setCommentOpen} post={post} />
				 */}
			</div>

			{/* SHARE */}
			<div className='share_wrapper'>
				<div className='share_button sikko_button' disabled>
					Share
				</div>
			</div>

			{/* BOOKMARK */}
			<div className='bookmark_wrapper'>
				<motion.div whileTap={{ backgroundColor: "#003888" }} className='bookmark_button sikko_button'>
					<Fontawesome type={"faRegularBookmark"} />
				</motion.div>
			</div>
		</Button_Groups_Container>
	);
};
