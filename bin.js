// run from home directory

// manages user configuration

// MVP
// - backs up existing configuration
//   - rename ${name}.backup
// - writes new configuration
//   - symlink to config git working directory 

const config = require('./config')

const run = require('./')

run(config, (err, results) => {
  if (err) throw err
  console.log(results)
})
