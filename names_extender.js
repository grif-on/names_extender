let defaultArguments = {
  extender_symbol: "0",
  desired_length: 9,
  include_extension: false
}

function printUsage() {
  console.log("Usage : node names_extender.js <directory_path> [extender_symbol] [desired_length] [include_extension]\n")

  console.log("@param {string} directory_path - the path to the directory in wich to extend the names of the files .")
  console.log("@param {string} extender_symbol - the symbol to extend the filenames with . The default value is \"" + defaultArguments.extender_symbol + "\" .")
  console.log("@param {number} desired_length - the length of the filenames after extending . The default value is " + defaultArguments.desired_length + " .")
  console.log("@param {boolean} include_extension - also include the extension length (with dot) as part of desired_length . The default value is " + defaultArguments.include_extension + " .")
}


let [directory_path, extender_symbol, desired_length, include_extension] = process.argv.slice(2)

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

if (include_extension === undefined) {
  include_extension = defaultArguments.include_extension
} else {
  include_extension = (include_extension.toLowerCase() === "true")
}


function extendName(name, extender_symbol, desired_length, include_extension) {
  let additional_length = 0
  let dot_position = name.lastIndexOf(".")

  if (!(dot_position < 0 || include_extension)) {
    additional_length = name.length - dot_position
  }

  return name.padStart(desired_length + additional_length, extender_symbol)
}

let fs = require("fs")
//note - readdir is asynchronous
fs.readdir(directory_path, (err, files) => {
  console.log("Renaming :")
  if (err) {
    console.log(err)
    process.exit(2)
  }
  files.forEach((file_name) => {

    let new_file_name = extendName(file_name, extender_symbol, desired_length, include_extension)

    if (new_file_name === file_name) {
      console.log(file_name.padEnd(desired_length + 7, " ") + "   skipped   (name already satisfies desired length)")
    } else {
      console.log(new_file_name.padEnd(desired_length + 7, " ") + "<--   " + file_name)
      fs.renameSync(directory_path + "/" + file_name, directory_path + "/" + new_file_name, (err) => {
        if (err) {
          console.log(err)
          process.exit(4)
        }
      })
    }

  })
  console.log("Done .")
})



require("./tests.js").run({ extendName: extendName })