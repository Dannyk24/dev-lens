import {
  Book,
  ExternalLink,
  User,
  Star,
  GitFork,
  Eye,
  Shield,
  CircleDot,
  GitCommitHorizontal,
  Users,
  Clock,
} from "lucide-react";
import Navbar from "../components/Navbar";
import BackButton from "../components/ui/BackButton";
import "./RepoDetailsPage.css";
import RepoCard from "../components/RepoCard";

function RepoDetailsPage() {
  return (
    <>
      <Navbar />
      <BackButton />
      <div className="repo-details-page">
        <div className="repo-details-top">
          <div className="left">
            <div className="repo-owner-container">
              <div className="repo-owner-avatar-container">MC</div>
              <span className="repo-owner-name-container">
                Owner: <span>Maya Chen</span>
              </span>
            </div>
            <div className="repo-name-container">
              <Book />
              <span>pixel-forge</span>
            </div>
            <p className="repo-description">
              Design-to-code pipeline that turns Figma frames into SwiftUI.
            </p>
          </div>
          <div className="right">
            <div className="repo-ctas-container">
              <button className="cta primary-cta">
                <ExternalLink />
                <span>View on Github</span>
              </button>
              <button className="cta secondary-cta">
                <User />
                <span>Visit Owner</span>
              </button>
            </div>
          </div>
        </div>
        <div className="decorative-line"></div>
        <div className="repo-overview">
          <div className="repo-stat">
            <Star />
            <span className="repo-stat-value">6.4k</span>
            <span className="repo-stat-category">Stars</span>
          </div>
          <div className="repo-stat">
            <GitFork />
            <span className="repo-stat-value">280</span>
            <span className="repo-stat-category">forks</span>
          </div>
          <div className="repo-stat">
            <CircleDot />
            <span className="repo-stat-value">17</span>
            <span className="repo-stat-category">issues</span>
          </div>
          <div className="repo-stat">
            <Eye />
            <span className="repo-stat-value">166</span>
            <span className="repo-stat-category">watchers</span>
          </div>
          <div className="repo-stat">
            <Shield />
            <span className="repo-stat-value">MIT</span>
            <span className="repo-stat-category">License</span>
          </div>
          <div className="repo-stat">
            <div className="repo-stat-dot-language-marker"></div>
            <span className="repo-stat-value">Swift</span>
            <span className="repo-stat-category">language</span>
          </div>
        </div>
        <div className="repo-topic-badges-container">
          <div className="topic-badge">react</div>
          <div className="topic-badge">state management</div>
        </div>
        <section id="repo-information-main-container">
          <div className="left">
            <div className="readme-container">
              <div className="readme-header-container">
                <Book />
                <span>README.md</span>
              </div>
              <div className="repo-readme">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam consectetur praesentium velit ea ipsum, modi
                voluptates at mollitia voluptas quisquam itaque vel laborum
                consequatur inventore animi maxime, numquam voluptate, accusamus
                voluptatum quo fugiat excepturi rem. Velit saepe laborum odio
                illum magni modi eaque deserunt. Quo, atque ipsam nemo eius quod
                amet ex laboriosam quas voluptates molestias ab rem similique
                expedita laborum necessitatibus at aliquid, architecto vel
                voluptatem cumque quisquam hic vero alias reiciendis!
                Perferendis fuga dicta error assumenda quis quos amet ab quia
                nesciunt doloribus laborum quas nemo cupiditate adipisci facere
                voluptatem, mollitia nisi doloremque ad quidem a. Voluptates
                eius ipsam voluptatum itaque quidem optio, necessitatibus
                nesciunt neque dolores mollitia, cum delectus ab minima iure,
                quam cumque expedita voluptas tempore? Expedita obcaecati
                doloribus quas velit, illum autem omnis ducimus vitae quam aut
                numquam at hic quidem neque. Ullam ab voluptatem, consectetur
                minus accusantium aspernatur, earum quia voluptatibus cum ipsum
                voluptates officiis. Dolore eveniet vel quia quas mollitia sit
                aliquam ullam autem voluptatem impedit repudiandae laudantium
                libero nisi ea maiores, optio eaque qui in voluptatum eius illo
                minima. Repudiandae animi facere corrupti culpa, libero
                doloremque. Sapiente, dolor ipsam, eos ipsa esse quis totam a
                facilis nesciunt repudiandae itaque aliquid nam harum veritatis
                architecto. Consequatur ab quis accusantium voluptatem error
                dolore earum omnis, veniam quo corporis ipsam fugiat totam
                inventore commodi! Ipsum autem nisi dolores quia obcaecati
                placeat asperiores hic ratione voluptatum! Quidem autem, maxime
                aut iure sunt iusto repellat. Dolorum dicta, adipisci unde
                sapiente veniam ex tenetur eum consectetur. Ipsam quidem earum
                quibusdam id corrupti soluta atque, sed, eligendi molestias nam
                iste assumenda eius inventore. Eligendi aliquid enim dolorum
                libero quaerat expedita, necessitatibus consectetur assumenda
                blanditiis ad exercitationem voluptas, praesentium illum, id
                quae mollitia omnis. Ipsum repellendus perferendis quae vitae
                eaque doloremque odit, in illo at expedita. Dicta incidunt
                officia, consequatur nobis deserunt blanditiis facilis, quam,
                praesentium repellat aspernatur reprehenderit ratione
                repudiandae illo id aut a. Maxime, vero. Tempore ab pariatur
                ratione neque nisi cupiditate impedit similique repellendus
                repudiandae culpa deleniti itaque reprehenderit nam maxime
                blanditiis veniam, facilis sunt ipsam minus modi tempora
                expedita facere. Officiis quo, neque harum eaque est, placeat
                quidem id alias possimus quia, quisquam cumque amet inventore
                distinctio minus deleniti voluptates corrupti facere similique
                quis recusandae sed totam quod? Esse, ipsam ad quis veritatis
                maxime laboriosam. Autem pariatur dolorem, magnam, repellendus
                distinctio corporis eligendi esse maxime tenetur fugiat ipsum,
                cum temporibus nihil alias! Nisi tempore ea explicabo fugit
                reiciendis at a corporis? Accusantium maxime deserunt aperiam
                nisi, numquam delectus optio necessitatibus unde corporis
                dolorum dolores debitis iure voluptatem expedita saepe. Modi
                asperiores veritatis sunt suscipit cumque nisi ratione tenetur
                dignissimos provident debitis. Quam temporibus veritatis iste
                similique optio! Ipsa rem temporibus ipsam inventore labore
                sequi. Ut, saepe?
              </div>
            </div>
          </div>
          <div className="right">
            <div className="repo-license-container">
              <div className="card-header">License</div>
              <div className="license-container">
                <Shield />
                <span>MIT License</span>
              </div>
            </div>
            <div className="top-contributors-container">
              <div className="card-header">Top Contributors</div>
              <div className="top-contributors">
                <div className="top-contributor">
                  <div className="left">
                    <div className="contributor-avatar">MC</div>
                    <span className="contributor-name">Maya Chen</span>
                  </div>
                  <div className="right">
                    <span className="total-commits">2.1k commits</span>
                  </div>
                </div>
                <div className="top-contributor">
                  <div className="left">
                    <div className="contributor-avatar">MC</div>
                    <span className="contributor-name">Maya Chen</span>
                  </div>
                  <div className="right">
                    <span className="total-commits">2.1k commits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="repo-statistics">
          <div className="section-header-sm">Repository statistics</div>
          <div className="repo-stat-display-cards">
            <div className="repo-stat-card display-card stat-display-card">
              <div className="stat-display-card-icon-container">
                <GitCommitHorizontal />
              </div>
              <span className="stat-display-card-value">3.3k</span>
              <span className="stat-display-card-category">Total commits</span>
            </div>
            <div className="repo-stat-card display-card stat-display-card">
              <div className="stat-display-card-icon-container">
                <Users />
              </div>
              <span className="stat-display-card-value">11</span>
              <span className="stat-display-card-category">Contributors</span>
            </div>
            <div className="repo-stat-card display-card stat-display-card">
              <div className="stat-display-card-icon-container">
                <Clock />
              </div>
              <span className="stat-display-card-value">7d ago</span>
              <span className="stat-display-card-category">Last updated</span>
            </div>
          </div>
        </section>
        <div className="decorative-line"></div>
        <section id="related-repos">
          <div className="section-header-sm">Related repositories</div>
          <div className="related-repos-grid">
            <RepoCard />
          </div>
        </section>
      </div>
    </>
  );
}

export default RepoDetailsPage;
