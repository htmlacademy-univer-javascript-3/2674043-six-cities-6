import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../constants/authorization-status/authorization-status.tsx';
import { AppRoute } from '../constants/path-route/path-route.tsx';
import { useAppSelector } from '../../hooks/index.tsx';
import Spinner from '../spinner/spinner.tsx';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

function PrivateRoute({authorizationStatus, children}: PrivateRouteProps): JSX.Element {
  const isCheckingAuth = useAppSelector((state) => state.user.isCheckingAuth);
  if (!isCheckingAuth) {
    return <Spinner/>;
  } else {
    return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.LOGIN} />;
  }
}

export default PrivateRoute;
