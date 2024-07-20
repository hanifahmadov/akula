/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";

/*  STYLED  & LOGO */
import { Avatar_Container } from "./avatar.styled";
import default_logo from "../image/default_logo.png";

export const Avatar = ({ avatar, setAvatar }) => {
	const avatarRef = useRef();
	const [filename, setFilename] = useState("default_image.png");

	const handleAvatarChange = () => {
		const [file] = avatarRef.current?.files;
		let temp = file ? file.name : "default_image.png";

		if (temp.length > 17) {
			temp = temp.substring(0, 15) + " ...";
		}

		setAvatar(file);
		setFilename(temp);
	};

	return (
		<Avatar_Container>
			{/* <header>
				<span>User Avatar</span>
			</header> */}

			<section className='content'>
				<div className='img_wrapper'>
					<img src={avatar ? URL.createObjectURL(avatar) : default_logo} alt='selected' />
				</div>

				<div className='upload_wrapper'>
					<input
						type='file'
						id='avatar'
						name='avatar'
						className='d-none'
						ref={avatarRef}
						accept='image/png, image/jpeg, image/jpg'
						onChange={handleAvatarChange}
					/>
					<label htmlFor='avatar' className='label_avatar'>
						Upload
					</label>
				</div>
			</section>
		</Avatar_Container>
	);
};
