const HeroSection = () => {
  return (
    <main className="hero">
      {/* Left side text */}
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST. WE'RE HERE TO HELP YOU WITH OUR SHOES. 
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
        </p>

        <div className="hero-btn">
          <button className="shop-now">Shop Now</button>
          <button className="category-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available on</p>
          <div className="brand-icons">
            <img
              className="flipkart-logo"
              src="https://i.pinimg.com/originals/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.png"
              alt="Flipkart logo"
            />
            <img
              className="amazon-logo"
              src="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
              alt="Amazon logo"
            />
          </div>
        </div>
      </div>

      {/* Right side shoe image */}
      <div className="hero-image">
        <img src="/img/shoe_image.png" alt="Shoe image" />
      </div>
    </main>
  );
};

export default HeroSection;
