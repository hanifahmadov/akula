// NPM
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { produce } from "immer";

//  APIS & STYLED & STATE
import apiUrl from "../../../apis/apiUrl";
import { userDefault } from "../shared/store/states";
import { signinApi } from "../../../apis/apiCalls";
import { Signin_Container, Form } from "./styled/signin.styled";

// COMPS
import { Credential } from "../shared/credential/Credential";

export const Signin = () => {
	const [user, setUser] = useRecoilState(userDefault);
	const [email, setEmail] = useState("");
	const [pwd, setPwd] = useState("");

	// const [remember, setRemember] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(" FORM SUMBITTED", "email:", email.length, "pwd: ", pwd);

		signinApi({ email, password: pwd, remember: false })
			.then((res) => {
				// user gets fetched
				const { user } = res.data;

				setUser(user); // seting global state
				navigate("/"); // navigate to main "/"
			})
			.catch((err) => {
				console.log("ERROR", err);
			});
	};
	return (
		<Signin_Container className='signin'>
			<section className='signin_section'>
				<header>
					<h3>LOGIN</h3>
				</header>

				<Form className='signinform' onSubmit={handleSubmit}>
					<Credential type={"email"} val={email} setVal={setEmail} />
					<Credential type={"password"} val={pwd} setVal={setPwd} />

					<button>Submit</button>

					<footer>
						<p>Dont have an account ? </p>
						<p className='link' onClick={() => navigate("/signup")}>
							SIGN UP
						</p>
					</footer>
				</Form>
			</section>
		</Signin_Container>
	);
};
