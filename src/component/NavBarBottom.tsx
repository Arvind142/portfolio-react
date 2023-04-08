import NavBarBottomType from "../types/NavBarBottomType";

const NavBarBottom = (props: NavBarBottomType) => {
  const mailUrl = "mailto:" + props.emailAdd;
  const githubUrl = "https://github.com/" + props.githubUsername;
  return (
    <>
      <div className="container justify-content-center" id="connect">
        <footer className="justify-content-center">
          <div>
            <ul className="nav justify-content-center border-pb-3 mb-3">
              <li className="nav-item">
                <a className="alert" href={props.linkedinUrl} target="_blank">
                  <img
                    src="portfolio_images/linkedin.gif"
                    className="rounded-circle img-fluid"
                    alt="linkedIn"
                    width="30"
                    height="30"
                  />
                </a>
              </li>
              <li className="nav-item">
                <a className="alert" href={mailUrl}>
                  <img
                    src="portfolio_images/mailbox.gif"
                    className="rounded-circle img-fluid"
                    alt="mailBox"
                    width="30"
                    height="30"
                  />{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="alert" href={githubUrl} target="_blank">
                  <img
                    src="portfolio_images/github.gif"
                    className="rounded-circle img-fluid"
                    alt="github"
                    width="30"
                    height="30"
                  />
                </a>
              </li>
              <li className="nav-item">
                <a className="alert" href={props.mediumUrl} target="_blank">
                  <img
                    src="portfolio_images/medium.png"
                    className="rounded-circle img-fluid"
                    alt="medium"
                    width="30"
                    height="30"
                  />
                </a>
              </li>
            </ul>
            <p className="text-center text-muted">- {props.authorName} -</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default NavBarBottom;
