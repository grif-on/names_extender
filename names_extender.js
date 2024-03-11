const arg = process.argv.slice(2)

if (arg.length < 1) {
  console.log("Can't work without an arguments !")
  process.exit(1)
}

console.log(arg)