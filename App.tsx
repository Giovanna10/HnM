// import * as firebase from 'firebase';

import Navigator from './src/navigation/Navigator';
import React from 'react';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  /* const firebaseConfig = {
    apiKey: 'AIzaSyCnyPu_DecleWyceePh7c6x_rfA8YaFMNA',
    authDomain: 'hnmapp-1c2bf.firebaseapp.com',
    databaseURL: 'https://hnmapp-1c2bf.firebaseio.com',
    projectId: 'hnmapp-1c2bf',
    storageBucket: 'hnmapp-1c2bf.appspot.com',
    messagingSenderId: '217300597137',
    appId: '1:217300597137:web:b7864d624af75652ec4230',
    measurementId: 'G-RDY01MF30K',
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics(); */
  return <Navigator />;
};

export default App;
