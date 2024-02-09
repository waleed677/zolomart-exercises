import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
    const location = useLocation();
  
    const isViewOfferPage = location.pathname.startsWith('/offer/');
  
    return (
      !isViewOfferPage && (
        <nav className="bg-blue-500 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex gap-4">
              <Link to="/" className="hover:text-blue-200 transition duration-300">
                Create Offer
              </Link>
              <Link to="/offers" className="hover:text-blue-200 transition duration-300">
                Offers List
              </Link>
            </div>
          </div>
        </nav>
      )
    );
  };

  export default Navigation;
  