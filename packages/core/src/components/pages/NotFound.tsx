import { CSSProperties } from "react";

const mainStyle: CSSProperties = {
	height: "100vh",
	width: "100vw",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	gap: "1rem",
	textAlign: "center",
	fontSize: "1.5rem",
	fontWeight: "bold",
	color: "#555",
};

export const NotFound = () => (
	<div style={mainStyle}>
		<h1>404</h1>
		<p>Page not found</p>
	</div>
);
