/* eslint-disable */
import styled from "styled-components";

export const ToasterContainer = styled.div`
	& * {
		padding: 0;
		margin: 0;
        color: black;
	}


	width: 100%;
	height: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: row;

	img {
		width: 2rem;
	}

	p {
        padding-left: 10px;
        font-size: 1rem;
        font-weight: 600;		
	}

	${({theme}) => theme.device.mobile && `
	
		img {
			width: 1rem;
		}

		p {
			padding-left: 10px;
			font-size: .8rem;
			font-weight: 600;	
			letter-spacing: .25px;	
		}
	
	`}


`;
