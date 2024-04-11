import { useIsFetching } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const navigate = useNavigate();
  const isFetching = useIsFetching();

  const navigateToHome = () => navigate('/');

  return (
    <div className="navbar-container">
      <div onClick={navigateToHome}>Podcaster</div>
      {isFetching > 0 && <div className="loading" />}
    </div>
  );
};
