import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";
import "./NotFound.scss";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-page" data-testid="not-found-page">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        className="not-found-result"
        extra={
          <Button
            type="primary"
            icon={<Home size={16} />}
            onClick={() => navigate("/")}
            data-testid="back-home-button"
          >
            Back Home
          </Button>
        }
      />

      <div className="not-found-illustration">
        <div className="illustration-content">
          <div className="floating-elements">
            <div className="element element-1"></div>
            <div className="element element-2"></div>
            <div className="element element-3"></div>
          </div>
          <div className="main-text">
            <h3>Oops! Page not found</h3>
            <p>The page you're looking for doesn't exist or has been moved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
