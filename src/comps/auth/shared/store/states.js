/* eslint-disable */
import { atom } from "recoil";

export const userDefault = atom({
	key: "userDefault",
	default: null,
});

export const activeLinkDefault = atom({
	key: "activeLinkDefault",
	default: 1,
});

export const darkmodeDefault = atom({
	key: "darkmodeDefault",
	default: true,
});

export const deviceDefault = atom({
	key: "deviceDefault",
	default: {
		mobile: null, //: 550
		tablet: null, //: 768,
		laptop: null, //: 1000
		desktop: null, //: 1200
	},
});



export const modalDefault= atom({
	key: "modalStatusDefault",
	default: false,
});



/** likeType support to be change on every like click
 * i keep the assign it on the classname but when user click on the same element and its the same class
 * its doesnt get updated so, now i have to go with true !true mehtod here. i know it doesnt make sense 
 * but for now it seems good to me
 */
export const likeTypeDefault= atom({
	key: "likeTypeDefault",
	default: true,
});


export const messageDefault = atom({
	key: "messageDefault",
	default: {
		messageId: null,
		messageText: null,
		owner: null,
		createdAt: null,
		// reaction: { likes: 0, dis: 0, funny: 0 }
	},
});





// export const roomsDefault = atom({
// 	key: "roomsDefault",
// 	default: [
// 	//: rooms properties
// 	// 	{
// 	// 		id: 8080,
// 	// 		name: "general",
// 	// 		owner: "system",
// 	// 		joinedusers: [],
// 	// 		createdAt: new Date(),
// 	// 		messages: [],
// 	// 	},
// 	],
// });



