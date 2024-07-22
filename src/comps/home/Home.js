import React from "react";

/* STYLED */
import { Home_Container, Center_Section, Right_Section } from "./home.styled";

/* COMPS */
import { Account } from "../auth/account/Account";

export const Home = () => {
	return (
		<Home_Container className='home'>
			<Center_Section className='center_section'>

            </Center_Section>

			<Right_Section className='center_section'>
				{/* top account info  */}
                <section className="account_section">
                    <Account/>
                </section>

				{/* other users top account info  */}
                <section className="allusers_section"></section>
			</Right_Section>
		</Home_Container>
	);
};
