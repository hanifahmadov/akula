/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";

export const Comment_Container = styled.div(({ theme: {}, $commentOpen, $isFor }) => {
	return {
		display: "flex",
		justifyContent: "flex-start",

		".comment_content_and_timeline_column_right": {
			display: "flex",
			justifyContent: "flex-start",
			flexDirection: "column",

			width: "fit-content",
			minWidth: "65%",

			padding: "0px 5px",
		},
	};
});
