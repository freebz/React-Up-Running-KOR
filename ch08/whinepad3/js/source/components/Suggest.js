/* @flow */

import React, {Component} from 'react';

type Props = {
  id?: string,
  defaultValue?: string,
  options: Array<string>,
};

type State = {
  value: string,
};

class Suggest extends Component<Props, State> {

  props: Props;
  state: State;
  
  constructor(props: Props) {
    super(props);
    this.state = {value: props.defaultValue || ''};
  }
  
  getValue() {
    return this.state.value; // `ref`를 사용하지 않음
  }

  render() {
    const randomid = Math.random().toString(16).substring(2);
    return (
      <div>
        <input
          list={randomid}
          defaultValue={this.props.defaultValue}
          onChange={e => this.setState({value: e.target.value})}
          id={this.props.id} />
        <datalist id={randomid}>{
	  this.props.options.map((item, idx) =>
	    <option value={item} key={idx} />
	  )
	}</datalist>      
      </div>
    );
  }
}

export default Suggest
