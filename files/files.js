const fs = require("fs");
//read file
fs.readFile("./files/note.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else console.log(data.toString());
});

//write file
fs.writeFile("./files/note1.txt", "A new message", (err, data) => {
  if (err) {
    console.log(err);
  } else console.log("A new message created");
});

//append file
fs.appendFile("./files/note.txt", "A new message 2\r\n", (err, data) => {
  if (err) {
    console.log(err);
  } else console.log("A new message created");
});

//create new folder
if (!fs.existsSync("newFolder")) {
  fs.mkdir("newFolder", (err, data) => {
    if (err) {
      console.log(err);
    } else console.log("New folder created");
  });
} else console.log("The folder already exists");

//delete folder
if (fs.existsSync("newFolder")) {
  fs.rmdir("newFolder", (err, data) => {
    if (err) {
      console.log(err);
    } else console.log("Folder deleted");
  });
} else console.log("The folder was already deleted");

//delete file
if (fs.existsSync("./files/note.txt")) {
  fs.unlink("./files/note.txt", (err, data) => {
    if (err) {
      console.log(err);
    } else console.log("File deleted");
  });
} else console.log("The file was already deleted");
