import React from "react";
/* FONT */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* FONTAWESOME */
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

library.add(faCircleXmark);

/* STYLED */
import { Image_Preview_Container } from "./store.styled";

export const ImagePreview = ({ image, setImage, imgHeight, imgWidth, closeButtonFontSize, parentMargin }) => {
	return (
		<Image_Preview_Container
			$imgHeight={imgHeight}
			$imgWidth={imgWidth}
			$closeButtonFontSize={closeButtonFontSize}
			$parentMargin={parentMargin}
		>
			<img src={URL.createObjectURL(image)} className='selected_image' />
			<span className='faCircleXmark'>
				<FontAwesomeIcon icon={faCircleXmark} onClick={() => setImage(undefined)} />
			</span>
		</Image_Preview_Container>
	);
};
