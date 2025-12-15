import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main-page/main-page.tsx';
import LoginPage from './pages/login-page/login-page.tsx';
import OfferPage from './pages/offer-page/offer-page.tsx';
import FavouritePage from './pages/favourite-page/favourite-page.tsx';
import NotFound from './pages/not-found/not-found.tsx';
import PrivateRoute from './components/private-route/private-route.tsx';
import { OfferTypeProps } from './types/offer-type.tsx';
import { AppRoute } from './components/constants/path-route/path-route.tsx';

type AppProps = {
  offers: OfferTypeProps[];
};

function App({offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.ROOT} element={<MainPage/>}></Route>
        <Route path={AppRoute.LOGIN} element={<LoginPage/>}></Route>
        <Route path={AppRoute.FAVORITES} element={<PrivateRoute><FavouritePage offers={offers}/></PrivateRoute>}></Route>
        <Route path={AppRoute.OFFER} element={<OfferPage offers={offers}/>}></Route>
        <Route path={AppRoute.NOT_FOUND} element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
