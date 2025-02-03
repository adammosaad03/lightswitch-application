import React from 'react';

export default function ErrorFallback({error, resetErrorBoundary, switchNumber}) {
  return (
    <div className="error">
      <h2>An error was found in switch {switchNumber}!</h2>
      <p>Error: {error.message}</p>
      <button onClick={resetErrorBoundary}>Reset switch {switchNumber}</button>
    </div>
  );
}
