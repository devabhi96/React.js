const Navigation = () => {
  return (
    <nav>
      {/* Logo */}
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.brandvertising.ch/wp-content/uploads/2023/07/nike-logo-just-do-it-clothes-design-icon-free-vector-jpg.webp"
          alt="Nike logo"
        />
      </div>

      {/* Menu Items */}
      <ul>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Location</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      {/* Login Button */}
      <button className="login-btn">Login</button>
    </nav>
  );
};

export default Navigation;
