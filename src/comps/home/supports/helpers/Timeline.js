import React from "react";

import TimeAgo from "../post/timeAgoConfig"; // Import the configured TimeAgo

export const Timeline = ({ createdAt, size, height, width, fontSize, padding, margin, color, fontWeight }) => {
	const timeAgo = new TimeAgo("en-US");
	return (
		<div style={{ height, width, fontSize, padding, margin, color, fontWeight }}>
			{timeAgo.format(new Date(createdAt), size)}
		</div>
	);
};

// height: height, width: width, fontSize: fontSize, padding: padding, margin: margin, color: color
