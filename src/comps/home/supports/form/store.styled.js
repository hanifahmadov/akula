/* eslint-disable */
import styled from "styled-components";
// import { motion } from "framer-motion";

export const Textarea_Container = styled.div(
	({
		theme: {
			device: { mobile },
		},
		$isfor,
		$fontSize,
		$padding,
		$maxHeight,
		$borderRadius,
		$parentPadding,
	}) => {
		return {
			display: "flex",
			flexDirection: "column",

			width: "100%",
			height: "fit-content",
			background: "white",

			overflow: "hidden",

			padding: $parentPadding ? $parentPadding : "10px 2px",
			borderRadius: $borderRadius ? $borderRadius : "10px",

			...(mobile &&
				$isfor == "post" && {
					padding: "4px 3px 5px 3px",
					border: "1px solid white",
				}),

			...(mobile &&
				$isfor == "comment" && {
					padding: "0px 3px",
					border: "2px solid white",
				}),

			".textarea": {
				width: "100%",
				maxHeight: $maxHeight ? $maxHeight : "8rem",
				border: "none",
				overflow: "auto",
				outline: "none",
				WebkitBoxShadow: "none", // -webkit-box-shadow
				MozBoxShadow: "none", // -moz-box-shadow
				boxShadow: "none",
				resize: "none",
				padding: $padding ? $padding : "0px 15px",
				fontSize: $fontSize ? $fontSize : "1.1rem",
				borderRadius: $borderRadius ? $borderRadius : "10px",
				background: "transparent",
				color: "black",

				"&::placeholder": {
					color: "rgba(0, 0, 0, .25)",
					paddingLeft: "5px",

					...(mobile && {
						fontSize: ".9rem",
					}),
				},
				// border: "1px solid #ffffff30",

				...(mobile &&
					$isfor == "post" && {
						maxHeight: "6rem",
						padding: "0px 5px",
						lineHeight: "16px",
						fontSize: "1rem",
					}),

				...(mobile &&
					$isfor == "comment" && {
						maxHeight: "6rem",
						padding: "2px 5px",
						lineHeight: "14px",
						fontSize: ".9rem",
					}),
			},
		};
	}
);

export const Image_Preview_Container = styled.div(
	({ theme: {}, $imgHeight, $imgWidth, $closeButtonFontSize, $parentMargin }) => ({
		alignSelf: "flex-start",
		width: "fit-content",

		margin: $parentMargin ? $parentMargin : "1rem 0rem",
		border: "1.5px solid white",
		borderRadius: "10px",

		position: "relative",

		".selected_image": {
			height: $imgHeight ? $imgHeight : "15rem",
			width: $imgWidth ? $imgWidth : "15rem",
			borderRadius: "9px",
		},

		".faCircleXmark": {
			display: "block",
			lineHeight: "0px",
			textAlign: "center",
			overflow: "hidden",
			position: "absolute",
			top: "-7px",
			right: "-7px",
			fontSize: $closeButtonFontSize ? $closeButtonFontSize : "1.4rem",
			cursor: "pointer",
			background: "white",
			color: "red",
			borderRadius: "50%",
			border: "1px solid white",
		},
	})
);

export const Uploads_Container = styled.div(
	({
		theme: {
			device: { mobile },
		},
		$labelHeight,
		$labelWidth,
		$gap,
		$isfor,
	}) => ({
		display: "flex",
		gap: $gap ? $gap : "10px",

		".select_image, .select_video, .select_poll ": {
			background: "rgba(0, 0, 0, 0.1)",
			height: $labelHeight ? $labelHeight : "28px",
			width: $labelWidth ? $labelWidth : "28px",

			...(mobile &&
				$isfor == "post" && {
					height: "20px",
					width: "20px",
				}),

			borderRadius: "3px",

			label: {
				height: "100%",
				width: "100%",

				display: "flex",
				alignItems: "center",
				justifyContent: "center",

				fontSize: "13px",
				cursor: "pointer",
			},
		},

		".select_video": {
			cursor: "not-allowed",

			"& > *": {
				pointerEvents: "none",
				color: "rgba(0, 0, 0, 0.2)",
			},
		},

		".select_poll": {
			cursor: "not-allowed",

			"& > *": {
				pointerEvents: "none",
				color: "rgba(0, 0, 0, 0.2)",
			},
		},
	})
);

