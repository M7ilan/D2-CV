import Link from "next/link";

export default function page() {
	return (
		<>
			<div className="flex justify-center">
				<Link className="font-bold text-4xl bg-OpenColor-gray-2 pad" href="https://www.bungie.net/en/OAuth/Authorize?client_id=45123&response_type=code">
					Auth
				</Link>
			</div>
		</>
	);
}
