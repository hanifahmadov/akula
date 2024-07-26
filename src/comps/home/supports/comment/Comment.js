import React from "react";
import OutsideClickHandler from "react-outside-click-handler";

/* STYLED COMPONENTS */
import { Comment_Container, Comment_Header, Comment_Body } from "./comment.styled";

export const Comment = (
	/** commentOpen passed through Postjs section that triggers the display non or auto inside Comment Container */
	{
		commentOpen,
		setCommentOpen,
		post: {
			owner: { username, avatar },
		},
	}
) => {
	const handleOutsideClick = (e) => {
		setCommentOpen(false);
		console.log("clicked outside");
	};

	return (
		<Comment_Container $commentOpen={commentOpen}>
			{/** when user click outside the white box in the middle, comment contaienr will get displyed none.
			 * by the way, if no disabled option, the outside box stays clickable no matter of display none section.
			 * so, when no comment button, it disabled the outside click option
			 */}
			<OutsideClickHandler onOutsideClick={handleOutsideClick} disabled={!commentOpen}>
				{/**building the same post here again with the post that been passed from the parent.
				 * thus is comment content container that is the showing the post detailes,
				 * comment_container is a backdrop in here.
				 *
				 */}

				<div className='comment_content_container'>
					<Comment_Header>
						<div className='headeer'>{username.toUpperCase()}'S &nbsp; POST</div>
					</Comment_Header>

					<Comment_Body>
						<section className='postowner_avatar_section'>
							<img src={avatar} />
						</section>
					</Comment_Body>

					{/* <Comment_Footer></Comment_Footer> */}
				</div>
			</OutsideClickHandler>
		</Comment_Container>
	);
};
