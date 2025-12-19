import { Fragment } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { AuthorizationStatus } from '../constants/authorization-status/authorization-status.tsx';
import { Link } from 'react-router-dom';
import { AppRoute } from '../constants/path-route/path-route.tsx';
import { memo } from 'react';
import { logoutUser } from '../../store/api-actions.ts';

function HeaderWithAuthorization(): JSX.Element {
  const dispatch = useAppDispatch();
  const email = useAppSelector((state) => state.user.email);
  const countFavouriteOffers = useAppSelector((state) => state.offers.favouriteOffers.length);
  const handleLogoutClick = () => {
    dispatch(logoutUser());
  };

  return (
    <Fragment>
      <div className="header__left">
        <Link to={AppRoute.ROOT} className="header__logo-link">
          <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
        </Link>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <div className="header__nav-link header__nav-link--profile">
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <Link to={AppRoute.FAVORITES}>
                <span className="header__user-name user__name">{email}</span>
                <span className="header__favorite-count">{countFavouriteOffers}</span>
              </Link>
            </div>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" onClick={handleLogoutClick}>
              <span className="header__signout">Sign out</span>
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

function HeaderWithoutAuthorization(): JSX.Element {
  return (
    <Fragment>
      <div className="header__left">
        <Link to={AppRoute.ROOT} className="header__logo-link">
          <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
        </Link>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link className="header__nav-link" to={AppRoute.LOGIN}>
              <span className="header__signin">Sign in</span>
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}


function Header(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          {authorizationStatus === AuthorizationStatus.Auth
            ? <HeaderWithAuthorization />
            : <HeaderWithoutAuthorization />}
        </div>
      </div>
    </header>
  );
}

const MemoHeader = memo(Header);
export default MemoHeader;
