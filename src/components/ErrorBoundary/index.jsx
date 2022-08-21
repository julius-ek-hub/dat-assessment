import { Component } from 'react';

import Error from './Error';

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    static getDerivedStateFromError(error) {
        return { error: typeof error === 'object' ? (error.stack || error.message) : error };
    }

    render() {
        const { error } = this.state;

        return error ? <Error error={error} /> : this.props.children;
    }
}

export default ErrorBoundary;