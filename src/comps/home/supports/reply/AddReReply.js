import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

/* APIS  */

/* GLOBALS */


/* STYLED */
import { AddPost_Container } from "../post/post.styled";
import { Button, Form_Left_Column, Form_Right_Column, Replaying } from "../form/store.styled";

/* HELPER */
import { User_Avatar } from "../form/User_Avatar";
import { Textarea } from "../form/Textarea";
import { ImagePreview } from "../form/ImagePreview";
import { Uploads } from "../form/Uploads";

export const AddReReply = ({ uuid, replyingTo, signedUser, text, setText, image, setImage, handlePostClick }) => {





	return (
		<AddPost_Container className='add_rereply_container'>
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
					{image && (
						<ImagePreview
							image={image}
							setImage={setImage}
							imgHeight={"100%"}
							imgWidth={"8rem"}
							parentMargin={".5rem 0rem"}
							closeButtonFontSize={"1.1rem"}
						/>
					)}
				</div>

                <div className='media__and_submit_button_wrapper'>
					<Uploads
						uuid={uuid}
						setImage={setImage}
						iconSize={".7rem"}
						labelHeight={"15px"}
						labelWidth={"15px"}
						gap={"5px"}
					/>

					{replyingTo && (
						<Replaying>
							<span className="replying_to">replying to</span> 
							<span className="username">@{replyingTo}</span>
						</Replaying>
					)}

					<Button $fontSize={".7rem"} $padding={"0px 3px"} $letterSpacing={"0px"} onClick={handlePostClick}>
						send
					</Button>
				</div>
			</Form_Right_Column>
		</AddPost_Container>
	);
};
