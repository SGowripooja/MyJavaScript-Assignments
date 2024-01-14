import { Link } from "react-router-dom";
import featureimageBestDataScienceOnlineCoursesforBeginners from '../assets/Images/DataScience/featureimageBestDataScienceOnlineCoursesforBeginners.webp';
import datasciencewebinarsandworkshops from '../assets/Images/DataScience/datasciencewebinarsandworkshops.webp';
const cardData = [
  {
    title: "Top 7 Online Data Science Courses — 2024 Guide & Reviews",
    image: featureimageBestDataScienceOnlineCoursesforBeginners,
    link: "https://www.learndatasci.com/best-data-science-online-courses/",
    description: "In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most",
   
  },
  {
    title: "Data Science Webinars and Workshops",
    image: datasciencewebinarsandworkshops,
    link: "https://www.guvi.in/blog/data-science-webinars-and-workshops/",
    description: "In today’s world, it’s becoming increasingly important to be knowledgeable in the field of data",
   
  },
  
 
];

export default function Datascience() {
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
