import React from "react";

import { Post_Header_Container } from "./post.styled";

/* HELPER COMPS */
import TimeAgo from "./timeAgoConfig"; // Import the configured TimeAgo
import { Fontawesome } from "../fontawesome/Fontawesome";

export const Post_Header = ({ createdAt, username, avatar }) => {
	// Create an instance of TimeAgo
	const timeAgo = new TimeAgo("en-US");

	return (
		<Post_Header_Container>
			{/* COLUMN 1 */}
			<div className='post_column_one'>
				<img src={avatar} />
			</div>

			{/* COLUMN 2 */}
			<div className='post_column_two'>
				{/* ROW TOP */}
				<div className='header_top_row'>
					<span className='username'>{username}</span>
					<Fontawesome type='faCircleCheck' color={"#005eff"} paddingLeft={"5px"} fontSize={"14px"} />
				</div>

				{/* ROW BOTTOM */}
				<div className='header_bottom_row'>
					<span className='timeline'>{timeAgo.format(new Date(createdAt))}</span>
					<span className='faEarthAmericas'>
						<Fontawesome
							type='faEarthAmericas'
							paddingLeft={"3px"}
							marginBottom={"0px"}
							fontSize={"10px"}
						/>
					</span>
				</div>
			</div>
		</Post_Header_Container>
	);
};
