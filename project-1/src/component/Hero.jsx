const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
       <p>Unleash your potential with Nike's latest
         collection of performance gear and lifestyle
          apparel. Designed for athletes, built for
           legends — experience comfort, style, and 
           innovation like never before.</p>


        <div className="hero-btn">
          <button>Shop Now </button>
          <button className="secondary-btn">Category</button>
        </div>

      </div>
      <div className="hero-image">
        <img src="/img/shoe.png" alt="hero-image" />
      </div>
    </main>
  );
};

export default HeroSection;