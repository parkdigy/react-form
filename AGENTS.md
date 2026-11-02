# 에이전트 코딩 가이드

## 프로젝트

`@pdg/react-form`은 React 19 기반 폼·검색 컴포넌트와 타입을 제공하는 TypeScript npm 패키지다. `src/index.ts`가 공개 API를 모으며 `examples/`는 패키지 배포물이 아닌 루트 소스를 직접 가져오는 별도 React 애플리케이션이다.

- 폼과 상태: `src/PForm/`, `src/PFormContext/`, `src/PFormContextProvider/`
- 입력·레이아웃·검색: `src/PFormItemTextFieldBase/`, `src/PFormItemCustom/`, `src/PFormCommon/`, `src/PFormLayout/`, `src/PSearch/`
- 공통 타입과 내부 구현: `src/@types/`, `src/@private/`, `src/@util.private/`. `*.private` 선언은 빌드 시 제거될 수 있으므로 공개 타입이 이를 참조하지 않는지 확인한다.
- 예제: `examples/src/component/`, `examples/src/router/`, `examples/src/layout/DefaultLayout/`. Rspack 설정은 `examples/rspack.config.js`, 개발 서버 기본 포트는 9808이다.
- 배포와 검사: `package.json`, `rollup.config.js`, `tsconfig.json`, `eslint.config.js`; 예제는 별도의 `package.json`, TypeScript·ESLint 설정을 사용한다.
- 상세 탐색 안내: [프로젝트 구조](docs/agents/project.md). 구현 절차: [npm 패키지 코딩 스킬](.agents/skills/npm-package-development/SKILL.md). 실제 코드가 문서보다 우선한다.

## 작업 원칙

1. 시작할 때 `git status --short`와 관련 소스·설정을 확인하고 기존 변경을 보존한다. 문서와 작업 결과는 한글로 작성한다.
2. 공개 API를 변경하면 `src/index.ts`와 하위 배럴, 타입 선언, 예제와 README를 함께 확인한다. 폼 값·검증·등록·제출을 변경할 때는 `PForm`, context, 해당 입력 컴포넌트의 상호작용을 확인한다.
3. React와 React DOM은 peer dependency다. 의존성 변경 시 루트와 예제의 사용처, peer 범위, `.nvmrc` 호환성 및 예제의 React 중복 여부를 확인한다. 현재 `@mui/x-date-pickers` peer는 7.x이고 개발 의존성은 8.x이므로 관련 변경에서 양쪽 호환성을 별도로 검증한다.
4. `dist/`, `examples/dist/`, 루트 `index.html`, `404.html`은 추적되는 생성물이다. 직접 편집하지 말고 빌드 전에 기존 변경과 덮어쓰기 영향을 확인한다. Rollup은 `dist/*`를 정리하고 예제 프로덕션 빌드는 `examples/dist/`를 정리한다. 예제 전체 빌드는 루트 HTML도 덮어쓴다.
5. 배포 설정 변경 시 패키지 목록과 실제 소비 환경의 import·require·타입 해석을 확인한다. 현재 `type: module`인데 CommonJS 출력이 `dist/index.js`이므로 Node의 require 호환성을 가정하지 않는다.
6. 커밋·푸시·npm 게시 명령은 요청됐을 때만 실행한다. `npm run pub`는 실제 게시하며, `git:commit`, `reset:gitignore`, `reinstall:module`은 각각 인덱스나 로컬 의존성을 변경한다.

## 검증

`.nvmrc`의 Node 버전을 사용한다. 루트와 예제 의존성은 별도다. `package-lock.json`은 Git 제외 대상이므로 설치 전에 기존 잠금 파일과 옵션을 확인하고 삭제·덮어쓰기에 주의한다.

```sh
npm run tsc
npm run lint
cd examples && npm run tsc && npm run lint
```

현재 테스트 파일과 npm `test` 스크립트는 없다. 동작 변경에는 적절한 테스트와 실제 실행 명령을 마련한다. Jest 설정은 Node 환경이고 변환 패턴에 `.tsx`가 없으므로 컴포넌트 테스트 시 변환과 DOM 환경을 확인한다.

라이브러리 빌드 변경 시 `npm run build`를 실행한다. Watchman 접근 오류가 있으면 `./node_modules/.bin/rollup -c --bundleConfigAsCjs`를 별도로 실행하고 표준 빌드의 실패와 구분해 보고한다. Rollup은 ESLint 경고도 실패로 처리한다. 예제 변경 시 `cd examples && npm run build:rspack`을 확인한다. 산출물 보존이 필요하면 출력 경로를 별도로 지정하고 설정의 복사 플러그인 등 부수 효과도 확인한다.

개발 서버의 HTTP 응답만으로 브라우저 렌더링이나 HMR이 검증된 것으로 간주하지 않는다. 문서만 수정할 때는 링크·경로·명령을 실제 설정과 대조한다. 완료 보고에 검증 결과와 미확인 사항을 남긴다.
