import './App.css';
import { Link, Routes, Route, Outlet, useMatch, useResolvedPath } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useEffect } from 'react';

function App() {
  useEffect(function () {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('navbar-scrolled', window.scrollY > 0);
    });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <>
      <Link className={match && 'active'} to={to} {...props}>
        {children}
      </Link>
    </>
  );
}

function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            MasTake
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <GiHamburgerMenu />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="mx-auto"></div>
            <div className="navbar-nav">
              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/about">About</CustomLink>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
export default App;
