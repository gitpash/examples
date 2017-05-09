async function main() {
  const x = await 42
  console.log(x)
}
// main()

const Bluebird = require("bluebird")
async function yo() {
  console.log(`working...`)
  // create 'thenable' object which wait for 2 sec and resume function flow
  await Bluebird.delay(2000)
  console.log(`done!`)
}
yo()