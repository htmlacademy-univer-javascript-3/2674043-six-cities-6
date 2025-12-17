import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../constants/authorization-status/authorization-status.tsx';
import { AppRoute } from '../constants/path-route/path-route.tsx';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

function PrivateRoute({authorizationStatus, children}: PrivateRouteProps): JSX.Element {
  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.LOGIN} />;
}

export default PrivateRoute;
