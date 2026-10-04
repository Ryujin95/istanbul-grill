/* eslint-disable react/prop-types */

export function LoadingState() {
  return (
    <p className="menu-feedback" role="status" aria-live="polite">
      Chargement du menu…
    </p>
  );
}

export function ErrorState({ message, onRetry }) {
  return (
    <div className="menu-feedback menu-feedback-error" role="alert">
      <p>{message}</p>
      <button type="button" onClick={onRetry}>Réessayer</button>
    </div>
  );
}
