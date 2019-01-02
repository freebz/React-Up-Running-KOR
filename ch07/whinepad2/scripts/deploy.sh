# 마지막 버전을 정리
rm -rf __deployme
mkdir __deployme

# 빌드
sh scripts/build.sh

# JS 축소
uglify -s bundle.js -o __deployme/bundle.js
# CSS 축소
cssshrink bundle.css > __deployme/bundle.css
# HTML과 이미지 복사
cp index.html __deployme/index.html
cr -r images/ __deployme/images/

# 완료
date; echo;
