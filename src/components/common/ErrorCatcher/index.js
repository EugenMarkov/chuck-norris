import React from "react";
import Typography from "@material-ui/core/Typography";

class ErrorCatcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorMessage: null };
  }


  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorMessage: errorInfo
    })
  }

  render() {
    if (this.state.errorMessage) {
      return (
        <div style={{textAlign: "center", padding: "20px"}}>
          <Typography variant="h2" align="center">Something went wrong. Try again later</Typography>
          <Typography align="center">{this.state.error.message}</Typography>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorCatcher;