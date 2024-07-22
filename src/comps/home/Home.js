import React, { useState, useRef, useEffect } from "react";

/* STYLED */
import { Home_Container, Center_Section, Right_Section, Post_Section } from "./home.styled";

/* COMPS */
import { Account } from "../auth/account/Account";
import { useRecoilValue } from "recoil";
import { userDefault } from "../auth/shared/store/states";

export const Home = () => {
	const signedUsed = useRecoilValue(userDefault);

	const [text, setText] = useState("");
	const textareaRef = useRef(null);

	const handleChange = (event) => {
		setText(event.target.value);
		adjustTextareaHeight();
	};

	const adjustTextareaHeight = () => {
		if (textareaRef.current) {
			textareaRef.current.style.height = "auto"; // Reset height to auto to shrink if necessary
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set height to scrollHeight
		}
	};

	useEffect(() => {
		adjustTextareaHeight(); // Adjust height on initial render
	}, [text]); // Adjust height on every text change

	return (
		<Home_Container className='home'>
			<Center_Section className='center_section'>
				<Post_Section>
					<div className='top_section'>
						<img src={signedUsed.avatar} />
						<textarea
							className='textArea'
							ref={textareaRef}
							value={text}
							onChange={handleChange}
							placeholder='Whats going on...'
							rows={1} // Start with one row
						/>
					</div>
					<div className='bottom_section'>

					</div>
				</Post_Section>
			</Center_Section>

			<Right_Section className='center_section'>
				{/* top account info  */}
				<section className='account_section'>
					<Account />
				</section>

				{/* other users top account info  */}
				<section className='allusers_section'></section>
			</Right_Section>
		</Home_Container>
	);
};
