export default async function getAuthTokens(code: string) {
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: new URLSearchParams({
			grant_type: "authorization_code",
			code: code,
			client_id: process.env.NEXT_PUBLIC_CLIENT_ID as string,
			client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET as string,
		}),
	};

	const res = await fetch("https://www.bungie.net/Platform/App/OAuth/token/", options);
	const data = await res.json();
	if (typeof window !== "undefined") {
		localStorage.setItem("Auth", JSON.stringify(data));
	}
	return data;
}
