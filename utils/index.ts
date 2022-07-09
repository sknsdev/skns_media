import axios from "axios";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const createOrGetUser = async (response: any) => {

	//Note: I honestly stole it from the internet and have no idea what it is (I understand the idea of jwt, but this decode is a mystery to me)

	var base64Url = response.credential.split(".")[1];
	var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
	var jsonPayload = decodeURIComponent(
		atob(base64)
			.split("")
			.map(function (c) {
				return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
			})
			.join("")
	);

	//---------------------
	const { email, picture, sub, given_name, family_name } = JSON.parse(jsonPayload);

	const user = {
		_id: sub,
		_type: "user",
		userName: email.substring(0, email.indexOf('@')),
		name: given_name,
		secondName: family_name,
		image: picture,
	};

	// addUser(user);

	await axios.post(`${BASE_URL}/api/auth`, user);
	// await axios.post(`http://localhost:3000/api/auth`, user);
};
