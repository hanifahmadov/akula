/* NPM PACKAGES IMPORTS */
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
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
import { likeCommentAPI, likePostAPI, likeReplyAPI } from "../../../../apis/apiCalls";
import { Fontawesome } from "../fontawesome/Fontawesome";

/** Popover  Component */
export const Popover = ({
	popoverOpen,
	setPopoverOpen,
	postId,
	commentId,
	likes,
	replyId,
	left,
	right,
	top,
	bottom,
}) => {
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

	/* we are handling 3 types of click, liking a Post, liking a Comment, and liking a reply */
	const handlePopoverClick = (e) => {
		/** Getting className of clicked likeType here */
		const classname = e.target.className;

		/* if reactElement is post */
		if (postId) {
			/* react for the post */

			likePostAPI({ accessToken: signedUser.accessToken, postId, likeType: classname })
				.then((res) => {
					/** when success,then will work and will get the result of success, just a text not the updated object.
					 * 	again, for now i am getting just a success text here but //# in the nearest future
					 * 	we have to find a way how to get the current post updated only here, so after that
					 * 	we dont need to re-render all posts again by changig global state likeType to trigger useEffect on Homejs.
					 * 	extra work and useless recalls no needed!
					 * */

					setLikeType((likeType) => !likeType);

					/** also we have to close the popover right after the response */
					setPopoverOpen((popoverOpen) => !popoverOpen);
				})
				.catch((err) => {
					/** catch the error here */
					console.log("error likePostAPI likePostAPI", err);
				});
		}

		if (commentId) {
			likeCommentAPI({ accessToken: signedUser.accessToken, commentId, likeType: classname })
				.then((res) => {
					console.log("likeCommentAPI has run: ");
					setLikeType((likeType) => !likeType);
				})
				.catch((err) => {
					console.log("err comment like", err);
				});
		}

		if (replyId) {
			likeReplyAPI({ accessToken: signedUser.accessToken, postId, commentId, replyId, likeType: classname })
				.then((res) => {
					console.log(res.data);
					console.log("likeReplyAPI has run: ");
					setLikeType((likeType) => !likeType);
				})
				.catch((err) => {
					console.log("err likeReplyAPI", err);
				});
		}
	};

	let alreadyLiked = likes && likes.length && likes.find((like) => like.owner._id == signedUser._id);
	if (!alreadyLiked) alreadyLiked = { reaction: "banana" };

	// console.log(alreadyLiked);

	return (
		<Popover_Container
			$popoverOpen={popoverOpen}
			$left={left}
			$right={right}
			$top={top}
			$bottom={bottom}
			onClick={handlePopoverClick}
		>
			<section className='icons'>
				<div className='heart'>
					<Fontawesome
						type={alreadyLiked?.reaction == "heart" ? "faHeart" : "faRegularHeart"}
						fontSize={"1.1rem"}
						color={alreadyLiked?.reaction == "heart" ? "red" : "white"}
					/>
				</div>
				<div className='smile'>
					<Fontawesome
						type={alreadyLiked?.reaction == "smile" ? "faFaceLaughBeam" : "faFaceLaughBeamRegular"}
						fontSize={"1.1rem"}
						color={alreadyLiked.reaction == "smile" ? "red" : "white"}
					/>
				</div>
				<div className='dislike'>
					<Fontawesome
						type={alreadyLiked?.reaction == "dislike" ? "faThumbsDown" : "faThumbsDownRegular"}
						fontSize={"1.1rem"}
						color={alreadyLiked?.reaction == "dislike" ? "red" : "white"}
					/>
				</div>
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
