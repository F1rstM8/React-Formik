import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import './styles/Auth.scss';

function App() {
  return (
    <Router>
      <Routes>
        {/* Перенаправляем с пустой страницы на страницу логина */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Подключаем наши правильные компоненты с Formik */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;