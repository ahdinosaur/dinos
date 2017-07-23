const { join } = require('path')

module.exports = {
  test: [
    {
      type: 'link',
      source: join(__dirname, 'test.txt'),
      target: 'test.txt'
    },
    {
      type: 'exec',
      command: 'echo hello world'
    }
  ],
  zsh: require('./zsh')
}
