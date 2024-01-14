import { Link } from "react-router-dom";
import TheTop10ToolsEveryFullStackDeveloperShouldMasterin2023 from '../assets/Images/Fullstack/TheTop10ToolsEveryFullStackDeveloperShouldMasterin2023.png';
import TheUltimateGuidetoRealWorldFullStackDevelopmentApplications from '../assets/Images/Fullstack/TheUltimateGuidetoRealWorldFullStackDevelopmentApplications.png';
const cardData = [
  {
    title: "The Top 10 Tools Every Full Stack Developer Should Master in 2024",
    image: TheTop10ToolsEveryFullStackDeveloperShouldMasterin2023,
    link: "https://careerfoundry.com/en/blog/web-development/full-stack-developer-skills/",
    description: "As a full stack developer, having the right set of tools is crucial for your",
    
  },
  {
    title: "The Ultimate Guide to Real-World Full Stack Development Applications",
    image: TheUltimateGuidetoRealWorldFullStackDevelopmentApplications,
    link: "https://netisens.com/the-ultimate-guide-to-understanding-full-stack-web-development/",
    description: "Full stack development has become increasingly popular in recent years, with companies seeking professionals who",
    
  },
];

export default function Fullstack() {
  return (
    <div className="container">
      <div className="row g-4">
        {cardData.map((card, index) => (
          <div className="col-lg col-md-6" key={index}>
            <div className="card h-100">
              <div>
                <Link className="nav-link" to={card.link}>
                  <img src={card.image} className="card-img-top" alt="..." />
                </Link>
              </div>
              <div className="card-body">
                <p className="card-title">
                  <Link className="nav-link" to={card.link}>
                    {card.title}
                  </Link>
                </p>
                <p className="card-text">{card.description}</p>
                <p>
                  <Link className="nav-link read" to={card.link}>
                    READ MORE »
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
