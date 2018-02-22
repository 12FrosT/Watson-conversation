import React from 'react';
import ChatBot, { Loading } from 'react-simple-chatbot';
import {Helmet} from 'react-helmet';
import PropTypes from 'prop-types';
import axios from 'axios';

var chatBackground = require("./background.jpg")

class Watson extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      result: '',
    };
  }

  componentWillMount() {
    const self = this;
    const { steps } = this.props;
    const query = steps.thisOne.value;
    axios.post('https://chat.calloused47.hasura-app.io/send', {text:query})
     .then(function(response){
       self.setState({loading: false, result: response.data[0]});
     })
     .catch(function(error){
       self.setState({loading: false, result: 'ERROR!'});
     });
  }

  render() {
    const { result, loading } = this.state;
    return (
      <div>
        { loading ? <Loading /> : result }
      </div>
    );
  }
}

Watson.propTypes = {
  steps: PropTypes.object
};
Watson.defaultProps = {
  steps: undefined
};

const steps = [
{
  id: 'first',
  message: 'Hello, It seems a nice drive today. What may I do for you ?',
  trigger: 'thisOne'
},
{
   id: 'thisOne',
   user: true,
   trigger: 'second',
},
{
  id: 'second',
  component: <Watson />,
  asMessage : true,
  trigger: 'thisOne'
}
];

export default class App extends React.Component {

  render() {
    return (
      <div>
      <Helmet>
          <style>{'body { background-color: black }'}</style>
      </Helmet>
      <p style={{color:"white", fontFamily:"calibri", fontSize:17, fontStyle:"bold", left:10, top:20, position:"absolute"}}>Welcome to Watson Car Dashboard &#x263A;</p>
      <ChatBot
        steps={steps}
        style = {{marginTop : 75, width : '100%', height : "100%"}}
        headerTitle = "Watson ChatBot"
        placeholder = "Here we go !"
        recognitionEnable = {true}
         bubbleStyle = {{"backgroundColor" : '#e00202',color:"white", fontSize:17}}
        inputStyle = {{height : '100%'}}
      />
      </div>
    );
  }
}
