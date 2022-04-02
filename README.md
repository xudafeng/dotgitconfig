# dotgitconfig

---

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/dotgitconfig.svg
[npm-url]: https://npmjs.org/package/dotgitconfig
[travis-image]: https://img.shields.io/travis/xudafeng/dotgitconfig.svg
[travis-url]: https://travis-ci.org/xudafeng/dotgitconfig
[coveralls-image]: https://img.shields.io/coveralls/xudafeng/dotgitconfig.svg
[coveralls-url]: https://coveralls.io/r/xudafeng/dotgitconfig?branch=master
[node-image]: https://img.shields.io/badge/node.js-%3E=_8-green.svg
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/dotgitconfig.svg
[download-url]: https://npmjs.org/package/dotgitconfig

> get .git/config as an object

<!-- GITCONTRIBUTOR_START -->

## Contributors

|[<img src="https://avatars.githubusercontent.com/u/1011681?v=4" width="100px;"/><br/><sub><b>xudafeng</b></sub>](https://github.com/xudafeng)<br/>|[<img src="https://avatars.githubusercontent.com/u/10104168?v=4" width="100px;"/><br/><sub><b>yihuineng</b></sub>](https://github.com/yihuineng)<br/>|
| :---: | :---: |


This project follows the git-contributor [spec](https://github.com/xudafeng/git-contributor), auto updated at `Sat Apr 02 2022 20:48:05 GMT+0800`.

<!-- GITCONTRIBUTOR_END -->

## Installment

```bash
$ npm i dotgitconfig --save-dev
```

## Usage

```javascript
const dotgitconfig = require('dotgitconfig');
dotgitconfig(process.cwd());
```

## License

The MIT License (MIT)
