// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'http://platzi-store.herokuapp.com/',
  firebase: {
    apiKey: 'AIzaSyCbkBeIwziorVz8foC1O-LCihWjTXLVZxs',
    authDomain: 'platzi-store-625a1.firebaseapp.com',
    databaseURL: 'https://platzi-store-625a1.firebaseio.com',
    projectId: 'platzi-store-625a1',
    storageBucket: 'platzi-store-625a1.appspot.com',
    messagingSenderId: '738702859024',
    appId: '1:738702859024:web:4d09fc5a9a6f5d7952a395'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
