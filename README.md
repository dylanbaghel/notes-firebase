# Notes App Built With React and Firebase

## To Run This Create firebase file in src/firebase folder and add firebase configuration

```
import * as firebase from 'firebase';

const config = {
    firebase web config object
};

firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);

export { firebase,  firestore as default };
```