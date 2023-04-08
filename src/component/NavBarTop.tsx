import NavBarTopType from "../types/NavBarTopType";
import NavBarType from "../types/NavBarTopType";


const NavBarTop = ({textToBeDispalyed,imagePath}:NavBarTopType) => {
    return (
        <nav className="navbar sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={imagePath} height={50} width={50}></img>{textToBeDispalyed}
          </a>
        </div>
      </nav>
    );
}

export default NavBarTop;