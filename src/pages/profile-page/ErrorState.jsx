import "./ErrorState.css";
function ErrorState({ onRetry, message }) {
  return (
    <div className="error-state-container">
      <span className="error-message">{message}</span>
      <button className="cta primary-cta" onClick={onRetry}>
        Retry
      </button>
    </div>
  );
}

export default ErrorState;
