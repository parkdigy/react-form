# 프로젝트 구조와 개발 참고

## 분석 범위

2026-11-02 기준 소스, 설정, npm 스크립트를 분석했다. 이 문서는 탐색 안내이며 실제 코드와 설정이 변경되면 해당 파일을 우선하고 문서도 갱신한다.

`@pdg/react-form`은 React 폼 컴포넌트와 타입을 제공하는 npm 패키지다. `src/index.ts`가 공개 API를 내보내며 예제는 라이브러리 소스를 직접 가져와 렌더링한다. 루트에 Jest 설정은 있지만 테스트 파일과 npm `test` 스크립트는 없다.

## 파일별 책임

| 경로 | 책임 |
| --- | --- |
| `src/index.ts`, `src/PForm*`, `src/PSearch` | 라이브러리 공개 진입점과 폼 컴포넌트 |
| `examples/src/` | React, React Router 기반 데모. 폼 예제에서 루트의 `src`를 직접 가져옴 |
| `examples/package.json`, `examples/rspack.config.js` | 별도 의존성과 Rspack 개발 서버·프로덕션 번들 설정 |
| `package.json`, `rollup.config.js` | 공개 진입점, peer dependency, 배포 파일 및 Rollup 빌드 |
| `tsconfig.json`, `examples/tsconfig.json` | 각각 라이브러리와 예제 타입 검사. 예제 검사는 루트 `src/`도 포함 |
| `jest.config.ts`, `tsconfig.test.json` | Jest와 ts-jest 설정. 현재 테스트 스크립트와 테스트 파일은 없음 |
| `eslint.config.js`, `examples/eslint.config.mjs` | 각각 라이브러리와 예제 정적 검사 설정 |
| `.nvmrc` | Node `24.22.1` 지정 |
| `.gitignore`, `.npmignore` | Git 추적과 npm 배포 제외 설정 |

## 빌드와 의존성

`src/index.ts`를 Rollup이 CommonJS 코드 `dist/index.js`, ES 모듈 `dist/index.esm.js`, 타입 선언 `dist/index.d.ts`로 출력한다. 패키지의 `main`·`module`·`types` 및 `exports`가 이 경로를 가리킨다. Rollup은 `dependencies`와 `peerDependencies`를 외부 처리한다. React와 React DOM은 `>=19.0.0` peer dependency이며 예제는 두 패키지를 별도로 선언한다.

Rollup은 빌드 시작 시 `dist/*`를 정리하며 `.private` 접미사 디렉터리와 `.private.d.ts` 파일을 선언 결과에서 제거한다. 공개 선언이 삭제된 타입을 참조하지 않는지 확인한다. 라이브러리와 예제 모두 TypeScript의 `moduleResolution: bundler`를 사용한다. 예제의 `@comp`, `@ccomp`, `@common` 경로는 예제 TypeScript 및 Rspack 설정에서 해석한다.

루트 Babel은 Rollup 플러그인의 peer 범위 때문에 7.x를 사용한다. ESLint는 `@rollup/plugin-eslint`와 `eslint-plugin-react` peer 범위에 맞춰 9.x이고, TypeScript는 `typescript-eslint`와 `ts-jest` 범위에 맞춰 6.x다. 의존성을 변경할 때 현재 peer 범위를 다시 확인한다.

## 명령 안내

루트 기준이다. 예제 명령에는 `examples/` 의존성이 별도로 필요하다.

| 목적 | 명령 | 주의점 |
| --- | --- | --- |
| 라이브러리 타입 검사 | `npm run tsc` | `src/` 대상 |
| 라이브러리 lint | `npm run lint` | `src/**/*.{ts,tsx}` 대상 |
| 라이브러리 빌드 | `npm run build` | Watchman 재등록 후 Rollup 실행. 테스트는 실행하지 않음 |
| Rollup만 실행 | `./node_modules/.bin/rollup -c --bundleConfigAsCjs` | `dist/*` 정리 후 생성. 표준 빌드 전체의 통과를 뜻하지 않음 |
| 예제 개발 서버 | `npm run dev` | Rspack 개발 서버, 기본 포트 9808 |
| 예제 검사 | `cd examples && npm run tsc && npm run lint` | 타입 검사는 루트 소스도 포함 |
| 예제 번들 확인 | `cd examples && npm run build:rspack` | Rspack 프로덕션 빌드 |
| 예제 전체 빌드 | `npm run build:examples` | 예제 결과를 정리·생성하고 루트 `index.html`, `404.html`에 복사 |
| 배포 파일 확인 | `npm pack --dry-run` | 실제 게시하지 않음 |

`npm run pub`는 설치·예제 빌드·라이브러리 빌드·공개 npm 게시를 수행한다. 마지막의 `|| true` 때문에 종료 코드만으로 게시 성공을 판단하면 안 된다. `git:commit`은 `git add .`를 실행하고 `reset:gitignore`는 전체 인덱스를 재구성하며 `reinstall:module`은 의존성과 잠금 파일을 삭제한다.

## 검토할 사항

1. **모듈 형식:** `"type": "module"`인 패키지에서 CommonJS 출력 경로가 `.js`다. Node의 `require` 진입점 호환성은 별도 검증이 필요하다. 배포 설정 변경 시 실제 소비자의 `import`·`require`·타입 해석을 확인한다.
2. **예제와 소비자:** 예제는 설치된 패키지가 아니라 루트 소스를 직접 사용한다. 예제 빌드 성공은 배포물의 소비 호환성을 보장하지 않는다. React가 중복으로 번들되지 않는지도 확인한다.
3. **테스트:** 현재 Jest 설정의 변환 정규식은 `.js`와 `.ts`만 포함하고 환경은 Node다. React 컴포넌트 테스트를 추가할 때 `.tsx` 변환과 필요한 DOM 환경을 별도로 구성하고 실행 명령을 마련한다.
4. **생성 파일:** `dist/`, 예제 `dist/`, 루트 `index.html`, `404.html`은 Git 추적 대상이며 잠금 파일은 Git 제외 대상이다. 예제 전체 빌드가 기존 파일을 덮어쓸 수 있으므로 실행 전 확인한다.
5. **검증 범위:** 루트 타입 검사와 lint는 예제 검사를 대신하지 않는다. Rollup은 ESLint 경고도 실패로 처리하므로 별도 lint 성공만으로 번들 성공을 보장하지 않는다.
