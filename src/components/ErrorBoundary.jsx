import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details to console for debugging
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    
    // Update state with error details
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

    // Optionally, you can also log to an error reporting service here
    // logErrorToService(error, errorInfo);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-6">
              <svg
                className="mx-auto h-16 w-16 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4v2m0 0v2m0-2H9m3 0h3M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            
            <h1 className="text-2xl font-bold text-gray-800 mb-2 font-delius">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-600 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left bg-red-50 border border-red-200 rounded-lg p-4 text-sm">
                <summary className="cursor-pointer font-semibold text-red-800 mb-2">
                  Error Details (Development Only)
                </summary>
                <p className="text-red-700 font-mono text-xs wrap-break-word whitespace-pre-wrap mb-2">
                  {this.state.error.toString()}
                </p>
                {this.state.errorInfo && (
                  <p className="text-red-700 font-mono text-xs wrap-break-word whitespace-pre-wrap">
                    {this.state.errorInfo.componentStack}
                  </p>
                )}
              </details>
            )}

            <div className="flex gap-3">
              <button
                onClick={this.handleReset}
                style={{ backgroundColor: 'var(--color-primary)' }}
                className="flex-1 text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-all duration-300"
              >
                Try Again
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="flex-1 bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition-all duration-300"
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
