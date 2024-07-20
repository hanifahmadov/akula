/* eslint-disable */
import React, { useRef } from "react";
import { toast } from "react-toastify";
import { CustomToaster } from "./CustomToaster";

export const useNotify = () => {
	const toastRef = useRef();

	// notify can be called & run inside any component
	const notify = (title, body1, body2 = "") => {
		return (toastRef.current = toast(
			<CustomToaster title={title} body1={body1} body2={body2} />,
			{
				position: "top-right",
				autoClose: 4000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			}
		));
	};

	const dismiss = () => toast.dismiss(toastRef.current);

	return { alert: notify, dismiss };
};
