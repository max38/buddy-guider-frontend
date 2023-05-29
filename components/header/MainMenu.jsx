import { useRouter } from "next/router";

const MainMenu = ({ style = "" }) => {
  const router = useRouter();

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        {/* <li className="menu-item-has-children -has-mega-menu">
          <a href="#">
            <span className="mr-10">Categories</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <div className="mega">
            <CategoriesMegaMenu />
          </div>
        </li> */}
        {/* End categories menu items */}

        {/* <li className={router.pathname === "/destinations" ? "current" : ""}>
          <Link href="/destinations">Destinations</Link>
        </li> */}
        {/* End Destinatinos single menu */}
        
        {/* <li className={router.pathname === "/contact" ? "current" : ""}>
          <Link href="/contact">Contact</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default MainMenu;
