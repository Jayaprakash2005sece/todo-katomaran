import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BackgroundLines } from "@/components/ui/background-lines";



createRoot(document.getElementById("root")!).render(
  <StrictMode>
   
     <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 min-h-screen bg-[#493f5c]">
      <App />
      
     </BackgroundLines>
     
       
   
  </StrictMode>
);
