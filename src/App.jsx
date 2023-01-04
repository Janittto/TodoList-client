import { Routes, Route } from "react-router-dom"
import NavMain from "./components/Nav/NavMain"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import Todo from "./pages/Todo"
import OneList from "./pages/OneList"
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute"
import LoggedOut from "./components/LoggedOut/LoggedOut"

function App() {
	return (
		<div className="App">
			<NavMain />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route element={<LoggedOut />}>
					<Route path="/signin" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
				</Route>
				<Route element={<PrivateRoute />}>
					{/* All routes after the PrivateRoute require the user to be loggedIn */}
					<Route path="/profile" element={<Profile />} />
					<Route path="/todo" element={<Todo />} />
					<Route path="/todo/:id" element={<OneList />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
