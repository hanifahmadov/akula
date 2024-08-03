import React from "react";
import { Referral_Container } from "./helpers.styled";

export const Referral = ({ referred }) => {
	return (
		<Referral_Container>
			<div className='replied_to'>replied to</div>

			<div className='referred'>
				<span>@</span>
				{referred}
			</div>
		</Referral_Container>
	);
};
