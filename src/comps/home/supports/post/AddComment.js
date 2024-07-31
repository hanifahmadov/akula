import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { motion } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";

/* GLOBAL */
import { userDefault } from "../../../auth/shared/store/states";

/*  STYLED */
import { AddComment_Container } from "./post.styled";
import { Textarea } from "../form/Textarea";
import { ImagePreview } from "../form/ImagePreview";
import { Fontawesome } from "../fontawesome/Fontawesome";

export const AddComment = () => {
	const singedUser = useRecoilValue(userDefault);

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
	const [displayButton, setDisplayButton] = useState(false);

	return (
		<OutsideClickHandler
			onOutsideClick={() => {
				setDisplayButton(false);
				console.log("clicked outside");
			}}
			disabled={!displayButton}
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
							padding={"10px 65px 10px 15px "}
							owner={"addComment"}
							setDisplayButton={setDisplayButton}
						/>
						{image && <ImagePreview image={image} setImage={setImage} />}
					</div>

					{displayButton && (
						<motion.div
							className='addComment_post_column_bottom_row'
							initial={{ opacity: 0, y: -5 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ type: "spring", stiffness: 100 }}
						>
							<div className='addComment_image_icon'>
								<Fontawesome type={"faImage"} fontSize={"1.1rem"} />
							</div>

							<div className='addCommentSendButton'>
								<button>send</button>
							</div>
						</motion.div>
					)}
				</div>
			</AddComment_Container>
		</OutsideClickHandler>
	);
};
