import icons from "../../assets/icons.png";

const Footer = () => {
  return (
    <div className="bg-[#A5C926] h-[229px] bottom-0">
      <div className="container text-white">
        <div className="flex items-center  justify-between">
          <h3 className="mt-[3%]">ToyStore</h3>
          <div className="flex gap-10">
            <ul className="flex gap-7 mt-9">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Catalog</a>
              </li>
              <li>
                <a href="#">Delivery</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
            <img className="mt-8" src={icons} alt="" />
          </div>
        </div>
        <hr className="text-white container mt-17" />
        <div className="flex justify-between mt-10 ">
          <p>Created with love by Elastic Themes</p>
          <ul className="flex gap-5">
            <li>
              <a href="#">Powered by</a>
            </li>
            <li>
              <a href="#">Webflow</a>
            </li>
            <li>
              <a href="#">Style Guide</a>
            </li>
            <li>
              <a href="#">Licensing</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