export const Form_Left_Column = styled.div(({ theme: {} }) => {
	return {};
});

export const Form_Right_Column = styled.div(
	({
		theme: {
			device: { mobile },
		},
		$padding,
		$buttonWrapperPadding,
	}) => {
		return {
			width: "100%",
			padding: $padding ? $padding : "0px 5px",

			".textarea_and_image_preview_wrapper": {},

			".media__and_submit_button_wrapper": {
				display: "flex",
				justifyContent: "space-between",

				width: "100%",

				marginTop: "0.4rem",
				padding: $buttonWrapperPadding ? $buttonWrapperPadding : "0px 5px",

				...(mobile && {
					marginTop: "0.2rem",
				}),
			},

			...(mobile && {
				padding: "0px 3px",
			}),
		};
	}
);

export const User_Avatar_Container = styled.div(
	({
		theme: {
			device: { mobile },
		},
		$width,
		$height,
		$border,
		$isfor,
	}) => {

		return {
			img: {
				width: $width ? $width : "3.5rem",
				height: $height ? $height : "3.5rem",
				borderRadius: "50%",
				border: $border ? $border : "2px solid rgba(255, 255, 255, 1)",
				alignSelf: "flex-start",

				...(mobile &&
					$isfor == "post" && {
						width: "2.25rem",
						height: "2.25rem",
						border: "2px solid white",
					}),

				...(mobile &&
					$isfor == "comment" && {
						width: "1.7rem",
						height: "1.7rem",
						border: "2px solid white",
					}),
			},
		};
	}
);

export const Replaying = styled.div(
	({
		theme: {
			device: { mobile },
		},
		$width,
		$height,
		$border,
	}) => {
		return {
			lineHeight: "10px",
			".replying_to": {
				fontSize: "9px",
				fontStyle: "italic",
				fontWeight: "400",

				...(mobile && {
					fontSize: "8px",
				}),
			},

			".username": {
				fontSize: "10px",
				background: "#cfe1fd",
				padding: "2px 4px",
				margin: "0px 3px",
				borderRadius: "5px",
				fontWeight: "600",

				...(mobile && {
					fontSize: "8px",
					padding: "2px 2px",
				}),
			},
		};
	}
);

export const Button = styled.div(
	({
		theme: {
			device: { mobile },
		},
		$fontSize,
		$color,
		$background,
		$fontWeight,
		$padding,
		$letterSpacing,
		$hoverBackground,
		$boredrRadius,
		$isfor,
	}) => {
		return {
			span: {
				display: "block",
				color: $color ? $color : "#fff",
				background: $background ? $background : "#052c65",

				fontSize: $fontSize ? $fontSize : "1rem",
				fontWeight: $fontWeight ? $fontWeight : "600",
				textAlign: "center",

				padding: $padding ? $padding : "2px 5px",
				borderRadius: $boredrRadius ? $boredrRadius : "2px",
				letterSpacing: $letterSpacing ? $letterSpacing : ".25px",

				cursor: "pointer",
				transition: "all .1s ease-in-out",

				"&:hover": {
					background: $hoverBackground ? $hoverBackground : "#000",
				},


				...(mobile && {
					fontSize: ".8rem",
					padding: "0px 5px",
					fontWeight: '600',
					letterSpacing: '-0.25px',
					lineHeight:'18px',
				}),
			},

			".send": {
				display: mobile ? "none" : "block",
			},

			".arrow": {
				display: "none",

				...(mobile && {
					display: "block",
					padding: "0px 0px 0px 1px",

					lineHeight: "14px",

					height: "14px",
					width: "14px",
					borderRadius: "50%",
				}),
			},

			...(mobile &&
				$isfor == "post" && {
					padding: "1px 5px",
					fontSize: ".9rem",
					letterSpacing: "-.25px",
					fontWeight: "600",
				}),

			...(mobile &&
				$isfor == "comment" && {
					padding: "1px 5px",
					fontSize: ".9rem",
					letterSpacing: "-.25px",
					fontWeight: "600",
				}),
		};
	}
);

// export const Form_Left_Column = styled.div(({ theme: {} }) => {

// 	return {

// 	};
// });
