import React from "react";
import "../style/Destinations.css";

const Destinations = () => {
  const destinations = [
    {
      name: "Maldives",
      description: "Experience the serenity of crystal-clear waters and luxurious resorts.",
      image: "/images/m1.jpg",
    },
    {
      name: "Paris",
      description: "Explore the City of Lights with its iconic Eiffel Tower and romantic ambiance.",
      image: "/images/p1.jpg",
    },
    {
      name: "Bali",
      description: "Immerse yourself in tropical beauty and rich cultural heritage.",
      image: "/images/b1.jpeg",
    },
    {
      name: "Switzerland",
      description: "Discover the stunning Alps and scenic beauty of Swiss landscapes.",
      image: "/images/s1.jpg",
    },
  ];

  return (
    <section className="destinations" id="destinations">
      <h2>Popular Destinations</h2>
      <div className="destinations-grid">
        {destinations.map((destination, index) => (
          <div className="destination-card" key={index}>
            <img src={destination.image} alt={destination.name} />
            <div className="destination-info">
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
