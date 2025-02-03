import React from 'react';
import LightSwitch from './LightSwitch';
import ErrorFallback from './ErrorFallback';
import {ErrorBoundary} from 'react-error-boundary';
import { logError } from './error-logging-service';

export default function App() {
  return (
    <div className="container">
      {[1, 2, 3, 4].map((num) => {
        return (
          <ErrorBoundary
            onError={logError}
            FallbackComponent={(props) => (

            <ErrorFallback {...props} switchNumber={num}/>
            )}
          >
            <LightSwitch switchNumber={num} />
          </ErrorBoundary>
        );
      })}
    </div>
  );
}
