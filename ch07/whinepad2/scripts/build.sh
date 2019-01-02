# 품질 관리
eslint js/source js/__test__
flow
npm test

# js 트랜스 폼
babel --presets react,es2015 js/source -d js/build

# js 패키징
browserify js/build/app.js -o bundle.js
browserify js/build/discover.js -o discover-bundle.js

# css 패키징
cat css/*/* css/*.css | sed 's/..\/..\/images/images/g' > bundle.css

# 완료
date; echo;
