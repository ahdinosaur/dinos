const { join } = require('path')

const aptSourceList = join(__dirname, 'sources.list')
const aptConf10Release = join(__dirname, 'apt.conf.d/10release')

module.exports = [
  {
    type: 'exec',
    command: `cat ${aptSourceList} | sudo tee /etc/apt/sources.list`
  },
  {
    type: 'exec',
    command: `cat ${aptConf10Release} | sudo tee /etc/apt/apt.conf.d/10release`
  }
]
