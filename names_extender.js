const arg = process.argv.slice(2)

if (arg.length < 1) {
  console.log("Can't work without an arguments !")
  console.log("Usage : node names_extender.js <directory_path> [desired_length]")
  process.exit(1)
}


let desired_length = 9

if (arg.length < 2) {
  console.log("Using default desired_length length : " + desired_length)
} else {
  desired_length = arg[1]
}

let fs = require("fs");
//note - readdir is asynchronous
fs.readdir(arg[0], (err, files) => {
  if (err) {
    console.log(err)
    process.exit(2)
  }
  files.forEach((file_name) => {
    file_name = file_name.padStart(desired_length, "X")
    console.log(file_name)
  })
})