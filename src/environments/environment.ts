// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from './environment.interface';

export const environment: Environment = {
  production: false,
  salesBackendOrigin: '',
  estimateBackendOrigin: '',
  clientId: '989d6d04-a59c-4b5e-a221-1a145d1111c1',
  directoryId: 'f146b14c-8f8a-4bc1-81c7-f1083a35b761',
  redirectUri: 'http://localhost:4200/',
  apiEndpoint: 'https://poc-apimanage.jikiai.net/sales-api-proxy'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
