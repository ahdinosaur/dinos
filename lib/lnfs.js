
'use strict'
const path = require('path')
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')
const parallel = require('run-parallel')

const link = (src, dest, type, cb) => parallel([
  rimraf(dest),
  mkdirp(path.dirname(dest))
], () => fs.symlink(src, dest, type, cb))

module.exports = (fs) => (src, dest, type, cb) => {
  if (typeof src !== 'string' || typeof dest !== 'string') {
    throw new TypeError('Expected a string'))
  }
  src = path.resolve(src);
  dest = path.resolve(dest);
  return fs.lstat(dest, (err, stats) => {
    if (err) {
      if (err.code === 'ENOENT') {
        return link(src, dest, type, cb);
      }
      throw err
    }
    if (!stats.isSymbolicLink()) {
      return link(src, dest, type, cb);
    }
    realpath(dest, (err, res) => {
      if (err) return cb(err)
      if (res !== src) link(src, dest, type, cb)
      else cb()
    })
  })
}
