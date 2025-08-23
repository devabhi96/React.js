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
              style={{cursor:"pointer"}}
              onClick={() => window.open("https://www.flipkart.com/nike-training-gym-shoes-women/p/itmd0000ed23b001?pid=SHOHFFCYPGCTYRFK&lid=LSTSHOHFFCYPGCTYRFK2MOMJB&marketplace=FLIPKART&q=nike+red+shoe&store=osp&srno=s_1_5&otracker=search&otracker1=search&fm=Search&iid=b32eaf61-21d3-4a64-82f8-34d177584897.SHOHFFCYPGCTYRFK.SEARCH&ppt=sp&ppn=sp&ssid=95vr6u5lvk0000001755956312635&qH=4d78dbf5782b77be","_blank")}
            />
            <img
              className="amazon-logo"
              src="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
              alt="Amazon logo"
              style={{cursor:"pointer"}}
              onClick={()=> window.open("https://www.amazon.com/NIKE-Jordan-White-Red-Lobster-Sail-FJ3459/dp/B0CTMLBZS9?crid=X8CDFFC9P3XJ&dib=eyJ2IjoiMSJ9.B4gpb-4jcfxyAlzJ57NLL2BuabJEETn75uJXGS7C-Ja-62veqESXq4DReuSnraDWXoa3e23Qf96CC-stcgN0E7XO9W052qyULLFSyE8yWI-hIDaGeGoXl6aWQl80IpIXHnI3EFuQ4FX33Pr-lv23kacdo-8kaZLOO4z-Ev8femkSQ_VMGfQqUJA2LJWLbjsekOmePZ56tpeb-FrFcmlvcFcKeiiQ_MHxbZxs0vlH-LV3NMCVMwVRokONUXCNAcxxXRoHCLY3YkNFTMRtQmfLio7SIEY4J4sxqhom1aOaBTI.2qsJzuYQB6W29_civlmA91rNXyPSFAQLGdxiEDpjSFk&dib_tag=se&keywords=nike%2Bred%2Bshoe&qid=1755956474&sprefix=nike%2Bred%2Bshow%2Caps%2C365&sr=8-1&th=1","_blank")}
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
