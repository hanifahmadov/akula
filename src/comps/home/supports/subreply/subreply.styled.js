import styled from "styled-components";


export const SubReply_Container = styled.div(({ theme: {} }) => {
    return {
        display: "flex",
		justifyContent: "flex-start",
        marginTop:'8px',


		".subreply_content_and_timeline_column_right": {
			display: "flex",
			justifyContent: "flex-start",
			flexDirection: "column",

			width: "100%",
			padding: "0px 5px",

			".subreply_main_controller_container": {
				/* important */
				width: "fit-content",
			},
		},
    }
});