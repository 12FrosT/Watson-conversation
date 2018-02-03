var express = require('express');
var request = require('request');
var cookieParser = require('cookie-parser');
var bodyParser=require('body-parser');
var path = require('path');
var app = express();

var watson = require("watson-developer-cloud");

var conversation = new watson.ConversationV1({
    username: '5e9aee44-052f-463e-9b9c-eb0c899ea045',
    password: 'ZHUBaZJsaVfu',
    version_date: '2017-05-26'
});

app.use(cookieParser());
app.use(bodyParser.json());

var context=[];

app.get('/', function (req, res) {
  // conversation.message({
  //     input: {'text': req.body.text},
  //     workspace_id: '1cf9cd65-5506-4bc2-a31d-06872dec90dd',
  //     context: context
  // },  function(err, response) {
  //     if (err)
  //     console.log('error:', err);
  //     else
  //    //console.log(JSON.stringify(response, null, 2));
  //    contexts= response.context;
     res.sendfile(path.join(__dirname, 'public', 'input.html'));
    //});
});

app.post('/send',(req, res) => {
  var send_context=null;
  var index=0;
  if(req.cookies.id!=null){
    for(index=0;index<context.length;index++){
        if(context[index].conversation_id==req.cookies.id)
          {send_context=context[index];break;}
    }
  }
    conversation.message({
      input: {'text': req.body.text},
      workspace_id: '1cf9cd65-5506-4bc2-a31d-06872dec90dd',
      context: send_context
  },  function(err, response) {
      if (err)
      console.log('error:', err);
      else
     //console.log(JSON.stringify(response, null, 2));
    if(send_context==null)
      context.push(response.context);
    else
     context[index]= response.context;
     res.cookie('id', response.context.conversation_id);
     res.send(response.output.text);
    });
});

app.listen(8080, function () {
    console.log('App listening on port 8080!');
});

