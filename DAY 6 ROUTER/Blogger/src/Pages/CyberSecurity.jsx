import { Link } from "react-router-dom";
import TealIllustration from '../assets/Images/CyberSecurity/TealIllustration.webp';
import coding from '../assets/Images/CyberSecurity/coding.webp';


const cardData = [
  {
    title: "8 Different Types of Cybersecurity and Threats Involved",
    image: TealIllustration,
    link: "https://www.mass.gov/info-details/know-the-types-of-cyber-threats",
    description: "Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from",
   
  },
  {
    title: "Does Cybersecurity Require Coding? Debunking the Myth",
    image: coding,
    link: "https://www.linkedin.com/pulse/does-cybersecurity-require-coding-debunking-myth/",
    description: "Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,",
  
  },

];

export default function Cybersecurity() {
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
