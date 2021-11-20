const request = require('request');
const fs = require('fs')
const webAddress = process.argv.slice(2)[0];
const fileLocation = process.argv.slice(2)[1];

request(webAddress, (error, response, body) => { //need the response parameter even though its not used
    if(error){ 
      console.log(error);
      return
    } 
  fs.writeFile(fileLocation, body, (error) => { 
    if(error){
      console('error:', error);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${fileLocation}`);
    }
  });
}); 

