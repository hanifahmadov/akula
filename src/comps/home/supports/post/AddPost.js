import React from "react";

/* STYLED */
import { AddPost_Container } from "./post.styled";
import { Button, Form_Container, Form_Left_Column, Form_Right_Column } from "../form/store.styled";

/* HELPER */
import { User_Avatar } from "../form/User_Avatar";
import { Uploads } from "../form/Uploads";
import { Textarea } from "../form/Textarea";
import { ImagePreview } from "../form/ImagePreview";


const AddPost = ({ signedUser, text, setText, image, setImage, handlePostClick }) => {
	return (
		<AddPost_Container>
			<Form_Left_Column className='left_column'>
				<User_Avatar avatar={signedUser.avatar} width={"3.5rem"} height={"3.5rem"} />
			</Form_Left_Column>

			<Form_Right_Column className='right_column'>
				<div className='textarea_and_image_preview_wrapper'>
					<Textarea text={text} setText={setText} />
					{image && <ImagePreview image={image} setImage={setImage} />}
				</div>

				<div className='media__and_submit_button_wrapper'>
					<Uploads setImage={setImage} />
					<Button onClick={handlePostClick}>POST</Button>
				</div>
			</Form_Right_Column>
		</AddPost_Container>
	);
};

export default AddPost;
