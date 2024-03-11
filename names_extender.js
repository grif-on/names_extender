let defaultArguments = {
  extender_symbol: "0",
  desired_length: 9,
  ignore_extension: true
}

function printUsage() {
  console.log("Usage : node names_extender.js <directory_path> [extender_symbol] [desired_length] [ignore_extension]\n")
  
  console.log("@param {string} directory_path - the path to the directory in wich to extend the names of the files .")
  console.log("@param {string} extender_symbol - the symbol to extend the filenames with . The default value is \"" + defaultArguments.extender_symbol + "\" .")
  console.log("@param {number} desired_length - the length of the filenames after extending . The default value is " + defaultArguments.desired_length + " .")
  console.log("@param {boolean} ignore_extension - desired_length should not include the extension length . The default value is " + defaultArguments.ignore_extension + " .")
}


let [directory_path, extender_symbol, desired_length, ignore_extension] = process.argv.slice(2)

if (directory_path === undefined) {
  console.log("Can't work without directory_path argument !\n")
  printUsage()
  process.exit(1)
}

if (directory_path === "-h" || directory_path === "--help" || directory_path === "/?") {
  printUsage()
  process.exit(0)
}

if (extender_symbol === undefined) {
  extender_symbol = defaultArguments.extender_symbol
} else {
  if (extender_symbol.length > 1) {
    console.log("Note you supplied a multiple symbols to extend filenames with : " + "\"" + extender_symbol + "\"")
  }
}

if (desired_length === undefined) {
  desired_length = defaultArguments.desired_length
} else {
  desired_length = parseInt(desired_length)
  if (isNaN(desired_length)) {
    console.log("The desired_length value isn't a number !")
    process.exit(3)
  }
}

if (ignore_extension === undefined) {
  ignore_extension = defaultArguments.ignore_extension
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