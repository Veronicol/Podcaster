import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const navigate = useNavigate();

  const navigateToHome = () => navigate('/');
  return (
    <div className="navbar-container">
      <div onClick={navigateToHome}>Podcaster</div>
      <div>Loading...</div>
    </div>
  );
};
