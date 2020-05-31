module.exports = [
  // mumble
  {
    type: 'aptsource',
    name: 'ppa:mumble/release'
  },
  {
    type: 'aptpkg',
    packages: [
      'mumble',
      'mumble-server'
    ]
  },
  // port forwarding
  //   upnpc -r 64738 UDP 64738 TCP

  // teamspeak
  {
    type: 'aptsource',
    name: 'ppa:povidev/teamspeak'
  },
  {
    type: 'aptpkg',
    packages: [
      'teamspeak3-client',
      'teamspeak3-server'
    ]
  }
  // start teamspeak server with:
  //   sudo systemctl start teamspeak3-server.service
  // then look at logs for admin details
  //   journalctl -u teamspeak3-server.service
  // change voice port
  //   login serveradmin yourpassword
  //   serverstop sid=1
  //   use sid=1 -virtual
  //   serveredit virtualserver_port=19987
  //   use sid=0
  //   serverstart sid=1
  // port forwarding
  //   upnpc -r 19987 UDP 10011 TCP 10022 TCP 30033 TCP 41144 TCP
  // then open up teamspeak client and connect to server
  //   server address: 222.154.81.218
  //
  //
]
