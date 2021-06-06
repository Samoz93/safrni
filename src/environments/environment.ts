// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  baseUrl: 'http://localhost:4200',
  production: false,
  azureKey: '72e0577dbe0c49c097eb22a3c47c8e32',

  api: 'https://saferni.net/api',
  firebase: {
    apiKey: 'AIzaSyCFFDVIBbxgrXGYTGwnBT00Zr7kL4FF6BU',
    authDomain: 'saferni-e66bf.firebaseapp.com',
    projectId: 'saferni-e66bf',
    storageBucket: 'saferni-e66bf.appspot.com',
    messagingSenderId: '941898512347',
    appId: '1:941898512347:web:43bdf6f9a48ba7c4fc99fe',
    measurementId: 'G-ZWQR4B6FH5',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
