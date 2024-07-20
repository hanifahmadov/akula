/* NPM */
import React, { useState, useRef, useEffect } from "react";
import { useRecoilState, useResetRecoilState, useRecoilValue } from "recoil";

// STYLED
import { Main_Container } from "./main.styled";

export const Main = () => {
	return (
		<Main_Container className='main_container'>
			<div>AKULA</div>
		</Main_Container>
	);
};
