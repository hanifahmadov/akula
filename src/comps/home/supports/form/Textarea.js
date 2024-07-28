import React from "react";

import { Textarea_Container } from "./form.styled";

export const Textarea = () => {
	return (
		<Textarea_Container>
			<textarea
				className='textarea'
				ref={textareaRef}
				value={text}
				onChange={handleChange}
				placeholder='Whats going on...'
				rows={1} // Start with one row
			/>
		</Textarea_Container>
	);
};
