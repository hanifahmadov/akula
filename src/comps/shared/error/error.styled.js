/* eslint-disable */
import styled from "styled-components";
import { clr, ff } from "../stores/design";

export const ErrorContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	color: white;

	${({ theme }) => console.log(theme)};

	.error-content-container {
		backdrop-filter: sepia(10%);
		padding: ${({ theme }) => (theme.device.mobile ? "1rem" : "2rem 5rem")};

		h1 {
			font-size: ${({ theme }) =>
				theme.device.mobile ? "3rem" : "8rem"};
			font-weight: 800;
			letter-spacing: 10px;
		}

		h5 {
			font-weight: 800;
			text-decoration: ;

			.sorry-face {
				display: inline-block;
				margin: 0rem .5rem;
			}
		}

		.error-img {
			// border-bottom: 2px solid #1571fd;
			width: fit-content;

			a {
				// text-decoration: underline;
				// text-decoration-color: white;
				// text-decoration-thickness: 2px;
				// text-underline-offset: 5px;
				text-decoration: none;
				color: black;
				font-weight: 700;
				background: white;
				padding: 2px 5px;
				border-radius: 5px;
				text-align: center;
				font-family: ${ff.opensans};
				font-size: 1.1rem;
				letter-spacing: .5px;
				transition: all .15s ease-in-out;

				&:hover {
					background: #c8c8c8;
				}


			}

			span {
	
				display: inline-block;
				padding-right: 5px;

				font-size: 1.8rem;

				position: relative;
				bottom: -3px;
				margin-right: 5px;

				img {
					filter: opacity(70%);
					
				}
			}
		}
	}
`;
