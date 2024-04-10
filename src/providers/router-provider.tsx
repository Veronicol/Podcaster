import {
  Navigate,
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom';

import App from '../App';
import { EpisodeDetail, PodcastDetail, PodcastList } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <PodcastList /> },
      {
        path: 'podcast/:podcastId',
        element: <PodcastDetail />
      },
      {
        path: 'podcast/:podcastId/episode/:episodeId',
        element: <EpisodeDetail />
      },
      {
        path: '*',
        element: <Navigate to="/" replace />
      }
    ]
  }
]);

export const AppRouterProvider = () => <RouterProvider router={router} />;
