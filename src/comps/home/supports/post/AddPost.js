import React from "react";

/* STYLED */
import { AddPost_Container } from "./post.styled";
import { Button, Form_Container, Form_Left_Column, Form_Right_Column } from "../form/store.styled";

/* HELPER */
import { User_Avatar } from "../form/User_Avatar";
import { Uploads } from "../form/Uploads";
import { Textarea } from "../form/Textarea";
import { ImagePreview } from "../form/ImagePreview";

export const AddPost = ({
	isfor,
	uuid,
	signedUser,
	text,
	setText,
	image,
	setImage,
	handlePostClick,
	avatarWidth,
	avatarHeight,
	avatarBorder,
	TAheight,
	TApadding,
	TAfontSize,
	TAparentPadding,
	uploadsIconSize,
	labelHeight,
	labelWidth,
	uploadsGap,
	buttonFontSize,
	buttonPadding,
	addPostPadding,
}) => {


	return (
		<AddPost_Container className='addpost_container' $addPostPadding={addPostPadding}>
			<Form_Left_Column className='left_column'>
				<User_Avatar
					avatar={signedUser.avatar}
					width={avatarWidth ? avatarWidth : "3.5rem"}
					height={avatarHeight ? avatarHeight : "3.5rem"}
					border={avatarBorder}
					isfor={isfor}

				/>
			</Form_Left_Column>

			<Form_Right_Column className='right_column'>
				<div className='textarea_and_image_preview_wrapper'>
					<Textarea
						text={text}
						setText={setText}
						height={TAheight}
						padding={TApadding}
						parentPadding={TAparentPadding ? TAparentPadding : "0px"}
						fontSize={TAfontSize}
						isfor={isfor}
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
						iconSize={uploadsIconSize}
						labelHeight={labelHeight}
						labelWidth={labelWidth}
						gap={uploadsGap}
						isfor={isfor}
					/>

					<Button
						$fontSize={buttonFontSize}
						$padding={buttonPadding}
						$letterSpacing={"0px"}
						$isfor={isfor}
						onClick={handlePostClick}
						
					>
						<span>send</span>
					</Button>
				</div>
			</Form_Right_Column>
		</AddPost_Container>
	);
};
