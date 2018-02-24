# Watson Conversation
## Introduction  

The IBM Watson Conversation service combines machine learning, natural language understanding, and integrated dialog tools to create conversation flows between your apps and your users. This Hasura project includes deployment of the Watson Conversation API service as a custom microservice. Using IoT infrastructure, it can be implemented as a car dashboard.            


The app incorporates a sample conversation (available on IBM Cloud) called the Car Dashboard. In this scenario a person inside the car can message Watson to turn on/off music,lights,wipers etc also the person can find the nearest restrooms, gas stations etc.
![image](https://user-images.githubusercontent.com/17771352/36627139-7a3336be-1964-11e8-93a4-d690d1871c0d.png)
## Get the App
The app is developed both for the web and mobile using React and React Native respectively. The back-end is powered by Node.js
 *  Link to the Web App custom UI service - https://ui.calloused47.hasura-app.io/
 *  Link to the APK - https://drive.google.com/open?id=1Qi_wANhK2iW3G5NWH_cT5KpbM9KkTa4j

## Build and Deploy
#### Pre-requisites
We will use Node.js along with the express framework to build our server. Ensure that you have Node installed on your computer, do this by running node-v in the terminal. If you do not have Node installed you can get it from https://nodejs.org 
####
Before you begin, ensure that you have the latest version of the hasura cli installed. You can find instructions to download the hasura cli from [here](https://docs.hasura.io/0.15/manual/install-hasura-cli.html).
####
You must have an IBM Cloud account. The account is free and provides access to everything you need to develop, track, plan, and deploy apps.
Create your account [here](https://console.bluemix.net/registration/?cm_mmc=IBMBluemixGarageMethod-_-MethodSite-_-10-19-15::12-31-18-_-bm_reg&cm_mc_uid=24808535902515066792134&cm_mc_sid_50200000=85096111519147794997). &nbsp

## Back-end Node.js
On your local machine, do the following steps :
####
1. Open terminal, run the quickstart command (boilerplate) : ```hasura quickstart hasura/hello-world```
####
2. In the hello-world directory type : ```npm install watson-developer-cloud```
####
3. To implement API call to use the Watson services you will need credentials of your workspace. Follow the steps to get your credentials  


      i.Make sure you are logged into your IBM cloud account. Click Catalog and then click Services > Watson > Conversation.  

     ii.Type any custom service name. Click Create.  

     iii.Click Launch tool to open the Watson Conversation workspace.

     iv.Click Car Dashboard-sample, to the left-hand menu click  'Deploy' to get your workspace credentials.

4. In the source code folder browse to the following directory for API call implementation code:  Watson-conversation>microservices>chat>app>src>server.js   

For official docs click [here]( https://www.ibm.com/watson/developercloud/conversation/api/v1/#apiexplorer) 


 5. For deploying the microservice to Hasura cluster follow the steps in the [docs](https://docs.hasura.io/0.15/manual/custom-microservices/add-microservice-from-template.html) (use template nodejs-express)

`Note : For creating a custom conversation in your workspace see the Future Scope section.`

## Front-end React Native

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

## Front-end React
### Frameworks used
  [React-JS] (https://reactjs.org/docs/hello-world.html)
 
 ### Installing

  1. Open your terminal and go to the project folder's /microservices/ui/App 
  2. Run ```npm install``` from your terminal to install all dependencies.
  3. Run ```npm start``` from your terminal to start the server in development mode.
  4. Head to [http://localhost:3000] on your browser. (if it doesn't open by default)
  5. You will have the ChatBot running on your server
  
### Running the React App
  1. Interact with the ChatBot by giving instructions 
  2. Instructions could be

      i. Turn off the lights

      ii. Play music 

    or anything else that the user would like to do. Voice commands are also accepted !

## Future Scope
1. Implementing a custom chatbot on the IBM workspace by defining our own Intents, Entities, Dialogue flow and Context.  
    Follow the [tutorial](https://www.ibm.com/cloud/garage/tutorials/watson_conversation_support?task=1) to make your own personalized Chatbot.    

2. UI improvements.

## Contributors
Ashish - Nodejs-express  

Saumeya Katyal - React Native    

Saksham Singh - React    

Karthik - React
