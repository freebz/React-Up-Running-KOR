// JSX와 HTML의 차이점

// className과 htmlFor

// 불가능!
var em = <em class="important" />;
var label = <label for="thatInput" />;

// 가능
var em = <em className="important" />;
var label = <label htmlFor="thatInput" />;



// style이 객체로 취급됨

// 불가능!
var em = <em style="font-size: 2em; line-height: 1.6" />;

// 가능
var styles = {
  fontSize: '2em',
  lineHeight: '1.6'
};

var em = <em style={style} />;

// 인라인도 가능
// 이중 중괄호는 각각 JSX의 동적 값과 자바스크립트 객체를 위한 것이다.
var em = <em style={ {fontSize: '2em', lineHeight: '1.6'} } />;



// 닫는 태그

// 불가능!
// HTML에서는 괜찮지만 닫는 태그가 없음
var gimmeabreak = <br>;
var list = <ul><li>item</ul>;
var meta = <meta charset="utf-8">;

// 가능
var gimmeabreak = <br />;
var list = <ul><li>item</li></ul>
var meta = <meta charSet="utf-8" />;

// 또는
var meta = <meta charSet="utf-8"></meta>;



// 캐멀표기법으로 속성 표기

// 불가능!
var a = <a onclick="reticulateSplines()" />;

// 가능
var a = <a onClick={reticulateSplines} />;
