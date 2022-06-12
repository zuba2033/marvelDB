import { Component } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({
            error: true
        })
    }

    render() {
        const style = {
            color: "black",
            textAlign: "center"
        };

        if (this.state.error) {
            return <>
                <h2 style={style} >Something went wrong</h2>;
                <ErrorMessage/>
                </>
        } else {
            return this.props.children;
        }
    }

}

export default ErrorBoundary;

