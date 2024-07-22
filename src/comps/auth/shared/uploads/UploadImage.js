/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";

/*  STYLED  & LOGO */
import { UploadImage_Container } from "./upload.styled";

export const UploadImage = ({ image, setImage }) => {
	const imageRef = useRef();
	const [filename, setFilename] = useState("default_image.png");

	const handleImageChange = () => {
		const [file] = imageRef.current?.files;

		setImage(file);
	};

	return (
		<UploadImage_Container>
			<section className='content'>
				<div className='img_wrapper'>
					<img src={image ? URL.createObjectURL(avatar) : ""} alt='selected' />
				</div>

				<div className='upload_wrapper'>
					<input
						type='file'
						id='avatar'
						name='avatar'
						className='d-none'
						ref={imageRef}
						accept='image/png, image/jpeg, image/jpg, image/gif, image/webp, image/avif'
						onChange={handleImageChange}
					/>
					<label htmlFor='avatar' className='label_avatar'>
						Upload
					</label>
				</div>
			</section>
		</UploadImage_Container>
	);
};
