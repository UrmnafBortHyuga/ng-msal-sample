import { Environment } from './environment.interface';

export const environment: Environment = {
  production: true,
  salesBackendOrigin: 'https://sales.apps.poc-pas.jikiai.net',
  estimateBackendOrigin:
    'https://estimate-afterservice-api.apps.poc-pas.jikiai.net',
  clientId: 'f22f3b79-76c1-47ac-93f7-e2aa47296b0f',
  directoryId: 'bfdfc9f3-0a51-469f-be0d-cc4ee371ac1f',
  redirectUri: 'https://poc-apimanage.jikiai.net/spa-contents-proxy',
  apiEndpoint: '/authorization-verify-proxy'
};
