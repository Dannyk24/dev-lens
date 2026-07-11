import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function DeveloperCardSkeleton() {
  return (
    <div className="developer-card display-card">
      <div className="developer-top">
        <Skeleton circle width="60px" height="60px" />
        <div className="developer-data">
          <p className="developer-name">
            <Skeleton width={70} height={10} />
          </p>
          <span className="account-type">
            <Skeleton width={30} height={4} />
          </span>
        </div>
      </div>
      <div className="decorative-line"></div>
      <Skeleton width="100%" height={20} />
    </div>
  );
}

export default DeveloperCardSkeleton;
