/* NPM PACKAGES IMPORTS */
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

/* FONTAWESOME LIBRARY ADDING TO SETUP */
library.add(faHeart);

/* GLOBAL STATES IMPORTS  */
/**
 * likeType will trigger to get all posts useHooks inside Homejs comps line 96.
 * this is bad idea, read the comment all the below but its what its now, will change it later.
 *
 * signedUser accessToken needed for the likePostAPI
 **/
import { likeTypeDefault, userDefault } from "../../../auth/shared/store/states";

/* STYLED COMPONENTS */
import { Popover_Container } from "./popover.styled";

/* APIs */
import { likePostAPI } from "../../../../apis/apiCalls";

/** Popover  Component */
export const Popover = ({ popoverOpen, setPopoverOpen, postId }) => {
	/*  getting global state likeType */
	const [likeType, setLikeType] = useRecoilState(likeTypeDefault);

	/* pulling the signedUser from global state */
	const signedUser = useRecoilValue(userDefault);

	/**
	 * we do also need the post id which the user just liked. likepostAPI will take 3 args
	 * signedUser accessToken, likeType and postId. PostId is not a global state so that we need to pass
	 * that id through props to this component.
	 */

	// setPopoverOpen((popoverOpen) => !popoverOpen);


	/* click handler - when like type select or click  */
	const handlePopoverClick = (e) => {
		/** Getting className of clicked likeType here */
		const classname = e.target.className;

		/**
		 * 	now we know the like type and we can update the post on server/database here.
		 * 	like post API takes 3 args that userToken, the postId and likeType.
		 * */
		likePostAPI({ accessToken: signedUser.accessToken, postId, likeType: classname })
			.then((res) => {
				/** when success,then will work and will get the result of success, just a text not the updated object.  
				 * 	again, for now i am getting just a success text here but //# in the nearest future
				 * 	we have to find a way how to get the current post updated only here, so after that 
				 * 	we dont need to re-render all posts again by changig global state likeType to trigger useEffect on Homejs.
				 * 	extra work and useless recalls no needed!
				 * */ 
				console.log("res inside like click", res);

			})
			.catch((err) => {
				/** catch the error here */
				console.log("error inside popover click", err);
			});

		/* set the global state likeType to this classname */
		/* ass I know useRecoilState values can not be changing like this but I will try */
		// setLikeType((likeType) => {
		// 	likeType = className;
		// 	return likeType;
		// });
	};
	return (
		<Popover_Container $popoverOpen={popoverOpen} onClick={handlePopoverClick}>
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
