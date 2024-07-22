import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormData from "form-data";

/* STYLED & API */
import { signupApi } from "../../../apis/apiCalls";
import { Signup_Container } from "./styled/signup.styled";
import { Form } from "./styled/signin.styled";

/* COMPS */
import { Credential } from "../shared/credential/Credential";
import { Avatar } from "../shared/avatar/Avatar";

/* STATES */

export const Signup = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [pwd, setPwd] = useState("");
	const [avatar, setAvatar] = useState(undefined);
	const [confirmPwd, setConfirmPwd] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		// TODO
		/* helper functions */
		/* add input validation checks */

		const data = new FormData();

		data.append("email", email);
		data.append("password", pwd);
		data.append("passwordConfirmation", confirmPwd);
		data.append("avatar", avatar);




		// TODO 
		// when signing out open modal and delay the rolling circle like 2-3 seccond
		signupApi(data)
			.then((response) => {
			
				console.log(response)
				// TODO
				/*  Notify the user that  */

				setEmail("");
				setPwd("");
				setConfirmPwd("");
				setAvatar(undefined);

				setTimeout(() => {
					navigate("/signin");
				}, 2000);
			})
			.catch((err) => {
				console.log("ERROR");
				console.log(err);
			});
	};
	return (
		<Signup_Container className='signup'>
			<section className='signup_section'>
				<header>
					<Avatar avatar={avatar} setAvatar={setAvatar} />
				</header>

				<Form className='signupform' onSubmit={handleSubmit}>
					<Credential type={"email"} val={email} setVal={setEmail} />
					<Credential type={"password"} val={pwd} setVal={setPwd} />
					<Credential type={"password"} val={confirmPwd} setVal={setConfirmPwd} reenter={true} />

					<button>Submit</button>

					<footer>
						<p>Already has a account ? </p>
						<p className='link' onClick={() => navigate("/signin")}>
							LOGIN
						</p>
					</footer>
				</Form>
			</section>
		</Signup_Container>
	);
};
