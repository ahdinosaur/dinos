// https://github.com/Burnett01/node-passwd/blob/master/passwd-groups.js

module.exports = getGroup

function getGroup (fs, name, cb) {
  getGroups(fs, function (err, groups) {
    if (err) cb(err, null)
    for (var i = 0; i < groups.length; i++) {
      var group = groups[i]
      if (group.name === name) {
        cb(null, group)
        return
      }
    }
    cb(new Error('Group was not found!'), null)
  })
}

function getGroups (fs, cb) {
  fs.readFile('/etc/group', function (err, groupsContent) {
    if (err) cb(err, null)
    const groups = groupsContent
      .toString()
      .split('\n')
      .filter(function (group) {
        return group.length && group[0] !== '#'
      })
      .map(function (group) {
        var fields = group.split(':')
        return {
          name: fields[0],
          password: fields[1],
          id: Number(fields[2]),
          members: fields[3].split(',')
        }
      })
    cb(null, groups)
  })
}
