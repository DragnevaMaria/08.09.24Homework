// npm run start

const moment = require("moment")


function getDate(){
    console.log(moment().format('YYYY/DD/MM hh:mm:ss'))
}

function runCallbackFunc(callback, callbackArgs){
    callback(callbackArgs)
}

runCallbackFunc(getDate)