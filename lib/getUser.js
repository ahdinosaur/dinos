module.exports = getUser

function getUser (fs, username, cb) {
  getUsers(fs, function (err, users) {
    if (err) cb(err, null)
    for (var i = 0; i < users.length; i++) {
      var user = users[i]
      if (user.username === username) {
        cb(null, user)
        return
      }
    };
    cb(new Error('User was not found!'), null)
  })
};

function getUsers (fs, cb) {
  fs.readFile('/etc/passwd', function (err, usersContent) {
    if (err) cb(err, null)
    const users = usersContent
      .toString()
      .split('\n')
      .filter(function (user) {
        return user.length && user[0] !== '#'
      })
      .map(function (user) {
        var fields = user.split(':')
        return {
          username: fields[0],
          password: fields[1],
          userId: Number(fields[2]),
          groupId: Number(fields[3]),
          name: fields[4],
          homedir: fields[5],
          shell: fields[6]
        }
      })
    cb(null, users)
  })
}
