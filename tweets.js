
'use strict';
module.exports = (ctx,callback)=>{
    const algorithmia = require("algorithmia");
    const _ = require('lodash');
    const secrets = ctx.secrets;
    const params = ctx.data;
    const twitter = {
        auth : {
            app_key : secrets['APP_KEY'],
            app_secret : secrets['APP_SECRET'],
            oauth_token : secrets['AUTH_TOKEN'],
            oauth_token_secret : secrets['AUTH_SECRET']
        }
    };
    const onError = (message)=>{
        if (!_.isString(message) || _.isEmpty(message)){
            message = 'unknown error';
        }
        let error = {
            error : {
                message : message
            }
        };
        callback(error);
    };
    const apiKey = secrets['API_KEY'];
    const validateInput = ()=>{
        if (!_.has(params,'username')){
            onError('required input username not in query parameters.');
        }
    };
    let input = twitter;
    _.set(input,'query',_.get(params,'username',null));
    validateInput();
    algorithmia.client(apiKey)
        .algo("algo://diego/AnalyzeTwitterUser/0.1.6")
        .pipe(input)
        .then((response)=>{
            console.log(response.get());
            callback(null,response.get());
        })
        .catch((error)=>{
            onError(_.get(error,'message','error getting tweets please try again later'));
        });
};
