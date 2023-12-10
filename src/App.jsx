// App.jsx

import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ProjectListPage from "./pages/ProjectListPage";
import CreateProjectPage from "./pages/CreateProjectPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import EditProjectPage from "./pages/EditProjectPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/projects" element={<ProjectListPage />}></Route>
        <Route path="/projects/create" element={<CreateProjectPage />}></Route>
        <Route
          path="/projects/:projectId"
          element={<ProjectDetailsPage />}
        ></Route>
        <Route
          path="/projects/edit/:projectId"
          element={<EditProjectPage />}
        ></Route>
      </Routes>
    </div>
  );
}
export default App;
