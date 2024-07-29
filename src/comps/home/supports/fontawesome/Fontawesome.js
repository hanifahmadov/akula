import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
	faHeart as faRegularHeart,
	faThumbsDown as faRegularThumbsDown,
	faBookmark as faRegularBookmark,
	faThumbsUp as faRegularThumbsUp,
    faFaceSmile as faFaceSmileRegular
} from "@fortawesome/free-regular-svg-icons";

import {
	faCircleXmark,
	faImage,
	faVideo,
	faMasksTheater,
	faCircleCheck,
	faUniversalAccess,
	faEarthAmericas,
	faThumbsUp,
	faComment,
	faHeart,
	faFaceLaughBeam,
    faFaceSmile,
    faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

library.add(
	faCircleXmark,
	faImage,
	faVideo,
	faMasksTheater,
	faCircleCheck,
	faUniversalAccess,
	faEarthAmericas,
	faComment,
	faRegularHeart,
	faRegularThumbsDown,
	faRegularBookmark,
	faThumbsUp,
	faRegularThumbsUp,
	faComment,
	faHeart,
    faFaceLaughBeam,
	faImage,
    faFaceSmile,
    faFaceSmileRegular,
    faThumbsDown
);

const defineType = (type) => {
	switch (type) {
		case "faCircleCheck":
			return faCircleCheck;
		case "faEarthAmericas":
			return faEarthAmericas;
		case "faHeart":
			return faHeart;
		case "faRegularHeart":
			return faRegularHeart;
        case "faFaceSmile":
            return faFaceSmile
        case "faFaceSmileRegular":
            return faFaceSmileRegular
        case "faThumbsDown":
            return faThumbsDown
		default:
			return null;
	}
};

export const Fontawesome = ({
	type,
	color,
	size,
	padding,
	margin,
	position,
	top,
	left,
	right,
	down,
	paddingBottom,
	paddingTop,
	paddingLeft,
	paddingRight,
	marginTop,
	marginBottom,
	marginLeft,
	marginRight,
	fontSize,
}) => {
	const icon = defineType(type);
	return icon ? (
		<FontAwesomeIcon
			icon={icon}
			style={{
				color,
				size,
				padding,
				margin,
				position,
				top,
				left,
				right,
				down,
				paddingBottom,
				paddingTop,
				paddingLeft,
				paddingRight,
				marginTop,
				marginBottom,
				marginLeft,
				marginRight,
				fontSize,
			}}
		/>
	) : null;
};
