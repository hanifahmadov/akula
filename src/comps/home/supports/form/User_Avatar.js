import React from "react";

/* STYLED */
import { User_Avatar_Container } from "./store.styled";

export const User_Avatar = ({ avatar, width, height }) => {
	return (
		<User_Avatar_Container
			className='user_avatar_container'
			$width={width}
			$height={height}
		>
			<img src={avatar} alt='user_avatar' />
		</User_Avatar_Container>
	);
};
