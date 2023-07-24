import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { routes } from "./routes"
import MenuWrapper from "./components/Header/libs/MenuWrapper"

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				{routes.map((route) => (
					<Route key={route.path} exact path={route.path} element={route.component} />
				))}
			</Routes>
		</Router>
	)
}

export default App
