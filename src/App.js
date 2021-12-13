import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Modal from "./components/Modal";

function App() {
  return (
    <main>
      <div className="container">
        <Header/>      
        <Routes>
          <Route path="/" element={<Home />} />         
        </Routes>
      </div>
      <Modal/>
    </main>   
  );
}

export default App;




