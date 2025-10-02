import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main-page/main-page.tsx';
import LoginPage from './pages/login-page/login-page.tsx';
import OfferPage from './pages/offer-page/offer-page.tsx';
import FavouritePage from './pages/favourite-page/favourite-page.tsx';
import NotFound from './pages/not-found/not-found.tsx';
import PrivateRoute from './components/private-route/private-route.tsx';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage countPlace={312} />}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/favorites" element={<PrivateRoute><FavouritePage/></PrivateRoute>}></Route>
        <Route path="/offer/:id" element={<OfferPage/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
