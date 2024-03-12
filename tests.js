let assert = require('assert')

function run(context) {

  assert.strictEqual("00000000.jpeg", context.extendName("0.jpeg",   "0", 8, false))
  assert.strictEqual("00000042.jpeg", context.extendName("42.jpeg",  "0", 8, false))
  assert.strictEqual("00000690.jpeg", context.extendName("690.jpeg", "0", 8, false))
  assert.strictEqual("00000000.png",  context.extendName("0.png",    "0", 8, false))
  assert.strictEqual("00000042.png",  context.extendName("42.png",   "0", 8, false))
  assert.strictEqual("00000690.png",  context.extendName("690.png",  "0", 8, false))

  assert.strictEqual("XX1.png",         context.extendName("1.png",         "X", 3, false))
  assert.strictEqual("999999.png",      context.extendName("999999.png",    "X", 3, false))
  assert.strictEqual("XX1.abracadabra", context.extendName("1.abracadabra", "X", 3, false))


  assert.strictEqual("000.jpeg", context.extendName("0.jpeg",   "0", 8, true))
  assert.strictEqual("042.jpeg", context.extendName("42.jpeg",  "0", 8, true))
  assert.strictEqual("690.jpeg", context.extendName("690.jpeg", "0", 8, true))
  assert.strictEqual("0000.png", context.extendName("0.png",    "0", 8, true))
  assert.strictEqual("0042.png", context.extendName("42.png",   "0", 8, true))
  assert.strictEqual("0690.png", context.extendName("690.png",  "0", 8, true))

  assert.strictEqual("1.png",         context.extendName("1.png",         "X", 3, true))
  assert.strictEqual("999999.png",    context.extendName("999999.png",    "X", 3, true))
  assert.strictEqual("1.abracadabra", context.extendName("1.abracadabra", "X", 3, true))


  //ansi codes to print green message ... at least in powershell :)
  console.log("\x1b[32m" + "DEV : all automatic tests passed !" + "\x1b[0m")
  
}

module.exports = {
  run: run
}