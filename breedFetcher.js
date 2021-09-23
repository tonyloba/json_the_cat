const request = require('request');
//var fs = require('fs');
// const getCatsBreed = `https://api.thecatapi.com/v1/images/search?q=${process.argv[2]}`;



// refactoring:
const fetchBreedDescription = function(breedName, callback) {
  
  const getCatsBreed = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(getCatsBreed, function (error, response, body) {
  if (error){   
    return callback(error,null);
  }   

  const data = JSON.parse(body);
  //console.log(data)
  console.log(typeof data);
  if(data[0]){
    return callback(null,data[0].description)
   } 
  else {
   
    return callback("Nothing found",null)
  } 
  });


};

module.exports = {fetchBreedDescription};




// request(getCatsUrl, function (error, response, body) {
//   if (error){
//     console.error('error:', error);
//   }  
//   const data = JSON.parse(body);
//   //console.log(data)
//   console.log(typeof data);
//   if(data[0]){
//     console.log(data[0].description)
//   } else {
//     console.log("Nothing found")
//   }  

// });


//   downloads  to the file path we specify:
// .pipe(fs.createWriteStream(filePath));
//

