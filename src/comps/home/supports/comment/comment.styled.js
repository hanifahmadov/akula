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
			display: "flex",
			justifyContent: "flex-start",
			flexDirection: "column",

			padding: "0px 5px",
			width: '100%',

			".comment_body_row_top": {
				width: "100%",
				background: "rgba(0, 0, 0, .05)",
				padding: "2px 15px 4px 12px",

				borderRadius: "10px",

				".username": {
					fontWeight: "500",
					lineHeight: "16px",
					fontSize: ".9rem",

					display: "flex",

					".mentioned_block": {
						".replied": {
							marginLeft: "5px",
							fontSize: ".7rem",
						},
						".mentioned": {
							fontSize: ".9rem",
							color: "#0a58ca",
						},
					},
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
					gap: "8px",

					marginTop: "3px",
					marginLeft: "8px",

					".like_button, .reply_button": {
						cursor: "pointer",
						position: "relative",
					},
				},

				".comment_like_counts": {
					display: "flex",
					gap: "5px",
					marginLeft: "50px",

					span: {
						fontSize: "12px",
						marginLeft: "3px",
						fontWeight: "600",
					},
				},
			},

			".addReply_container": {
				display: "flex",
				margin: "8px 0px",

				width: "100%",

				".addReply_avatar_column": {
					img: {
						height: "2rem",
						width: "2rem",
						borderRadius: "50%",
						border: "1px solid rgba(0, 0, 0, 0.1)",
						alignSelf: "flex-start",
					},
				},

				".addReply_post_column": {
					width: "100%",

					".addReply_post_column_top_row": {
						width: "100%",
						padding: "0px 3px",

						".addReplySendButton_wrapper": {
							// textAlign: "end",

							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",

							height: "0px",

							position: "relative",
							bottom: "12px",
							padding: "2px 15px",

							background: "transparent",

							".replying_to_wrapper": {
								fontSize: ".775rem",
								marginLeft: "5px",

								lineHeight: "0px",
								color: "rgba(0, 0, 0, .4)",
								fontWeight: "500",

								".replying_to": {
									background: "#bfd3e080",
									padding: "0px 5px",
									borderRadius: "5px",
									fontWeight: "600",
									color: "rgba(0, 0, 0, .8)",
								},
							},

							".addReplySendButton": {
								display: "flex",
								justifyContent: "center",
								alignItems: "center",

								width: "15px",
								height: "15px",

								paddingLeft: "1px",

								background: "#003888",
								color: "white",
								fontSize: ".75rem",
								borderRadius: "50%",

								cursor: "pointer",
								transition: "all .2s ease-in-out",

								"&:hover": {
									background: "black",
								},
							},
						},
					},
				},
			},
		},
	};
});
