import { PodcastList } from './PodcastList';
import { NavBar } from '../components';

export const Layout = () => {
  return (
    <div className="main-container">
      <NavBar />
      <div className="page-container">
        <PodcastList />
      </div>
    </div>
  );
};
