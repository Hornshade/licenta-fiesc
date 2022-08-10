import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import {
  About,
  Cart,
  Contact,
  Home,
  Login,
  Payment,
  Products,
  Register,
  Layout,
} from "./pages";
import ProtectedRoute from "./routes/ProtectedRoutes";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          element={
            <>
              <Header />
              <Layout>
                <ProtectedRoute />
              </Layout>
            </>
          }
        >
          {/* protected routes */}
          <Route path="/cosul-meu" element={<Cart />} />
        </Route>
        <Route
          element={
            <>
              <Header />
              <Layout>
                <Outlet />
              </Layout>
            </>
          }
        >
          {/* public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/despre-noi" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/plata" element={<Payment />} />
          <Route path="/produse" element={<Products />} />
        </Route>

        {/* onboarding routes */}
        <Route path="/logare" element={<Login />} />
        <Route path="/inregistrare" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
