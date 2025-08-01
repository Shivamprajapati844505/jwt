import { Routes, Route } from 'react-router-dom';
import Header from './pages/header/Header.jsx';
import Login  from './pages/auth/Login.jsx';
import SignUp  from './pages/auth/SignUp.jsx';
import Dashboard  from './pages/dashboard/Dashboard.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
