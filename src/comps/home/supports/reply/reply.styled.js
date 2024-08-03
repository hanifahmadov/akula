import styled from "styled-components";

export const Reply_Container = styled.div(({ theme: {} }) => {
	return {
		display: "flex",
		justifyContent: "flex-start",
        marginTop:'5px',


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
