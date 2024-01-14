import { Link } from "react-router-dom";
import featureimage from '../assets/Images/Career/featureimage.webp';
import topcareer from '../assets/Images/Career/topcareer.jpg';
import Game from '../assets/Images/Career/Game.jpg';


const cardData = [
  {
    title: "Top Skills Required to Become a Digital Marketer",
    image: featureimage,
    link: "https://www.linkedin.com/business/marketing/blog/skills/the-most-in-demand-skills-for-marketers",
    description: "Digital marketing is one of the most dynamic industries that has transformed how businesses connect",
    
  },
  {
    title: "Career Opportunities in Digital Marketing | Digital Marketing Career",
    image: featureimage,
    link: "https://www.linkedin.com/pulse/15-types-jobs-digital-marketing-pursue-get-hired-by-linkedin-news/",
    description: "As we move forward in today’s digital age, the need for businesses to engage with",
   
  },
  {
    title: "The Future of UI/UX Designers: A Bright and Evolving Career Path",
    image: topcareer,
    link: "https://www.linkedin.com/pulse/future-uiux-designers-bright-evolving-career-path-abid-saif/",
    description: "In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most",
   
  },
  {
    title: "Career Advice for Aspiring Game Developers",
    image: Game,
    link: "https://www.linkedin.com/pulse/career-advice-aspiring-game-developers-bleedingedgestudio/",
    description: "The game development industry has undergone a remarkable evolution over the years, witnessing exhilarating changes",
    
  },
 
];

export default function Career() {
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
