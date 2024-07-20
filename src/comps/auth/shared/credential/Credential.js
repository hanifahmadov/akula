import React, { useState } from "react";

/* STYLED */
import { Credential_Container } from "./credential.styled";

export const Credential = ({ type, val, setVal, reenter }) => {
	return (
		<Credential_Container className={type + "_container"}>
			<input
				type={type}
				className={type}
				placeholder={
					(type == "email" && "Email address") ||
					(reenter && "Confirm Password") ||
					(type == "password" && "Password")
				}
				autoComplete='true'
				value={val}
				onChange={(e) => setVal(e.target.value)}
			/>
		</Credential_Container>
	);
};

// onFocus={() =>  } when element on focus
// onBlur={() => } when focus leaves the element
