import React from "react";
import { Popover_Container } from "./popover.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import the specific icon you need
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";

/* FONTAWESOME */
library.add(faHeart);

export const Popover = ({ popoverOpen, setPopoverOpen }) => {
	const handleClick = (e) => {

	}
	return (
		<Popover_Container $popoverOpen={popoverOpen} onClick={handleClick}>
			<section className='icons'>
				{/* <FontAwesomeIcon icon={faHeart} /> */}
				<div className='heart'>❤️</div>
				<div className='smile'>😂</div>
				<div className='dislike'>👎</div>
			</section>
		</Popover_Container>
	);
};

// TODO


/* 

1 -  add background blur to content of likes popover 

2- when page scroll close it

3 - when clicked close it

4 - add animation to heart smile and dislike when they click,
	 use aimatecss lib, already installed,c heck json file

5 - add functionaly & api to update the server abd get the updated value back ??
	not sure about 5, but I think I can use useEffect to retrieve all posts again and updates all
	figure out how 

6- send the to the parent so, like can get updated 

*/
