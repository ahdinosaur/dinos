const { join } = require('path')

module.exports = {
  test: [
    {
      type: 'link',
      source: join(__dirname, 'test.txt'),
      target: 'test.txt'
    }
  ]
}
