
import Header from "@/components/header";
import React from "react";

import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
    <div className="grid-background"> </div>
      <main className="min-h-screen container mx-auto"> 
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
      Made with ❤️ by <a href="linkedin.com/in/anupam-kumar-singh-0b647224a">Anupam</a>
      </div>
    </div>
  );
}

export default AppLayout;

// import Header from "@/components/header";
// import { Outlet } from "react-router-dom";

// const AppLayout = () => {
//   return (
//     <div>
//       <div className="grid-background"></div>
//       <main className="min-h-screen container">
//         <Header />
//         <Outlet />
//       </main>
//       <div className="p-10 text-center bg-gray-800 mt-10">
//         Made with 💗 by RoadsideCoder
//       </div>
//     </div>
//   );
// };

// export default AppLayout;
