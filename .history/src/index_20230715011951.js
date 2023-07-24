import React from "react"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import "../src/assets/css/styles.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<Provider store={store}>
		<App />
	</Provider>
)
