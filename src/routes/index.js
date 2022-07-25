import configRoutes from '../config/routes';

// Layouts
import { HeaderOnly } from '../components/Layout';

import Home from '../components/pages/Home';
import Following from '../components/pages/Following';
import Profile from '../components/pages/Profile';
import Upload from '../components/pages/Upload';
import Search from '../components/pages/Search';

const publicRoutes = [
  { path: configRoutes.home, component: Home },
  { path: configRoutes.following, component: Following },
  { path: configRoutes.profile, component: Profile },
  { path: configRoutes.upload, component: Upload, layout: HeaderOnly },
  { path: configRoutes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
