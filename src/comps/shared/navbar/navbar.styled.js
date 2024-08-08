/**
 * NPM PACKAGES IMPORTS
 *
 */
import styled from "styled-components";
import { motion } from "framer-motion";

/** IMAGE */
// import mountain from "../auth/shared/image/mountain.jpg";

/**
 *  NAVBAR CONTAINER
 */
export const Navbar_Container = styled.div(
	({
		theme: {
			device: { tablet, mobile },
		},
	}) => ({
		/* dimensions always top*/
		width: "100%",
		height: "100%",

		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",


		/* TOP ROW  */
		".navbar_top_row": {
			display: "flex",
			flexDirection: "column",
			minWidth: "148px",

			...(tablet && {
				justifyContent: "center",
				alignItems: "center",
				minWidth: "fit-content",
			}),

			/** application header - POLARX */
			".application_header": {
				fontSize: "2.5rem",
				fontWeight: "800",
				letterSpacing: "1px",

				...(tablet && {
					fontSize: "1.75rem",
				}),

				...(mobile && {
					fontSize: "1.25rem",
					fontWeight: "900",
				}),
			},

			/* button is disable for now, but later will be okay */
			".post_button_from_navbar": {
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				textAlign: "center",

				color: "#fff",
				background: "#052c6550",

				fontSize: tablet ? "1.25rem" : "1.1rem",
				fontWeight: "600",

				marginTop: "30px",
				padding: "2px",
				letterSpacing: ".25px",

				borderRadius: "2px",
				cursor: "not-allowed",

				...(tablet && {
					width: "25px",
					height: "25px",
					borderRadius: "50%",
				}),

				".post": {
					display: tablet ? "none" : "inline",
				},

				".plus": {
					textAlign: "center",
					padding:'2px',
					display: tablet ? "block" : "none",
				},
			},
		},

		/** BOTTOM ROW FOOTER */
		".navbar_footer_row": {
			".logout_button": {
				display: tablet ? "none" : "block",
				minWidth: "148px",
				color: "#fff",
				background: "#000",
				textAlign: "center",
				fontSize: "1.1rem",
				fontWeight: "600",

				padding: "2px",
				borderRadius: "2px",
				letterSpacing: ".25px",

				cursor: "pointer",
				transition: "all .1s ease-in-out",

				"&:hover": {
					// background: "#052c65",
				},
			},
		},
	})
);

/**
 *  LINKS CONTAINER
 */
export const Links_Container = styled.div(
	({
		theme: {
			device: { tablet },
		},
	}) => ({
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",

		marginTop: "15px",

		// background: 'red',

		flexGrow: 1,
		gap: 12,

		/** all Links from react-router-dom are a tags
		 * Link has a icon and span (text) inside
		 */
		a: {
			textDecoration: "none",

			color: "black",
			fontSize: "1.25rem",
			fontWeight: "600",

			padding: "1px 5px",
			borderRadius: "2px",

			".icon": {
				fontSize: "1rem",
				paddingBottom: "1px",
			},

			/* do not use directly spans like this, use classname instead */
			".link_text": {
				marginLeft: "10px",
				display: tablet ? "none" : "inline",
			},

			...(tablet && {
				textAlign: "center",
			}),
		},
	})
);

export const Navbar_Contain = styled.div(({ theme: {} }) => ({}));

export const Navbar_Contai = styled.div(({ theme: {} }) => ({}));

export const Navbar_Conta = styled.div(({ theme: {} }) => ({}));
