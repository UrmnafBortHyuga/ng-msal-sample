// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from './environment.interface';

export const environment: Environment = {
  production: false,
  salesBackendOrigin: '',
  estimateBackendOrigin: '',
  clientId: '0ef16efc-60d7-4179-bc80-c66bdc6241bd',
  directoryId: 'eeb77ba8-218e-4086-a42a-476e8b7566f9',
  redirectUri: 'http://localhost:4200/',
  apiEndpoint: 'http://localhost:5000'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
