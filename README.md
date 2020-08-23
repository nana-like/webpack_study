# WEBPACK STUDY

> 뚝딱뚝딱 웹팩을 배워봅니다 🤩

## Node.js

### NPM

`npm i`로 로컬 설치할 때 배포용(dependencies)과 개발용(devDependencies)을 구별할 수 있다.
`--save-dev` 또는 `-D` 옵션을 넣으면 개발용으로 설치된다.

- dependencies: 화면 로직과 관련된 라이브러리. ex) jquery-ui
- devDependencies: 개발 환경에 필요한 라이브러리. ex) webpack

어떤 옵션으로 설치됐는지는 package.json에서 확인 가능하다.
devDependencies에 들어간 라이브러리는 빌드하고 배포할 때 애플리케이션 코드에선 빠지게 된다.

### package.json

- 프로젝트 정보의 디펜던시(의존성)를 관리하는 문서. 이 문서를 통해 어느 곳에서든 동일한 개발 환경을 구축할 수 있다.
- `package-lock.json`은 npm으로 node_modules 트리나 package.json 파일을 수정하게 되면 자동으로 생성되는 파일이다. 이 파일은 정확한 버전 정보를 기록하므로, 항상 같은 의존성 구조를 갖도록 할 수 있다.

---

## 시작하기

### 개발 환경 구성

1. 웹팩 설치

```Shell
npm init -y
npm i webpack webpack-cli -D
npm i lodash
```

2. index.js 생성

```JS
// index.js

import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
```

3. 웹팩 설정 (webpack.config.js 설정)

```JS
// webpack.config.js

var path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

4. 빌드 설정

```JSON
// package.json

"scripts": {
  "build": "webpack"
}
```

5. 빌드

```Shell
npm run build #결과: dist 폴더 아래 main.js 생성
```

### 웹팩 사용 비교

- 웹팩을 사용하지 않았다면...
  1. index.html 요청
  2. lodash.js 요청
  3. main.js 요청

- 웹팩을 사용하면
  1. index.html 요청
  2. main.js 요청

> HTTP 요청이 줄어드는 효과! (우와아)

### 웹팩 Config

#### Mode

```JS
module.exports = {
  mode: 'none'
}
```

- 웹펙 버전 4에 추가된 개념. 모드에 따라 결과물이 조금씩 달라진다.
  - `none`: 설정하지 않음
  - `development`: 개발 모드. 웹팩 로그나 결과물이 포함됨.
  - `production`: 배포 모드. 파일 압축 등의 빌드 과정이 추가됨. 값을 지정하지 않을 경우 디폴트로 설정된다.

#### Path

```js
var path = require('path');

module.exports = {
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

- Path 모듈은 Node.js에서 제공하는 경로 모듈이다. `require('path')`로 가져와 사용한다.
- `__filename`과 `__dirname`을 통해 현재 파일명과 파일경로를 가져올 수 있어, "src/style/main/layout...아 뭐였지." 하는 상황을 줄일 수 있을 것 같다 (*ﾟﾛﾟ)
- `path.resolve([from ...], to)`는 `to`를 절대 경로로 변환해 준다. `to`가 절대 경로가 아니라면 절대 경로를 찾을 때까지 `from`의 arguments를 이어붙인다. 이 과정에서 `/`를 만나면 절대 경로로 인식해 앞의 경로를 무시한다. `from`을 사용해도 절대 경로를 찾지 못한다면 현재 디렉토리를 사용한다.
  - ex) `path.resolve('/a', '/b', 'c')` ==> 결과값: /b/c
  - ex) `path.resolve('nice/to', 'meet/you/again', '../nana')` ==> 결과값: 현재경로/nice/to/meet/you/nana
