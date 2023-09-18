import "@styles/globals.css";

export const metadata = {
	title: "Destiny 2 CV",
	description: "Destiny 2 CV Description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<body className="bg-OpenColor-gray-0 text-OpenColor-gray-7">
				<main className="mt-16">{children}</main>
			</body>
		</html>
	);
}
