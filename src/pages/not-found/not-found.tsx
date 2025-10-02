import { Link } from 'react-router-dom';

function NotFound() : JSX.Element{
  return (
    <>
      <p>404 Not Found</p>
      <Link to="/">Вернуться на главную страницу</Link>
    </>

  );
}

export default NotFound;
