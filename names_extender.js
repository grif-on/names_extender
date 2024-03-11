const arg = process.argv.slice(2)

if (arg.length < 1) {
  console.log("Can't work without an arguments !")
  process.exit(1)
}


let desired_length = 9

if (arg.length < 2) {
  console.log("Using default desired_length length : " + desired_length)
} else {
  desired_length = arg[1]
}

console.log(arg)