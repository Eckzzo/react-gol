import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import React from "react";
import { RecoilRoot } from "recoil";

const container = document.getElementById("root");
if (!container) throw new Error("Root not found");
const root = ReactDOM.createRoot(container);
root.render(
	<RecoilRoot>
		<App />
	</RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
