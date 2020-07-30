# WEBPACK STUDY

> 뚝딱뚝딱 웹팩을 배워봅니다 🤩

## 튜토리얼

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
