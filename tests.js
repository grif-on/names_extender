let assert = require('assert')

function run(context) {

  let test_name = "normal ussage"
  assert.strictEqual("00000000.jpeg", context.extendName("0.jpeg",   "0", 8, false), test_name)
  assert.strictEqual("00000042.jpeg", context.extendName("42.jpeg",  "0", 8, false), test_name)
  assert.strictEqual("00000690.jpeg", context.extendName("690.jpeg", "0", 8, false), test_name)
  assert.strictEqual("00000000.png",  context.extendName("0.png",    "0", 8, false), test_name)
  assert.strictEqual("00000042.png",  context.extendName("42.png",   "0", 8, false), test_name)
  assert.strictEqual("00000690.png",  context.extendName("690.png",  "0", 8, false), test_name)

  test_name = "should work with different extensions length"
  assert.strictEqual("XX1.png",         context.extendName("1.png",         "X", 3, false), test_name)
  assert.strictEqual("XX1.abracadabra", context.extendName("1.abracadabra", "X", 3, false), test_name)

  test_name = "should not modify the name if desired_length is greater than the name length"
  assert.strictEqual("999999.png",      context.extendName("999999.png",    "X", 3, false), test_name)

  test_name = "should work with extensionless files too"
  assert.strictEqual("====2", context.extendName("2",  "=", 5, false), test_name)
  assert.strictEqual("===24", context.extendName("24", "=", 5, false), test_name)
  assert.strictEqual("26",    context.extendName("26", "=", 1, false), test_name)


  test_name = "normal ussage (extension included)"
  assert.strictEqual("000.jpeg", context.extendName("0.jpeg",   "0", 8, true), test_name)
  assert.strictEqual("042.jpeg", context.extendName("42.jpeg",  "0", 8, true), test_name)
  assert.strictEqual("690.jpeg", context.extendName("690.jpeg", "0", 8, true), test_name)
  assert.strictEqual("0000.png", context.extendName("0.png",    "0", 8, true), test_name)
  assert.strictEqual("0042.png", context.extendName("42.png",   "0", 8, true), test_name)
  assert.strictEqual("0690.png", context.extendName("690.png",  "0", 8, true), test_name)

  test_name = "should work with different extensions length (extension included)"
  assert.strictEqual("1.png",         context.extendName("1.png",         "X", 3, true), test_name)
  assert.strictEqual("1.abracadabra", context.extendName("1.abracadabra", "X", 3, true), test_name)

  test_name = "should not modify the name if desired_length is greater than the name length (extension included)"
  assert.strictEqual("999999.png",    context.extendName("999999.png",    "X", 3, true), test_name)

  test_name = "should work with extensionless files too (extension included)"
  assert.strictEqual("====2", context.extendName("2",  "=", 5, true), test_name)
  assert.strictEqual("===24", context.extendName("24", "=", 5, true), test_name)
  assert.strictEqual("26",    context.extendName("26", "=", 1, true), test_name)


  //ansi codes to print green message ... at least in powershell :)
  console.log("\x1b[32m" + "DEV : all automatic tests passed !" + "\x1b[0m")
  
}

module.exports = {
  run: run
}