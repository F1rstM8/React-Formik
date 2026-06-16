import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="auth-page" style={{ justifyContent: 'center' }}>
      <div className="auth-container">
        <h1 style={{ fontSize: '4rem', marginBottom: '10px' }}>404</h1>
        <p className="subtitle" style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
          Ой! Такої сторінки не існує.
        </p>
        <Link to="/login" className="auth-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
          Повернутися на головну
        </Link>
      </div>
    </div>
  );
};

export default NotFound;