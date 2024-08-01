import React from "react";

import { AddPost_Container } from "./post.styled";
import { Button, Form_Left_Column, Form_Right_Column } from "../form/store.styled";
import { User_Avatar } from "../form/User_Avatar";
import { Textarea } from "../form/Textarea";
import { Uploads } from "../form/Uploads";
import { ImagePreview } from "../form/ImagePreview";

export const AddReply = ({ signedUser, text, setText, image, setImage, handlePostClick }) => {
	return (
		<AddPost_Container className='addreply_container'>
			<Form_Left_Column className='left_column'>
				<User_Avatar avatar={signedUser.avatar} width={"2rem"} height={"2rem"} />
			</Form_Left_Column>

			<Form_Right_Column className='right_column'>
				<div className='textarea_and_image_preview_wrapper'>
					<Textarea
						text={text}
						setText={setText}
						height={1}
						padding={"5px 10px"}
						parentPadding={"0px"}
						fontSize={".9rem"}
					/>
					{image && <ImagePreview image={image} setImage={setImage} />}
				</div>

				<div className='media__and_submit_button_wrapper'>
					<Uploads
						setImage={setImage}
						iconSize={".7rem"}
						labelHeight={"15px"}
						labelWidth={"15px"}
						gap={"5px"}
					/>
					<Button $fontSize={".7rem"} $padding={"0px 3px"} $letterSpacing={"0px"} onClick={handlePostClick}>
						send
					</Button>
				</div>
			</Form_Right_Column>
		</AddPost_Container>
	);
};
