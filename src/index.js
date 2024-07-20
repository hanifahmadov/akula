/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { App } from "./App";
import { StyleSheetManager } from "styled-components";
import { RecoilRoot } from "recoil";

/**
 *
 *  StyleSheetManager, CustomStyleSheetManager
 * 	are to avoid $value or $ while passing arg to styled-components
 *
 */
const CustomStyleSheetManager = (props) => (
	<StyleSheetManager shouldForwardProp={(prop) => prop !== "comp"}>
		{props.children}
	</StyleSheetManager>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<CustomStyleSheetManager>
		<RecoilRoot>
			<App />
		</RecoilRoot>
	</CustomStyleSheetManager>
);
