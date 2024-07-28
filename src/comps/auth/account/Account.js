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

			<Content_Section>
				<span className='username'>{signedUser.username}</span>
				<span className='emailAddress'>{signedUser.email}</span>

				<div className='subscribers'>
					<span className='following'>
						<span className='numbers'>134</span>
						<br />
						<span>Following</span>
					</span>

					<span className='middle_line' />
					<span className='followers'>
						<span className='numbers'>91</span>
						<br />
						<span>Followers</span>
					</span>
				</div>

                <div className="settings_block">
                    
                    <div className="settings_button">Settings</div>
                </div>
			</Content_Section>
		</Account_Container>
	);
};
