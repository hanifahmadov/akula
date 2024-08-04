import styled from "styled-components";

export const Reply_Container = styled.div(({ theme: {} }) => {
	return {
		display: "flex",
		justifyContent: "flex-start",
        marginTop:'5px',

		background:'rgb(251, 250, 255)',
		padding:'3px 5px',
		borderRadius:'10px',


		".reply_content_and_timeline_column_right": {
			display: "flex",
			justifyContent: "flex-start",
			flexDirection: "column",

			width: "100%",
			padding: "0px 5px",
			

			".reply_main_controller_container": {
				/* important */
				width: "fit-content",
			},
		},
	};
});


export const SubReplies_Wrapper = styled.div(({ theme: {}, $viewReplies }) => {
	return {
		display: $viewReplies ? "flex" : 'none',
		flexDirection:'column',
		background:'white',
		paddingLeft:'5px',
		borderRadius:'10px'





	};
});
