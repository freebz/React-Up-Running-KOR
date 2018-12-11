// JSX와 폼

// onChange 핸들러

// value와 defaultValue

i.value; // "bye"
i.getAttribute('value'); // "hello"


function log(event) {
  console.log("value: ", event.target.value);
  console.log("defaultValue: ", event.target.defaultValue);
}

React.render(
  <input defaultValue="hello" onChange={log} />,
  document.getElementById('app')
);



// <textarea>와 value

function log(event) {
  console.log(event.target.value);
  console.log(event.target.defaultValue);
}

React.render(
  <textarea defaultValue="hello\nworld" onChange={log} />,
  document.getElementById('app1')
);
React.render(
  <textarea defaultValue={"hello\nworld"} onChange={log} />,
  document.getElementById('app2')
);
React.render(
  <textarea onChange={log}>hello
world
  </textarea>,
  document.getElementById('app3')
);
React.render(
  <textarea onChange={log}>{"hello\n\
world"}
  </textarea>,
  document.getElementById('app4')
);



// <select>와 value

<!-- 기존 HTML -->
<select>
  <option value="stay">Should I stay</option>
  <option vaue="move" selected>or should I go</option>
</select>


// React/JSX
<select defaultValue="move">
  <option value="stya">Should I stay</option>
  <option value="move"or should I go</option>
</select>


<select defaultValue={["stay", "move"]} multiple={true}>
  <option value="stay">Should I stay</option>
  <option value="move">or should I go</option>
  <option value="trouble">If I stay it will be trouble</option>
</select>


var MySelect = React.createClass({
  getInitialState: function() {
    return {value: 'move'};
  },
  _onChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    return (
      <select value={this.state.value} onChange={this._onChange}>
        <option value="stay">Should I stay</option>
        <option value="move">or should I go</option>
        <option value="trouble">If I stay it will be trouble</option>
      </select>
    );
  }
});
