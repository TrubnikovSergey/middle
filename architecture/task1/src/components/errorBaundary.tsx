import React, { Component, ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  source: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  source: string;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = { hasError: false, source: "" };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ ...this.state, source: this.props.source });
  }

  render() {
    if (this.state.hasError) {
      console.log("-----ERRORBoundary-----\n", this.state);
    }

    if (this.state.hasError) {
      if (this.state.source) {
        if (this.props.source === this.state.source) {
          return <h1>Что-то пошло не так</h1>;
        }
      } else {
        return <h1>Что-то пошло не так</h1>;
      }
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
