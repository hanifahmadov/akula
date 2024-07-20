/* eslint-disable */
import { io } from "socket.io-client";
import apiUrl from "./apiUrl";
import chalk from "chalk";

export const socketUrl = (user, resetRooms, socket) => {
	socket = io(apiUrl, {
		// Disable autoConnect to have more control over headers
		extraHeaders: {
			Authorization: `Bearer ${user.accessToken}`,
		},
	});

	socket.on("connect_error", (err) => {
		console.log(chalk.red("connect_error"));
		console.log(err);

		console.log("resetRooms called");
		resetRooms();
		// setSocketConnection(false);
	});

	socket.on("connect_failed", (err) => {
		console.log(chalk.red("connect_failed"));
		console.log(err);

		console.log("resetRooms called");
		resetRooms();
		// setSocketConnection(false);
	});

	socket.on("disconnect", (err) => {
		console.log(chalk.red("disconnect"));
		console.log(err);

		console.log("resetRooms called");
		resetRooms();
		// setSocketConnection(false);
	});

	socket.on("error", function (err) {
		console.log(chalk.red("error"));
		console.log(err);
	});

	return socket;
};
