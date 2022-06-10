const fs = require("fs");
const readStream = fs.createReadStream("largetext.txt");
const writeStream = fs.createWriteStream("writeStream.txt");

readStream.on("data", (chunk) => {
  //read from file and print in console
  console.log("#### new data ####");
  console.log(chunk.toString());

  //read from file and copy/paste in new file
  writeStream.write("#### new data ####");
  writeStream.write(chunk);
});

//read from file and copy in new one .pipe() method
readStream.pipe(writeStream);
