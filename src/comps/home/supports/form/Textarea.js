import React, { useRef, useEffect } from "react";

/* STYLED */
import { Textarea_Container } from "./store.styled";

/* HELPER */
import { Fontawesome } from "../fontawesome/Fontawesome";

export const Textarea = ({
	text,
	setText,
	fontSize,
	padding,
	maxHeight,
	borderRadius,
	height,
	owner,
	displayButton,
	setDisplayButton,
}) => {
	const textareaRef = useRef(null);

	/**
	 *  text area input height adjustment
	 * 	use Effect is part of this shit
	 */
	const handleChange = (event) => {
		setText(event.target.value);
		adjustTextareaHeight();
	};

	const adjustTextareaHeight = () => {
		if (textareaRef.current) {
			textareaRef.current.style.height = "auto"; // Reset height to auto to shrink if necessary
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set height to scrollHeight
		}
	};

	/** when textarea value text changes, this arrange the height of textarea */
	useEffect(() => {
		adjustTextareaHeight(); // Adjust height on initial render
	}, [text]); // Adjust height on every text change

	return (
		<Textarea_Container $fontSize={fontSize} $padding={padding} $maxHeight={maxHeight} $borderRadius={borderRadius}>
			<textarea
				className='textarea'
				ref={textareaRef}
				value={text}
				onChange={handleChange}
				placeholder='Whats going on...'
				rows={height ? height : 2}
				onFocus={() => {
					owner === "addComment" && setDisplayButton(true);
				}}
			/>

		</Textarea_Container>
	);
};
