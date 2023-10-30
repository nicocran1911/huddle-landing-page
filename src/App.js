import ChatImage from "./components/ChatImage";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

function App() {
  return (
    <div className="lg:bg-[url('./images/bg-desktop.svg')] bg-purple-700 bg-[url('./images/bg-mobile.svg')] bg-no-repeat lg:bg-center bg-contain">
      <Navbar />
      <div className="lg:flex">
        <ChatImage className="ml-10" />
        <Register />
      </div>
    </div>
  );
}

export default App;
