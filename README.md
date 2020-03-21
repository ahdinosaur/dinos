# dinos

TODO (**work in progess**)

a personal Debian Linux distribution using a custom configuration managment system with Node.js

## features

- [ ] provides base configuration management features
  - [x] file (as a symlink)
  - [x] directory (as a symlink)
  - [x] shell script
  - [x] git repo
  - [x] apt package
  - [x] apt source
- [ ] supports personal desktop environment configurations
  - [x] debian
  - [ ] users
  - [x] zsh
  - [x] vim
  - [ ] nvm
  - [ ] rvm
  - [?] desktop (kde + i3)
  - [ ] wifi
  - [x] git
  - [?] web
  - [ ] printer
  - [ ] word
  - [ ] spreadsheet
  - [ ] photo
  - [ ] drawing
  - [ ] video
  - [ ] 3d
  - [ ] circuits
- [ ] graphical interface to show configuration and status
  - [ ] detect conflicting changes but don't override without permission

## start

_ignore_

```shell
# on debian: adduser dinosaur sudo
sudo apt install git node npm
mkdir -p ~/repos/ahdinosaur
cd ~/repos/ahdinosaur
git clone git://github.com/ahdinosaur/dinos
cd dinos
npm install
node bin
```

## config

see [config](./config/README.md)

## plugin format

_ignore_

a "plugin" is a `dinos` module:

- is passed a configuration
- reads the current state of the machine
- compares the current state with the intended state
- changes the current state to match the intended state
- provides progress updates and status on the success or failure of the change

## history

1. dotfiles (Ubuntu -> Arch Linux): [`dotfiles2`](https://github.com/ahdinosaur/dotfiles2) / [`dotfiles`](https://github.com/ahdinosaur/dotfiles) / [`dot`](https://github.com/ahdinosaur/dot)
1. CfEngine3 (Gentoo): [`command-center`](https://github.com/ahdinosaur/command-center) / [`blue-dream-masterfiles`](https://github.com/ahdinosaur/blue-dream-masterfiles) / [`bootstraps`](https://github.com/ahdinosaur/bootstraps) / [`dinolay`](https://github.com/ahdinosaur/dinolay)
1. Puppet (Debian): [`dino-puppet`](https://github.com/ahdinosaur/dino-puppet)
1. Salt Stack (Debian): [`ahdinosaur-os`](https://github.com/ahdinosaur-os/config)

## license

The Apache License

Copyright &copy; 2017 Michael Williams

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
