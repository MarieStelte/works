import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-portfolio-bg text-portfolio-text flex items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="heading-large text-portfolio-text">Page Not Found</h1>
        <p className="body-large text-portfolio-text-muted">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block body-small text-portfolio-text hover:opacity-80 transition-opacity border-b border-portfolio-text pb-1"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
