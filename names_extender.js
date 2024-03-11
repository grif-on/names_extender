let [directory_path, desired_length] = process.argv.slice(2);

if (directory_path === undefined) {
  console.log("Can't work without an arguments !")
  console.log("Usage : node names_extender.js <directory_path> [desired_length]")
  process.exit(1)
}

if (desired_length === undefined) {
  desired_length = 9
  console.log("Using default desired_length length : " + desired_length)
}

let fs = require("fs");
//note - readdir is asynchronous
fs.readdir(directory_path, (err, files) => {
  if (err) {
    console.log(err)
    process.exit(2)
  }
  files.forEach((file_name) => {
    file_name = file_name.padStart(desired_length, "X")
    console.log(file_name)
  })
})