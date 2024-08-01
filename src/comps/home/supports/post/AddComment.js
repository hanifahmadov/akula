import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { motion } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";

/* API */
import { addCommentAPI } from "../../../../apis/apiCalls";

/* GLOBAL */
import { commentSubmitDefault, userDefault } from "../../../auth/shared/store/states";

/*  STYLED */
import { AddComment_Container } from "./post.styled";

/* HELPERS */
import { Textarea } from "../form/Textarea";
import { Fontawesome } from "../fontawesome/Fontawesome";

export const AddComment = ({ postId }) => {
	const singedUser = useRecoilValue(userDefault);
	const [commentSubmit, setCommentSubmit] = useRecoilState(commentSubmitDefault);

	/**
	 *  textarea values and refs
	 */
	const [text, setText] = useState("");

	/**
	 *  image grabs the post media
	 */
	const [image, setImage] = useState(undefined);

	/**
	 *
	 */

	const [commentButton, setCommentButton] = useState(false);

	const handleAddCommentSendButtonClick = (e) => {
		/** Add new comment Api
		 *
		 */
		addCommentAPI({ accessToken: singedUser.accessToken, postId, commentText: text })
			.then((res) => {
				console.log(" add comment api success");

				/* trigger getAllPosts inside Home.js */
				setCommentSubmit((commentSubmit) => !commentSubmit);

				/* reset textArea text */
				setText("");
			})
			.catch((err) => {
				console.log(" add comment api err");
			});
	};

	return (
		<OutsideClickHandler
			onOutsideClick={() => {
				setCommentButton(false);
				console.log("clicked outside");
			}}
			disabled={!commentButton}
		>
			<AddComment_Container>
				<div className='addComment_avatar_column'>
					<img src={singedUser.avatar} />
				</div>

				<div className='addComment_post_column'>
					<div className='addComment_post_column_top_row'>
						<Textarea
							text={text}
							setText={setText}
							fontSize={".9rem"}
							borderRadius={"20px"}
							height={1}
							maxHeight={"5rem"}
							owner={"addComment"}
							setDisplay={setCommentButton}
						/>
					</div>

					{commentButton && (
						<motion.div
							className='addComment_post_column_bottom_row'
							initial={{ opacity: 0, y: -5 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ type: "spring", stiffness: 100 }}
						>
							<div className='addComment_image_icon'>
								<Fontawesome type={"faImage"} fontSize={"1.1rem"}  />
							</div>

							<div className='addCommentSendButton' onClick={handleAddCommentSendButtonClick}>
								<button>send</button>
							</div>
						</motion.div>
					)}
				</div>
			</AddComment_Container>
		</OutsideClickHandler>
	);
};
