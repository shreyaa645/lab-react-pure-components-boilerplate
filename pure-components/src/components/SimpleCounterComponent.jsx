import {Component} from "react";

class SimpleCounterComponent extends Component {
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

      console.log("This is Simple Component.")

        return (
          <div>
            <h2>SIMPLE COUNTER</h2>
            <p  className='value'>{this.state.counter}</p>
            <button onClick={this.handleToggle} className="btn">Set toggle</button>
            <button onClick={this.handlecount} className="btn">Increment</button>
          </div>
        );
    }
}

export default SimpleCounterComponent;

