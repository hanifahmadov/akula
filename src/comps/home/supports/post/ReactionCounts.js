import React from "react";

export const ReactionCounts = () => {
	/** process the likes
	 * we can set the counts directly, like likes.length.
	 * so, the post can have 1 or 100 likes how to control and get these data
	 *
	 * solution for now
	 * 1. loop the likes and group them based on their reaction type
	 * 2. iterate the groups and present the detailed info
	 */
	const [heart, setHeart] = useState([]);
	const [smile, setSmile] = useState([]);
	const [dislike, setDislike] = useState([]);

	useEffect(() => {
		/** these values are local and every time this useEffect runs (wehn likes gets updated on Homejs useEffect )
		 * 	these arrays defines empty, cause new updated likes need to be stored. cant over loaded the new one to old one
		 * 	important!
		 * */
		let newHeart = [];
		let newSmile = [];
		let newDislike = [];

		/* loops the new likes array and group them based on their reaction */
		likes.map((like) => {
			if (like.reaction == "heart") {
				newHeart.push(like);
			}

			if (like.reaction == "smile") {
				newSmile.push(like);
			}

			if (like.reaction == "dislike") {
				newDislike.push(like);
			}
		});

		/* set the final values as a result */
		setHeart(newHeart);
		setSmile(newSmile);
		setDislike(newDislike);

		console.log(heart, smile, dislike);
	}, [likes]);

	return (
		<ReactionCounts_Container>
			<Heart_Container className='heart_container' $heart={heart}>
				<div className='heart_icon'>❤️</div>
				<div className='heart_number' onClick={() => setHeartList((heartList) => !heartList)}>
					{heart.length}
				</div>
				{heartList && <div className='heart_list users_list'></div>}
			</Heart_Container>

			<Smile_Container className='smile_container' $smile={smile}>
				<div className='smile_icon'>😂</div>
				<div className='smile_number'>{smile.length}</div>
			</Smile_Container>

			<Dislike_Container className='dislike_container' $dislike={dislike}>
				<div className='dislike_icon'>👎</div>
				<div className='dislike_number'>{dislike.length}</div>
			</Dislike_Container>
		</ReactionCounts_Container>
	);
};
