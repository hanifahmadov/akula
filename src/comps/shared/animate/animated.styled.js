/* eslint-disable */
import React from "react";
import styled from "styled-components";

export const AnimatedFlasher = styled.span`
	${({ timer, times, delay }) =>
		` 
        @keyframes flickerAnimation {
            0% {
                opacity: 1;
            }
            50% {
                opacity: 0.5;
            }
            100% {
                opacity: 1;
            }
        }
        @-o-keyframes flickerAnimation {
            0% {
                opacity: 1;
            }
            50% {
                opacity: 0.5;
            }
            100% {
                opacity: 1;
            }
        }
        @-moz-keyframes flickerAnimation {
            0% {
                opacity: 1;
            }
            50% {
                opacity: 0.5;
            }
            100% {
                opacity: 1;
            }
        }
        @-webkit-keyframes flickerAnimation {
            0% {
                opacity: 1;
            }
            50% {
                opacity: 0.5;
            }
            100% {
                opacity: 1;
            }
        }

        .animate-flicker {
            -webkit-animation: flickerAnimation 1s ${timer}s;
            -moz-animation: flickerAnimation 1s ${timer}s;
            -o-animation: flickerAnimation 1s ${timer}s;

            animation: flickerAnimation ${timer}s forwards;
            animation-iteration-count: ${times};
            animation-delay: ${delay}s;

        }


    `}
`;
