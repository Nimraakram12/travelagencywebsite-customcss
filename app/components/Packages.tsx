import React from "react";
import "../style/Packages.css";


const Packages = () => {
  const packages = [
    {
      title: "Beach Escape",
      description: "Enjoy a relaxing 5-day stay at a tropical paradise with all-inclusive facilities.",
      price: "$799",
      image: "/images/beach.jpg",
    },
    {
      title: "European Adventure",
      description: "Explore 10 days across multiple European countries with guided tours.",
      price: "$1,499",
      image: "/images/europe.jpg",
    },
    {
      title: "Safari Experience",
      description: "Embark on a 7-day safari adventure and witness wildlife like never before.",
      price: "$1,299",
      image: "/images/safari.jpg",
    },
    {
      title: "Mountain Retreat",
      description: "Mountains tracking with a 3-day retreat in special mountain lodge.",
      price: "$599",
      image: "/images/mountain.jpg",
    },
  ];

  return (
    <section className="packages" id="packages">
      <h2>Travel Packages</h2>
      <div className="packages-grid">
        {packages.map((pkg, index) => (
          <div className="package-card" key={index}>
            <img src={pkg.image} alt={pkg.title} />
            <div className="package-info">
              <h3>{pkg.title}</h3>
              <p>{pkg.description}</p>
              <p className="price">{pkg.price}</p>
              <button className="book-btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
