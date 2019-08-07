import React from "react";

export default class extends React.Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    console.log(error, info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h3>Oooops......</h3>
        </div>
      );
    }

    return this.props.children;
  }
}
