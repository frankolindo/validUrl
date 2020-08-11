const fs = require('fs');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter url file name: ', function(name){

  let answer = fs.readFile(name, function read(err, data){
  	if (err){
  		throw err;
  	}
  	let urls = data.toString().split(" ");
  	//console.log(`Hey there ${urls}!`);
  	
  	for (let i=0; i<urls.length; i++){
	    (function(i){
		var request = require('request');
		var current = "https://"+urls[i];
		  request({method: 'HEAD', url:current}, function (error, response, body) {
		      if (!error) {
		        //console.log(response.statusCode) 
		        console.log(current+" ["+response.statusCode+"]")
		      } else{
		            return false;
		         //console.log(current+"[error]");
		      }
		});
	    })(i);
	    
	}
  });
  
  
  
  readline.close();
});
