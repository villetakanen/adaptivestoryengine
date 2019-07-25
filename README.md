# Adaptive Story Engine

A Simple learning and playground project.

"A Client for __Choose Your Own Story__ style novel reading"

A live demo can be seen in firebase:
<https://adaptivestoryengine.firebaseapp.com/>

The App consists of

- Vue-Cli architecture with:
- Vuex store, vue router, and
- Firebase auth, and Firestore for online books

The App takes in a list of Books from local asset, or remote firestore in the format of

```json
 "BookOne":{
        "start":"bo_1",
        "title":"The test book for StoryBoard functionality",
        "bo_1":{
            "title":"Start of the Book",
            "text":"The book should start from this chapter. The chapter has only one action, which enables you to move to the second chapter",
            "markdown":"# this is some markdown \nAnd some text \n## AND a head 2",
            "actions":[
                {"target":"bo_2",
                 "text":"Move on to the second chapter"
                },
                {"target":"bo_1",
                    "text":"Stay here",
                    "style":"error"
                }
            ],
            "notes":[
                {"message":"An example message here"},
                {"message":"A second example message here"}
            ]
        },
```

The actions can be used for page turning, or for coose-your-own-story style texts.

## Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Run your tests

```bash
npm run test
```

### Lints and fixes files

```bash
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Setup Firestore for remote books

- Create a file __env.production__ that contains

```yaml
VUE_APP_FIREBASE_API_KEY = 'your key'
VUE_APP_FIREBASE_AUTH_DOMAIN = 'your_app.firebaseapp.com'
VUE_APP_FIREBASE_DATASE_URL = 'https://your_app.firebaseio.com'
VUE_APP_FIREBASE_PROJECT_ID = 'your app id'
VUE_APP_FIREBASE_STORAGE_BUCKET = 'your_app.appspot.com'
VUE_APP_FIREBASE_MESSAGE_SENDER_ID = 'your sender key'
VUE_APP_FIREBASE_APP_ID = 'your app id'
```

- Enable google logins for the Firebase app
- Create a container called __books__ in the firestore, and add the book data there, as in the json example above
