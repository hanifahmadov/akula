/* eslint-disable */
import styled from "styled-components";
// import { motion } from "framer-motion";

// export const Project_Content = styled.div(({ theme: {} }) => ({}));

// export const Project_Content = styled(motion.div)(({ theme: {} }) => ({}));

// import spc from "./images/spc1.jpg";

export const Home_Container = styled.div(({ theme: {} }) => ({
	/** home is rendering in inside MainLayout the right column, Home.js parent is MainLayout right column and its scrollable.
	 * 	if Home gets overflows, theen its parent will be scrollable, in this case whole Home page will be scroll up-down.
	 * 	make the Home.js right section, accoutn section sticky to keep at the top right corner.
	 *
	 * home has 2 column, left and right, Left is for the content and right is for the account
	 * despite of the height 100%, its not visible, as long as there is an elements, you can check by changing the % to rem.
	 */
	width: "100%",
	height: "100%",

	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",

	/** Home.js left column - for the Posts and Content */

	/** Home.js right column - for the signedUser Account */
	".home_left_column": {
		/**
		 * so, the left section grow is 1, and when text it large, it shriks the both sides left and right side down
		 * to their minimum px. No worry, the center column, or homejs left column will have a main child to have a secific with.
		 * i can not be grow all the way left and right at all.
		 */

		/* this section will be added a lot of posts and it will be overflow, no idea why its 100vh, comment it out later */
		flexGrow: 1,

		// background: "blue",

		display: "flex",
		alignItems: "center",
		justifyContent: "center",

		overflowY: "auto", // Ensure content inside can scroll
		paddingTop: "20px",
		paddingBottom: "40px",

		".fixed_width": {
			width: "40rem",
			height: "200rem",


			// background: 'gray',

		},
	},

	/** Home.js right column - for the signedUser Account */
	".home_right_column": {
		/** the other navbar elements can be shrink down to 148px like minWidth: "148px".
		 * 	keep this one for now 100% then re-arrange it later if needed.
		 *
		 * but make the height 100vh to make it sticky.
		 *
		 * actually on the right side there will be 2 divs, account and other-users, make the account element sticky only.
		 * OK.
		 *
		 * so, the left section grow is 1, and when text it large, it shriks the both sides left and right side down
		 * to their minimum px. No worry, the center column, or homejs left column will have a main child to have a secific with.
		 * i can not be grow all the way left and right at all. for now, keep minWidth 21.
		 *
		 */

		width: "21rem",

		height: "100svh",

		borderLeft: ".1px solid black",

		position: "sticky",
		top: 0,

		/* Account renders here*/
		".top_row_presents_account": {
			width: "100%",

			display: "flex",
			justifyContent: "center",
			alignItems: "center",

			padding: "20px 0px",
		},

		/* AllUsers  renders here */
		".bottom_row_presents_allusers": {},
	},
}));



// export const Project_Content = styled.div(({ theme: {} }) => ({}));
// export const Project_Content = styled.div(({ theme: {} }) => ({}));
