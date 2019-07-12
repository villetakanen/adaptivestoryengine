# adaptivestoryengine

A Simple learning and playground project for doing interactive novels.

A live demo can be seen in firebase:
<https://adaptivestoryengine.firebaseapp.com/>

The App takes in a list of Books in the format of

```json
 "BookOne":{
        "start":"bo_1",
        "title":"The test book for StoryBoard functionality",
        "bo_1":{
            "title":"Start of the Book", 
            "text":"The book should start from this chapter. The chapter has only one action, which enables you to move to the second chapter",
            "actions":[
                {"target":"bo_2",
                 "text":"Move on to the second chapter"
                }
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
