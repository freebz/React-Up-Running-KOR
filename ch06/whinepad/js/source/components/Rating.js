import classNames from 'classnames';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rating: props.defaultValue,
      tmpRating: props.defaultValue,
    };
  }

  getValue() { // 모든 입력이 이를 제공
    return this.state.rating;
  }

  setTemp(rating) { // 위로 마우스 올림
    this.setState({tmpRating: rating});
  }

  setRating(rating) { // 클릭
    this.setState({
      tmpRating: rating,
      rating: rating,
    });
  }

  reset() { // 마우스가 벗어남, 원래의 등급으로 복원
    this.setTemp(this.state.rating);
  }

  componentWillReceiveProps(nextProps) { // 외부 변경에 반응
    this.setRating(nextProps.defaultValue);
  }

  render() {
    const stars = [];
    for (let i = 1; i <= this.props.max; i++) {
      stars.push(
	<span
	  className={i <= this.state.tmpRating ? 'RatingOn' : null}
	  key={i}
	  onClick={!this.props.readonly ? this.setRating.bind(this, i) : null}
	  onMouseOver={!this.props.readonly ? this.setTemp.bind(this, i) : null}
	>
	&#9734;
	</span>);
    }
    return (
      <div
        className={classNames({
	  'Rating': true,
	  'RatingReadonly': this.props.readonly,
	})}
        onMouseOut={this.reset.bind(this)}
      >
        {stars}
	{this.props.readonly || !this.props.id
	  ? null
	  : <input
	      type="hidden"
	      id={this.props.id}
	      value={this.state.rating} />
	}
      </div>
    );
  }
}

Rating.propTypes = {
  defaultValue: PropTypes.number,
  readonly: PropTypes.bool,
  max: PropTypes.number,
};

Rating.defaultProps = {
  defaultValue: 0,
  max: 5,
};

export default Rating
