import React, { FC, useEffect, useState } from 'react';
import { getApiUrl } from '../../utils';

export const App: FC<unknown> = () => {
  const [isBackendAlive, setIsBackendAlive] = useState(false);
  const [isBackendAliveLoaded, setIsBackendAliveLoaded] = useState(false);

  useEffect(() => {
    if (isBackendAliveLoaded) {
      return;
    }

    const loadIsAlive = async (): Promise<void> => {
      const isAliveResponse = await fetch(`${getApiUrl}/ping`);

      setIsBackendAliveLoaded(true);
      setIsBackendAlive(isAliveResponse.ok);
    };

    loadIsAlive();
  }, [
    isBackendAlive,
    isBackendAliveLoaded,
    setIsBackendAliveLoaded,
    setIsBackendAlive,
  ]);

  if (!isBackendAliveLoaded) {
    return <div>Loading...</div>;
  }

  return <div>Can reach backend: {isBackendAlive ? 'Yes' : 'No'}</div>;
};
