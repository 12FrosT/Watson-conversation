import React from 'react';
import ChatBot, { Loading } from 'react-simple-chatbot';
import {Helmet} from 'react-helmet';
import PropTypes from 'prop-types';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ThemeProvider } from 'styled-components';


const theme = {
  background: '#f5f8fb',
  headerBgColor: '#ff0000',
  headerFontColor: '#fff',
  headerFontSize: '19px',
  fontFamily:"Papyrus",
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

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
    axios.post('https://app.alright27.hasura-app.io/send', {text:query})
     .then(function(response){
       self.setState({loading: false, result: response.data.output.text});
     })
     .catch(function(error){
       self.setState({loading: false, result: 'ERROR!'});
     })
     ;
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
  message: 'Hello',
  trigger: 'thisOne'
},
{
   id: 'thisOne',
   user: true,
   trigger: 'second',
},
{
  id: 'second',
  asMessage: true,
  component: <Watson/>,
  trigger: 'thisOne'
}
];

export default class App extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
      <div>
      <Helmet>
          <style>{'body { background-color: black; }'}</style>
      </Helmet>
      <p style={{color:"white", fontFamily:"calibri", fontSize:27, fontStyle:"bold", left:150, top:20, position:"absolute",  }}>Welcome. I am Watson ChatBot</p>
      <p style={{color:"white", position:"absolute", fontFamily:"calibri", left:150,top:65, fontSize:20}}>Start a Conversation</p>
      <ThemeProvider theme={theme}>
      <ChatBot
        steps={steps}
        style = {{marginTop : 75, width : '80%', height : "78%", position:"absolute",left:150, top:50, }}
        inputStyle = {{height : '100%'}}
        bubbleStyle = {{"backgroundColor" : '#220f8a',color:"white", fontSize:17}}
      />
      </ThemeProvider>
      </div>
      </MuiThemeProvider>
    );
  }
}