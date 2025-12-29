import { Link } from 'react-router-dom';
import { AppRoute } from '../../components/constants/path-route/path-route';

function NotFound() : JSX.Element{
  return (
    <>
      <p>404 Not Found</p>
      <Link to={AppRoute.NOT_FOUND}>Вернуться на главную страницу</Link>
    </>

  );
}

export default NotFound;
