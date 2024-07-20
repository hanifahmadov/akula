/* eslint-disable */
import React, { useRef } from "react";
import { ToasterContainer } from "./customtoast.styled";
import logoError from "../logos/external/error.png";
import logoSuccess from "../logos/success.png";

export const CustomToaster = ({ title, body1, body2 = "" }) => {
	const selectLogo = (title) => {
		let res = logoError;

		switch (title) {
			case "Success":
				res = logoSuccess;
				2;
				break;
			case "Error":
				res = logoError;
				break;
			default:
				res = logoError;
				break;
		}

		return res;
	};

	return (
		<ToasterContainer>
			<img src={selectLogo(title)} />
			<p>
				<span>{body1}</span>
				<br />
				<span>{body2}</span>
			</p>
		</ToasterContainer>
	);
};
