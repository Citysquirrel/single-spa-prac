본 레포지토리는 single-spa 프로젝트 앱을 연습하기 위해 생성한 것입니다. mono-repository의 예제입니다. 실제 서비스로 사용시 submodule을 활용해 프로젝트를 구성하는 것도 좋은 방법입니다.

# root-config/
single-spa의 메인 화면을 컨트롤 해주는 프로젝트
- layout.html: 앱 전체의 라우팅을 컨트롤
- index.ejs: 실제 브라우저에서 확인할 수 있는 기초적인 index 파일. single-spa 구성에 필요한 각종 패키지 import 담당. importmap 설정이 포함되어있음
- 실행시 루트에 `.env.development` 필요
- 9000 PORT

# react-app/
create-single-spa를 통해 생성된 single-spa를 위한 새로운 react 앱. 특별히 구성된 페이지는 없음
* 8080 PORT

# angular-app/
기존에 구성되어 있는 angular 앱. 여기선 chatGPT로 생성한 간단한 쇼핑앱 페이지로 구성되어 있음
* 4200 PORT


# 설치 및 실행
1. 각 폴더 별로 `npm install` 실행.
2. 각 프로젝트 별로 `npm start` 실행
3. `localhost:9000`로 접속
