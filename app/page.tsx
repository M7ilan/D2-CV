"use client";

import getAuthTokens from "@libs/getAuthTokens";
import Link from "next/link";

export default async function page({ searchParams }: { searchParams: any }) {
	const code = searchParams.code;
	let tokens;
	if (code) {
		tokens = await getAuthTokens(code);
		window.history.replaceState({}, document.title, "/");
		window.location.reload();
	}

	return (
		<>
			<div className="flex flex-col justify-center items-center gap-4">
				<Link className="font-bold text-4xl bg-OpenColor-gray-2 pad" href={`https://www.bungie.net/en/OAuth/Authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&response_type=code`}>
					Auth
				</Link>
				<div>Code: {String(Boolean(code))}</div>
				<div>{JSON.stringify(tokens)}</div>
				<div></div>
			</div>
		</>
	);
}
