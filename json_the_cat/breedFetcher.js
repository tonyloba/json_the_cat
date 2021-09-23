const request = require('request');
//var fs = require('fs');

// const getCatsUrl = `https://api.thecatapi.com/v1/images/search?q=${process.argv[2]}`;
const getCatsUrl = `https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`;


request(getCatsUrl, function (error, response, body) {
  if (error){
    console.error('error:', error);
  }  
  const data = JSON.parse(body);
  
  console.log(typeof data);
  if(data[0]){
    console.log(data[0].description)
  } else {
    console.log("Nothing found")
  }
  

});

//   downloads  to the file path we specify:
// .pipe(fs.createWriteStream(filePath));


