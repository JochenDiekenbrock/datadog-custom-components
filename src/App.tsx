import React from 'react';
import { Button } from './button';
import { initializeDatadogRum } from './datadog-helper';

initializeDatadogRum({
  applicationId: process.env.REACT_APP_DATADOG_RUM_APPLICATION_ID ?? '',
  clientToken: process.env.REACT_APP_DATADOG_RUM_CLIENT_TOKEN ?? '',
  service: 'datadog-custom-components',
  version: '1.0.0'
});

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'my-custom-component': any;
      'my-custom-component-shadow-root': any;
    }
  }
}

function App(): JSX.Element {
  return (
    <>
      <h1>Datadog in custom components</h1>

      <Button id="outer-button" />
      <my-custom-component />
      <my-custom-component-shadow-root />
    </>
  );
}

export default App;
