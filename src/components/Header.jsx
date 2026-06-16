import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  return (
    <header className="auth-header">
      <Link to="/" className="logo">💬 squadhelp</Link>
      <Link to={isLogin ? '/register' : '/login'} className="switch-btn">
        {isLogin ? 'Signup' : 'Login'}
      </Link>
    </header>
  );
};

export default Header;