import { datadogRum } from '@datadog/browser-rum';

interface InitializeDatadogRumParams {
  applicationId: string;
  clientToken: string;
  service: string;
  version: string;
}
export const initializeDatadogRum = ({
  applicationId,
  clientToken,
  service,
  version
}: InitializeDatadogRumParams): void => {
  datadogRum.init({
    applicationId: applicationId,
    clientToken: clientToken,
    env: 'test',
    sampleRate: 100,
    service,
    silentMultipleInit: true,
    site: 'datadoghq.eu',
    trackInteractions: true,
    useSecureSessionCookie: true,
    useCrossSiteSessionCookie: true,
    version
  });
};
