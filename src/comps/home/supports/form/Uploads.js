import React, { useRef } from "react";

/* STYLED */
import { Uploads_Container } from "./store.styled";

/* HELPER */
import { Fontawesome } from "../fontawesome/Fontawesome";

export const Uploads = ({ setImage, labelHeight, labelWidth, gap, iconSize }) => {
	const imageRef = useRef();

	const handleImageChange = () => {
		const [file] = imageRef.current?.files;
		setImage(file);
	};

	return (
		<Uploads_Container $labelHeight={labelHeight} $labelWidth={labelWidth} $gap={gap}>
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
					<Fontawesome type={"faImage"} className='icon image' fontSize={iconSize} />
				</label>
			</div>

			<div className='select_video'>
				<label htmlFor='' className='label video'>
					<Fontawesome type={"faVideo"} className='icon video' fontSize={iconSize} />
				</label>
			</div>

			<div className='select_poll'>
				<label htmlFor='' className='label poll'>
					<Fontawesome type={"faMasksTheater"} className='icon poll' fontSize={iconSize} />
				</label>
			</div>
		</Uploads_Container>
	);
};
