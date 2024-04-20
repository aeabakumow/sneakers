function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex alig-center">
        <img width={40} height={40} src="src\assets\logo.png" alt="" />
        <div>
          <h3 className="text-uppercase">Sneakers</h3>
          <p className="opacity-5">The best sneakers store</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
          <img width={18} height={18} src="src\assets\cart.svg" alt="" />
          <span>12,05 $</span>
        </li>
        <li>
          <img width={18} height={18} src="src\assets\user.svg" alt="" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
