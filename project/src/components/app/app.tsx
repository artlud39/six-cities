import MainPage from '../../pages/main-page/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';
import LoginPage from '../../pages/login-page/login-page';
import { AppRoute, AuthStatus } from '../../const';
import PrivateRoute from '../privat-route/private-route';
import { OffersType } from '../../types/offer';

type AppProps = {
  offers: OffersType
}

function App({offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage offers={offers} />}
        />

        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authStatus={AuthStatus.NoAuth}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />

        <Route
          path={AppRoute.Offer}
          element={<OfferPage />}
        />

        <Route
          path={AppRoute.NotFound}
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
