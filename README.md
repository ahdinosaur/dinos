# dinos

TODO (**work in progess**)

a personal Debian Linux distribution using a custom configuration managment system with Node.js

## features

- base configuration management features
  - file (as a symlink)
  - directory (as a symlink)
  - shell script
  - git repo
  - apt package
  - apt source
- supports personal desktop environment configurations
  - android
  - apps
    - docs
    - photo
    - drawing
    - video
    - 3d
    -  circuits
  - base
  - desktop
  - dev
  - docker
  - git
  - postgres
  - ssh
  - video
  - vim
  - zsh

## start

_ignore_

```shell
# on debian: adduser dinosaur sudo
sudo apt install git nodejs npm
mkdir -p ~/repos/ahdinosaur
cd ~/repos/ahdinosaur
git clone git://github.com/ahdinosaur/dinos
cd dinos
npm install
node bin
```

## config

see [config](./config/README.md)

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
