// import components
import { Component } from "react";

class MyInput extends Component{
  constructor(props) {
    super(props);

    if (this.props.name == "login") {
      this.type = "text";
      this.class = "username";
      this.id = this.props.name;
      this.label = this.props.name;
    }

    else if (this.props.name == "password") {
      this.type = "password";
      this.class = "password"
      this.id = this.props.name;
      this.label = this.props.name;
    }

    this.name = this.props.name;
  }

  render() {
    return (
      <div className={this.class}>
          <input
            label={this.label} 
            type={this.type} 
            id={this.id} 
            className='styledInput'
            name={this.name} 
            placeholder={this.label}
          />
        </div>
    );
  }
}

export default MyInput;
