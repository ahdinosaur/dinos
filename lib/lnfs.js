
'use strict'
const path = require('path')
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')
const parallel = require('run-parallel')

const link = (fs, src, dest, type, cb) => parallel([
  rimraf(dest),
  mkdirp(path.dirname(dest))
], (err) => {
  if (err) cb(err)
  else fs.symlink(src, dest, type, cb)
})

module.exports = (fs, src, dest, type, cb) => {
  if (typeof src !== 'string' || typeof dest !== 'string') {
    throw new TypeError('Expected a string')
  }
  src = path.resolve(src)
  dest = path.resolve(dest)
  fs.lstat(dest, (err, stats) => {
    if (err) {
      if (err.code === 'ENOENT') {
        return link(fs, src, dest, type, cb)
      }
      return cb(err)
    }
    if (!stats.isSymbolicLink()) {
      return link(fs, src, dest, type, cb)
    }
    console.log('dest', dest)
    fs.realpath(dest, (err, res) => {
      console.log('dest', err, res)
      if (err) return cb(err)
      if (res !== src) link(fs, src, dest, type, cb)
      else cb()
    })
  })
}
