import styled from "styled-components";

export const Avatar_Container = styled.div(({ theme }) => ({
	width: "100%",
	height: "100%",

	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",

	// header: {
	// 	width: "100%",
	// 	fontWeight: 600,
	// 	fontSize: "0.9rem",
	// 	textAlign: "center",
	// 	marginBottom: "5px",
	// },

	".content": {
		width: "100%",
		height: "100%",

		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		alignItems: "center",

		".img_wrapper": {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",

			border: "10px solid #ffffff20",
			boxShadow: "0px 25px 80px rgba(0, 0, 0, 0.15)",
			overflow: "hidden",
			borderRadius: "50%",

			img: {
				height: "9rem",
				width: "9rem",
			},
		},

		".upload_wrapper": {
			width: "6rem",

			fontSize: "0.9rem",
			fontWeight: "600",
			textAlign: "center",
			padding: "2px",
			marginTop: "5px",

			background: "#02569950",
			color: "white",

			border: "2px solid #ffffff30",
			boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
			overflow: "hidden",
			borderRadius: "5px",

			label: {
				cursor: "pointer",
			},

			"&:hover": {
				background: "#02569990",
			},
		},
	},

	// Additional theme-specific styles can go here
	...(theme.device.mobile && {}),
}));
