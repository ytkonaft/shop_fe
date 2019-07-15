import React, { PureComponent } from "react";

class Error extends PureComponent {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <p>
        {this.props.statusCode ? (
          `An error ${this.props.statusCode} occurred on server`
        ) : (
          <div>
            <h1>404</h1>
          </div>
        )}
      </p>
    );
  }
}

export default Error;
