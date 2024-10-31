function Header() {
  return (
    <div className="font-google-sans flex justify-between bg-custom-light-cream font-bold text-xl py-5 ">
      <a href="">
        <h1 className="pl-5 text-2xl text-custom-rich-red">Domino's</h1>
      </a>
      <nav>
        <ul className="flex gap-10 pr-3">
          <a
            href=""
            className="font-semibold px-6 py-2 rounded-md bg-custom-rich-red hover:bg-custom-yellow active:bg-custom-rich-red  transition duration-300 ease-in-out text-lg text-custom-white"
          >
            <li>Home</li>
          </a>
          <a
            href=""
            className="font-semibold px-6 py-2 rounded-md bg-custom-rich-red hover:bg-custom-yellow active:bg-custom-rich-red transition duration-300 ease-in-out text-lg text-custom-white"
          >
            <li>About</li>
          </a>
          <a
            href=""
            className="font-semibold px-6 py-2 rounded-md  bg-custom-rich-red hover:bg-custom-yellow active:bg-custom-rich-red transition duration-300 ease-in-out text-lg text-custom-white"
          >
            <li>Order</li>
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
