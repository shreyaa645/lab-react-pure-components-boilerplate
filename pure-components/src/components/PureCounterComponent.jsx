import { PureComponent } from 'react';


class PureCounterComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      toggle: false,
    };
  }

  handleToggle = () => {
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
    }));
  };

  handlecount = () => {
    if (this.state.toggle) {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }
  };

  render() {

    console.log("This is pure Component.")

    return (
      <div>
        <h2>PURE COUNTER</h2>
        <p className='value'>{this.state.counter}</p>
        <button onClick={this.handleToggle} className="btn">Set toggle</button>
        <button onClick={this.handlecount} className="btn">Increment</button>
      </div>
    );
  }
}

export default PureCounterComponent;