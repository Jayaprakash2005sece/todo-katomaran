import { Routes, Route } from "react-router-dom";
import SignUpForm from "./Signupform";
import Home from "./Home"; // create this file
import { BrowserRouter } from "react-router-dom"; // ✅ import this

export default function App() {
  return (
     <BrowserRouter>
      <Routes>
      <Route
        path="/"
        element={
            <div className="bg-white shadow-lg w-full max-w-md rounded-md p-4">
              <SignUpForm />
            </div>
        }
      />
       <Route path="/Home" element={<Home />} />
    </Routes>
     </BrowserRouter>
   
  );
}
