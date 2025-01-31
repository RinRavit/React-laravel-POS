// import { Link, Navigate, Outlet } from "react-router-dom";
// import { useStateContext } from "../context/ContextProvider";
// import axiosClient from "../axios-client.js";
// import { useEffect } from "react";

// export default function DefaultLayout() {
//   const { user, token, setUser, setToken, notification } = useStateContext();

//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   const onLogout = (ev) => {
//     ev.preventDefault();

//     axiosClient.post("/logout").then(() => {
//       setUser({});
//       setToken(null);
//     });
//   };

//   useEffect(() => {
//     axiosClient.get("/user").then(({ data }) => {
//       setUser(data);
//     });
//   }, []);

//   return (
//     <div id="defaultLayout">
//       <aside>
//         <Link to="/dashboard">Dashboard</Link>
//         <Link to="/users">Users</Link>
//       </aside>
//       <div className="content">
//         <header>
//           <div>Header</div>

//           <div>
//             {user.name} &nbsp; &nbsp;
//             <a onClick={onLogout} className="btn-logout" href="#">
//               Logout
//             </a>
//           </div>
//         </header>
//         <main>
//           <Outlet />
//         </main>
//         {notification && <div className="notification">{notification}</div>}
//       </div>
//     </div>
//   );
// }

// update 01
// import { Link, Navigate, Outlet } from "react-router-dom";
// import { useStateContext } from "../context/ContextProvider";
// import axiosClient from "../axios-client.js";
// import { useEffect } from "react";

// export default function DefaultLayout() {
//   const { user, token, setUser, setToken, notification } = useStateContext();

//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   if (user.role !== "admin") {
//     return <Navigate to="/login" />;
//   }

//   const onLogout = (ev) => {
//     ev.preventDefault();

//     axiosClient.post("/logout").then(() => {
//       setUser({});
//       setToken(null);
//     });
//   };

//   useEffect(() => {
//     axiosClient.get("/user").then(({ data }) => {
//       setUser(data);
//     });
//   }, []);

//   return (
//     <div id="defaultLayout">
//       <aside>
//         <Link to="/dashboard">Dashboard</Link>
//         <Link to="/users">Users</Link>
//       </aside>
//       <div className="content">
//         <header>
//           <div>Header</div>

//           <div>
//             {user.name} &nbsp; &nbsp;
//             <a onClick={onLogout} className="btn-logout" href="#">
//               Logout
//             </a>
//           </div>
//         </header>
//         <main>
//           <Outlet />
//         </main>
//         {notification && <div className="notification">{notification}</div>}
//       </div>
//     </div>
//   );
// }

// update02
// import { Link, Navigate, Outlet } from "react-router-dom";
// import { useStateContext } from "../context/ContextProvider";
// import axiosClient from "../axios-client.js";
// import { useEffect } from "react";

// export default function DefaultLayout() {
//   const { user, token, setUser, setToken, notification } = useStateContext();

//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   if (user.role !== "admin") {
//     return <Navigate to="/login" />;
//   }

//   const onLogout = (ev) => {
//     ev.preventDefault();

//     axiosClient.post("/logout").then(() => {
//       setUser({});
//       setToken(null);
//     });
//   };

//   useEffect(() => {
//     axiosClient.get("/user").then(({ data }) => {
//       setUser(data);
//     });
//   }, []);

//   return (
//     <div id="defaultLayout">
//       <aside>
//         <Link to="/admin/dashboard">Dashboard</Link>
//         <Link to="/admin/users">Users</Link>
//       </aside>
//       <div className="content">
//         <header>
//           <div>Header</div>

//           <div>
//             {user.name} &nbsp; &nbsp;
//             <a onClick={onLogout} className="btn-logout" href="#">
//               Logout
//             </a>
//           </div>
//         </header>
//         <main>
//           <Outlet />
//         </main>
//         {notification && <div className="notification">{notification}</div>}
//       </div>
//     </div>
//   );
// }

// // update 03
// import { Link, Navigate, Outlet } from "react-router-dom";
// import { useStateContext } from "../context/ContextProvider";
// import axiosClient from "../axios-client.js";
// import { useEffect } from "react";

// export default function DefaultLayout() {
//   const { user, token, setUser, setToken, notification } = useStateContext();

//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   if (user.role !== "admin") {
//     return <Navigate to="/login" />;
//   }

//   const onLogout = (ev) => {
//     ev.preventDefault();

//     axiosClient.post("/logout").then(() => {
//       setUser({});
//       setToken(null);
//     });
//   };

//   useEffect(() => {
//     axiosClient.get("/user").then(({ data }) => {
//       setUser(data);
//     });
//   }, []);

//   return (
//     <div id="defaultLayout">
//       <aside>
//         <Link to="/admin/dashboard">Dashboard</Link>
//         <Link to="/admin/users">Users</Link>
//       </aside>
//       <div className="content">
//         <header>
//           <div>Header</div>

//           <div>
//             {user.name} &nbsp; &nbsp;
//             <a onClick={onLogout} className="btn-logout" href="#">
//               Logout
//             </a>
//           </div>
//         </header>
//         <main>
//           <Outlet />
//         </main>
//         {notification && <div className="notification">{notification}</div>}
//       </div>
//     </div>
//   );
// }

// working on Category

// import { Link, Navigate, Outlet } from "react-router-dom";
// import { useStateContext } from "../context/ContextProvider";
// import axiosClient from "../axios-client.js";
// import { useEffect } from "react";

// export default function DefaultLayout() {
//   const { user, token, setUser, setToken, notification } = useStateContext();

//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   if (user.role !== "admin") {
//     return <Navigate to="/login" />;
//   }

//   const onLogout = (ev) => {
//     ev.preventDefault();

//     axiosClient.post("/logout").then(() => {
//       setUser({});
//       setToken(null);
//     });
//   };

//   useEffect(() => {
//     axiosClient.get("/user").then(({ data }) => {
//       setUser(data);
//     });
//   }, []);

//   return (
//     <div id="defaultLayout">
//       <aside>
//         <Link to="/admin/dashboard">Dashboard</Link>
//         <Link to="/admin/category">Category</Link>
//         <Link to="/admin/users">Users</Link>
//       </aside>
//       <div className="content">
//         <header>
//           <div>Header</div>

//           <div>
//             {user.name} &nbsp; &nbsp;
//             <a onClick={onLogout} className="btn-logout" href="#">
//               Logout
//             </a>
//           </div>
//         </header>
//         <main>
//           <Outlet />
//         </main>
//         {notification && <div className="notification">{notification}</div>}
//       </div>
//     </div>
//   );
// }

// End of code that work with Category

// Product

import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axios-client.js";
import { useEffect } from "react";

export default function DefaultLayout() {
  const { user, token, setUser, setToken, notification } = useStateContext();

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (user.role !== "admin") {
    return <Navigate to="/login" />;
  }

  const onLogout = (ev) => {
    ev.preventDefault();

    axiosClient.post("/logout").then(() => {
      setUser({});
      setToken(null);
    });
  };

  useEffect(() => {
    axiosClient.get("/user").then(({ data }) => {
      setUser(data);
    });
  }, []);

  return (
    <div id="defaultLayout">
      <aside>
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/category">Category</Link>
        <Link to="/admin/Product">Product</Link>

        <Link to="/admin/users">Users</Link>
      </aside>
      <div className="content">
        <header>
          <div>Header</div>

          <div>
            {user.name} &nbsp; &nbsp;
            <a onClick={onLogout} className="btn-logout" href="#">
              Logout
            </a>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
        {notification && <div className="notification">{notification}</div>}
      </div>
    </div>
  );
}

// End of Product
