import "./App.css";
import ChatContainer from "./Components/ChatPage/ChatContainer";
import UsersContainer from "./Components/Users/UsersContainer";

function App() {
  return (
    <div className="appWrapper">
      <UsersContainer />
      <ChatContainer />
    </div>
  );
}

export default App;
