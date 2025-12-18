import './spinner.css';

function Spinner(): JSX.Element{
  return (
    <div className="spinner-container" data-testid="spinner">
      <div className="spinner"></div>
      <p className="spinner-text">Loading offers...</p>
      <p className="spinner-text">You are not logged in or our server is down(</p>
    </div>
  );
}

export default Spinner;
