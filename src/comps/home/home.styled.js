/* eslint-disable */
import styled from "styled-components";
// import { motion } from "framer-motion";

// export const Project_Content = styled.div(({ theme: {} }) => ({}));
// export const Project_Content = styled(motion.div)(({ theme: {} }) => ({}));

export const Home_Container = styled.div(({ theme: {} }) => ({
	width: "100%",
	height: "100%",

	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	alignItems: "center",

	// background: "red",
}));

export const Center_Section = styled.div(({ theme: {} }) => ({
	width: "100%",
	height: "100%",

    marginRight: "10px",

    background: "#1a2730",
    
    borderRadius: "10px",
    padding: "1rem 20px 1rem 20px",
  


}));

export const Right_Section = styled.div(({ theme: {} }) => ({
	maxWidth: "23rem",
	width: "100%",
    height: "100%",



   
    background: "#1a2730",

    borderRadius: "10px",
    padding: "1rem 20px 1rem 20px",

}));
