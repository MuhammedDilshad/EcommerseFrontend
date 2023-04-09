import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ProductView from "./pages/ProductView/ProductView";
import Cart from "./pages/Cart/Cart";

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  let isRegistered = user ? true : false;

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            isRegistered ? <Navigate to="Home" /> : <Navigate to="auth" />
          }
        />
        <Route
          path="/signup"
          element={isRegistered ? <Navigate to="../Home" /> : <Signup />}
        />
        <Route
          path="/auth"
          element={isRegistered ? <Navigate to="../Home" /> : <Login />}
        />
        <Route
          path="/home"
          element={isRegistered ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/ProductView/:id"
          element={isRegistered ? <ProductView /> : <Navigate to="../auth" />}
        />
        <Route
          path="/Cart/:id"
          element={isRegistered ? <Cart /> : <Navigate to="../auth" />}
        />
      </Routes>
    </div>
  );
}

export default App;
