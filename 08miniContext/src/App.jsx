import "./App.css";
import UserContextProvider from "./context/userContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1>React Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
