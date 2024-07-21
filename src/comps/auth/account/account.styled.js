/* eslint-disable */
import styled from "styled-components";

// import { motion } from "framer-motion";
// export const Project_Content = styled.div(({ theme: {} }) => ({}));

export const Account_Container = styled.div(({ theme: {} }) => ({
	height: "100%",
	width: "100%",

	display: "flex",
	flexDirection: "column",
}));

export const Logo_Section = styled.div(({ theme: {} }) => ({

    height: '7rem',
    width: "100%",

    textAlign: 'center',


    position: 'relative',



	img: {
		height: "8rem",
		width: "8rem",
        position: 'absolute',
        left: '100px',
        bottom: '-50px',
        borderRadius: '50%',


	},
}));

export const Content_Section = styled.div(({ theme: {} }) => ({
	width: "100%",
}));
