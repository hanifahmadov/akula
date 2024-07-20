// /* eslint-disable */
// import React from "react";
// import { ChangePasswordContainer } from "./auth.styled";
// import "animate.css";

// import timerLogo from "../../shared/logos/timer3.png";
// import infoLogo from "../../shared/logos/info1.png";

// export const ChangePassword = () => {
// 	return (
// 		<ChangePasswordContainer className='change_password'>
// 			<h1>CHANGE PASSWORD</h1>

// 			<div className='content'>
// 				<h5 className='content-header'>Email address</h5>
// 				<p className='content-body'>
// 					Enter the email associated with your account to change your
// 					password.{" "}
// 				</p>
// 			</div>

// 			<form>
// 				<div className='form username'>
// 					<input
// 						type='text'
// 						name='u'
// 						placeholder='Email address'
// 						required='required'
// 						autoComplete='off'
// 					/>
// 				</div>

// 				<button
// 					type='button'
// 					className='btn btn-primary btn-block btn-large'
// 				>
// 					SEND RESET LINK
// 				</button>
// 			</form>

// 			<div className='info'>
// 				<p className='info_logo'>
// 					<img src={infoLogo} className=' animate__animated animate__bounce animate__delay-1s animate__repeat-3'/>

// 				</p>
// 				<p className='info_text'>
// 					<span style={{ display: "none" }}>
// 						You will receive the <span id='sent_link'>link</span> via email shortly.
// 					</span>
// 					<span style={{ display: "block" }}>
// 						The <span id='sent_link'>reset link</span> will expire in
// 						10 minutes.
// 					</span>
// 				</p>
// 			</div>
// 		</ChangePasswordContainer>
// 	);
// };
