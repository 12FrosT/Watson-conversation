# React Native app with IBM Watson Converation API
Link to the APK - https://drive.google.com/open?id=1Qi_wANhK2iW3G5NWH_cT5KpbM9KkTa4j

![imageedit_2_5876346159](https://user-images.githubusercontent.com/17771352/36627282-6b9667c8-1966-11e8-95ec-0127fb4dc293.png)

1. Follow the steps in the official [facebook docs] (https://facebook.github.io/react-native/docs/getting-started.html) to set up your local environment for react native. (For this project refer **Build projects with native code** instead of **Quick Start**)  


2. Open the terminal, Go to project folder: ```cd Watson-conversation``` 


3. Change to React-Native directory:  ```cd React-Native-App```  


4. Type :  ```npm install```


5.  To run on android : ```react-native run-android```  
      To run on IOS : ```react-native run-ios```

#### Libraries used in this project:  
1.  [Native Base](https://docs.nativebase.io/#Introduction) - For UI components
2. [Axios](https://www.npmjs.com/package/react-native-axios)  - For integrating the frontend with the Watson Conversation service  
Snippet from the source code for the post request : ```axios.post('https://chat.calloused47.hasura-app.io/send', { text:text })
    .then(response => this.showResponse(response));```
