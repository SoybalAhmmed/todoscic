
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import AddTask from './Pages/AddTask';
import Todo from './Pages/Todo';
import Completed from './Pages/Completed';
import NotFound from './Pages/NotFound';
import UpdateUser from './Pages/UpdateUser';
import Footer from './Pages/Shared/Footer';
import Calendar from './Pages/Calendar';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addtask" element={<AddTask />} />
        <Route path="todo" element={<Todo />} />
        <Route path="completed" element={<Completed />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="/update/:id" element={<UpdateUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
