import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* FONTAWESOME */
import {
	faCircleXmark,
	faImage,
	faVideo,
	faMasksTheater,
	faCircleCheck,
	faUniversalAccess,
	faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";

library.add(faCircleXmark, faImage, faVideo, faMasksTheater, faCircleCheck, faUniversalAccess, faEarthAmericas);

/* STYLED */
import { Media_Container } from "./store.styled";

export const Media = ({ setImage }) => {
	const imageRef = useRef();

	const handleImageChange = () => {
		const [file] = imageRef.current?.files;
		setImage(file);
	};

	return (
		<Media_Container>
			<div className='select_image'>
				<input
					type='file'
					id='image'
					name='image'
					className='d-none'
					ref={imageRef}
					accept='image/png, image/jpeg, image/jpg, image/webp, image/avif'
					onChange={handleImageChange}
				/>
				<label htmlFor='image' className='label image'>
					<FontAwesomeIcon icon={faImage} className='icon image' />
				</label>
			</div>

			<div className='select_video'>
				<label htmlFor='' className='label video'>
					<FontAwesomeIcon icon={faVideo} className='icon video' />
				</label>
			</div>

			<div className='select_poll'>
				<label htmlFor='' className='label poll'>
					<FontAwesomeIcon icon={faMasksTheater} className='icon poll' />
				</label>
			</div>
		</Media_Container>
	);
};
