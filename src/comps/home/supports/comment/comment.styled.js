/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";

export const Comment_Container = styled.div(({ theme: {}, $commentOpen, $isFor }) => {
	return {
		display: "flex",
		justifyContent: "flex-start",

		// marginLeft: $isFor == "reply" ? "px" : "0",

		/* has 2 colums, image and texts */
		".comment_column_avatar": {
			img: {
				width: "2.25rem",
				height: "2.25rem",
				borderRadius: "50%",
				border: "2px solid white",
			},
		},

		".comment_column_body": {
			width: "100%",
			display: "flex",
			justifyContent: "flex-start",
			flexDirection: "column",

			padding: "0px 5px",

			".comment_body_row_top": {
				width: "100%",
				background: "white",
				padding: "2px 12px 4px 12px",

				borderRadius: "10px",

				".username": {
					fontWeight: "500",
					fontSize: ".9rem",
				},
				".content": {
					fontSize: ".9rem",
				},
			},

			".comment_body_row_bottom": {
				display: "flex",
				justifyContent: "space-between",

				padding: "0px 3px",

				".timeline_like_reply": {
					fontSize: ".8rem",
					fontWeight: "500",
					display: "flex",
					gap: "12px",

					marginTop: "3px",
					marginLeft: "8px",

					".like_button, .reply_button": {
						cursor: "pointer",
						position: "relative",
					},
				},

				".comment_like_counts": {
					display: "flex",
					gap: "10px",

					span: {
						fontSize: "12px",
						marginLeft: "3px",
						fontWeight: "600",
					},
				},
			},
		},
	};
});
