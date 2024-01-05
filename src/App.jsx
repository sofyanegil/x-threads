import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Footer from './components/Footer';
import './styles/main.scss';

function App() {
  const { authUser = null, isPreload = false } = useSelector((states) => states);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  return (
    <>
      <header>
        <Loading />
        <Navbar authUser={authUser} signOut={onSignOut} />
      </header>
      <main className="container">
        <Routes>
          {authUser && (
            <>
              <Route path="/login" element={<Navigate to="/" />} />
              <Route path="/register" element={<Navigate to="/" />} />
              <Route path="/thread/new" element={<h1>ThreadNew</h1>} />
            </>
          )}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/threads/:id" element={<h1>Thread Detail</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
