import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import DataEntryTablepaddy from "./DataEntryTable/DataEntryTable";
import Sidebar from "./SideBar/Sidebar";
import Navbar from "./Navbar/Navbar";
import DataEntryTablerice from './DataEntryTable/DataEntryTablerice'

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 ml-64">
          {/* Navbar */}
          <Navbar />

          {/* Page Content */}
          <div className="mt-16 p-4">
            <Routes>
              <Route path="/paddy" element={<DataEntryTablepaddy />} />
              <Route path="/rice" element={<DataEntryTablerice />} />
              {/* Add more routes here */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
