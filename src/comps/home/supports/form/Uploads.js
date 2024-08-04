import React, { useRef } from "react";

/* STYLED */
import { Uploads_Container } from "./store.styled";

/* HELPER */
import { Fontawesome } from "../fontawesome/Fontawesome";

export const Uploads = ({ uuid, setImage, labelHeight, labelWidth, gap, iconSize, isfor }) => {
	const imageRef = useRef();

	const handleImageChange = () => {
		const [file] = imageRef.current?.files;
		setImage(file);
	};

	let fontSize = (iconSize) => {
		if (isfor == "post") {
			iconSize = "13px";
		}

		return iconSize;
	};

	return (
		<Uploads_Container $labelHeight={labelHeight} $labelWidth={labelWidth} $gap={gap} $isfor={isfor}>
			<div className='select_image'>
				<input
					type='file'
					id={uuid}
					name='image'
					className='d-none'
					ref={imageRef}
					accept='image/png, image/jpeg, image/jpg, image/webp, image/avif'
					onChange={handleImageChange}
				/>
				<label htmlFor={uuid} className='label image'>
					<Fontawesome type={"faImage"} className='icon image' fontSize={fontSize(iconSize)} />
				</label>
			</div>

			<div className='select_video'>
				<label htmlFor='' className='label video'>
					<Fontawesome type={"faVideo"} className='icon video' fontSize={fontSize(iconSize)} />
				</label>
			</div>

			<div className='select_poll'>
				<label htmlFor='' className='label poll'>
					<Fontawesome type={"faMasksTheater"} className='icon poll' fontSize={fontSize(iconSize)} />
				</label>
			</div>
		</Uploads_Container>
	);
};
