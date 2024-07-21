import React, { useState } from "react";
import { useRecoilValue } from "recoil";

/* STYLED */
import { Account_Container, Logo_Section, Content_Section } from "./account.styled";

/* STATES */
import { userDefault } from "../shared/store/states";

export const Account = () => {
	const signedUser = useRecoilValue(userDefault);

	return (
		<Account_Container>
			<Logo_Section>
				<img src={signedUser.avatar} />
			</Logo_Section>

			<Content_Section></Content_Section>
		</Account_Container>
	);
};
