import React, { useState, useRef, useEffect } from "react";
import FormData from "form-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faImage, faVideo, faMasksTheater } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faCircleXmark, faImage, faVideo, faMasksTheater);

/* STYLED */
import { Home_Container, Center_Section, Right_Section, Post_Section, Buttons_Section } from "./home.styled";

/* COMPS */
import { Account } from "../auth/account/Account";
import { useRecoilValue } from "recoil";
import { userDefault } from "../auth/shared/store/states";
import { newpostAPI } from "../../apis/apiCalls";

export const Home = () => {
	const signedUser = useRecoilValue(userDefault);
	const [image, setImage] = useState(undefined);

	const [text, setText] = useState("");
	const textareaRef = useRef(null);
	const imageRef = useRef();

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

	const handleImageChange = () => {
		const [file] = imageRef.current?.files;
		setImage(file);
	};

	const handlePostClick = (e) => {

		const data = new FormData();

		data.append("text", text);
		data.append("image", image);

		newpostAPI(signedUser, data)
			.then((res) => {
				console.log("res", res);

				setImage(undefined)
				setText('')
			})
			.catch((err) => {
				console.log("newpostAPI error", err);
			});
	};

	useEffect(() => {
		adjustTextareaHeight(); // Adjust height on initial render
	}, [text]); // Adjust height on every text change

	return (
		<Home_Container className='home'>
			<Center_Section className='center_section'>
				<Post_Section>
					<div className='top_section'>
						<img src={signedUser.avatar} className='signedUser_avatar' />
						<div className='textarea_wrapper'>
							<textarea
								className='textarea'
								ref={textareaRef}
								value={text}
								onChange={handleChange}
								placeholder='Whats going on...'
								rows={1} // Start with one row
							/>
							{image && (
								<div className='image_preview'>
									<img src={URL.createObjectURL(image)} className='selected_image' />
									<span className='faCircleXmark'>
										<FontAwesomeIcon icon={faCircleXmark} onClick={() => setImage(undefined)} />
									</span>
								</div>
							)}
						</div>
					</div>
					<div className='bottom_section'>
						<Buttons_Section className='group_buttons'>
							<div className='select_image'>
								<input
									type='file'
									id='image'
									name='image'
									className='d-none'
									ref={imageRef}
									accept='image/png, image/jpeg, image/jpg'
									onChange={handleImageChange}
								/>
								<label htmlFor='image' className='label image'>
									<FontAwesomeIcon icon={faImage} className='icon image' />
								</label>
							</div>

							<div className='select_video'>
								<label htmlFor='' className='label video'>
									<FontAwesomeIcon icon={faVideo} className='icon video' />
								</label>
							</div>

							<div className='select_poll'>
								<label htmlFor='' className='label poll'>
									<FontAwesomeIcon icon={faMasksTheater} className='icon poll' />
								</label>
							</div>
						</Buttons_Section>

						<div className='post_button_wrapper' onClick={handlePostClick}>
							<button>POST</button>
						</div>
					</div>
				</Post_Section>

				<Display_Section>
					
				</Display_Section>


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
