let [directory_path, extender_symbol, desired_length, ignore_extension] = process.argv.slice(2);

if (directory_path === undefined) {
  console.log("Can't work without an arguments !")
  console.log("Usage : node names_extender.js <directory_path> [extender_symbol] [desired_length] [ignore_extension]")
  process.exit(1)
}

if (extender_symbol === undefined) {
  extender_symbol = "0"
  console.log("Using default extender_symbol value : \"" + extender_symbol + "\"")
} else {
  if (extender_symbol.length > 1) {
    console.log("Note you supplied a multiple symbols to extend filenames with : " + "\"" + extender_symbol + "\"")
  }
}

if (desired_length === undefined) {
  desired_length = 9
  console.log("Using default desired_length length : " + desired_length)
} else {
  desired_length = parseInt(desired_length)
  if (isNaN(desired_length)) {
    console.log("The desired_length value isn't a number !")
    process.exit(3)
  }
}

if (ignore_extension === undefined) {
  ignore_extension = true
  console.log("Using default ignore_extension value : " + ignore_extension)
} else {
  ignore_extension = (ignore_extension.toLowerCase() === "true")
}

let fs = require("fs");
//note - readdir is asynchronous
fs.readdir(directory_path, (err, files) => {
  if (err) {
    console.log(err)
    process.exit(2)
  }
  files.forEach((file_name) => {
    let additional_length = (ignore_extension) ? (file_name.length - file_name.lastIndexOf(".")) : 0
    file_name = file_name.padStart(desired_length + additional_length, extender_symbol)
    console.log(file_name)
  })
})