module.exports = tryCatch

function tryCatch (fn, cb) {
  var result, err = null
  try {
    result = fn()
  } catch (_err) {
    err = _err
  }
  cb(err, result)
}
