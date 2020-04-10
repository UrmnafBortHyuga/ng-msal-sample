import { Environment } from './environment.interface';

export const environment: Environment = {
  apiEndpoint: '',
  directoryId: '', clientId: '', redirectUri: '',
  production: false,
  salesBackendOrigin: 'https://sales.apps.poc-pas.jikiai.net',
  estimateBackendOrigin:
    'https://estimate-afterservice-api.apps.poc-pas.jikiai.net'
};
