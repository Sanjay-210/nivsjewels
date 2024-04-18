import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="site-header" className="site-header header-v1 color-white">
      <div className="header-mobile">
        <div className="section-padding">
          <div className="section-container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-left">
                <div className="navbar-header">
                  <button
                    type="button"
                    id="show-megamenu"
                    className="navbar-toggle"
                  />
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 header-center">
                <div className="site-logo">
                    <a href="/">
                        <img src="assets/images/logo1.png" alt="NIVS" />
                    </a>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-right">
                <div className="mojuri-topcart dropdown">
                  <div className="dropdown mini-cart top-cart">
                    <div className="remove-cart-shadow" />
                    <a
                      className="dropdown-toggle cart-icon"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div className="icons-cart">
                        <i className="icon-large-paper-bag" />
                        <span className="cart-count">0</span>
                      </div>
                    </a>
                    <div className="dropdown-menu cart-popup">
                      {/*<div class="cart-empty-wrap">*/}
                      {/*    <ul class="cart-list">*/}
                      {/*        <li class="empty">*/}
                      {/*<span>No products in the cart.</span>*/}
                      {/*            <a class="active-login button btn" href="#">Login <br>To View cart <i aria-hidden="true" class="arrow_right"></i></a>*/}
                      {/*        </li>*/}
                      {/*    </ul>*/}
                      {/*</div>*/}
                      <div className="cart-list-wrap">
                        <ul className="cart-list">
                          <li className="empty">
                            <a className="active-login button btn" href="#">
                              Login <br />
                              To View cart{" "}
                              <i aria-hidden="true" className="arrow_right" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-mobile-fixed">
          {/* Shop */}
          <div className="shop-page">
            <a href="#!">
              <i className="wpb-icon-shop" />
            </a>
          </div>
          {/* Login */}
          <div className="my-account">
            <div className="login-header">
              {/*<a  class="active-login" href="#"><i class="wpb-icon-user"></i></a>*/}
              <a className="active-login" href="#">
                <i className="wpb-icon-user" />
              </a>
              <div className="form-login-register" id="signn">
                <div className="box-form-login" style={{ margin: 60 }}>
                  <div className="active-login" />
                  <div className="box-content">
                    <div className="form-login active">
                      <form
                        id="formlogin"
                        method="post"
                        className="login"
                        name="formlogin"
                        data-gtm-form-interact-id={0}
                      >
                        <h2>Sign in</h2>
                        <p className="status" />
                        <div className="content">
                          <div className="email">
                            <input
                              type="email"
                              className="input-text"
                              placeholder="Email"
                              name="email"
                              id="email"
                              defaultValue=""
                              data-gtm-form-interact-field-id={0}
                            />
                          </div>
                          <div className="password">
                            <input
                              className="input-text"
                              required="required"
                              type="password"
                              name="password"
                              id="password"
                              placeholder="Password"
                              data-gtm-form-interact-field-id={1}
                            />
                          </div>
                          <div className="rememberme-lost">
                            <div className="rememberme">
                              <input
                                name="rememberme"
                                type="checkbox"
                                id="rememberme"
                                defaultValue="forever"
                              />
                              <label htmlFor="rememberme" className="inline">
                                Remember me
                              </label>
                            </div>
                            <div className="lost_password">
                              <a href="#!">
                                Lost your password?
                              </a>
                            </div>
                          </div>
                          <div className="button-login">
                            <input
                              type="submit"
                              className="button"
                              name="login"
                              defaultValue="Login"
                            />
                          </div>
                          <div className="button-next-reregister">
                            Create An Account
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="form-register">
                      <form
                        method="post"
                        className="register"
                        id="formregister"
                        data-gtm-form-interact-id={1}
                      >
                        <h2>REGISTER</h2>
                        <div className="content">
                          <div className="email">
                            <input
                              type="text"
                              className="input-text"
                              placeholder="Name"
                              name="name"
                              id="name"
                              defaultValue=""
                            />
                          </div>
                          <div className="email">
                            <input
                              type="email"
                              className="input-text"
                              placeholder="Email"
                              name="email"
                              id="reg_email"
                              defaultValue=""
                              data-gtm-form-interact-field-id={2}
                            />
                          </div>
                          <div className="password">
                            <input
                              type="password"
                              className="input-text"
                              placeholder="Password"
                              name="password"
                              id="reg_password"
                              data-gtm-form-interact-field-id={3}
                            />
                          </div>
                          <div className="button-register">
                            <input
                              type="submit"
                              className="button"
                              name="register"
                              defaultValue="Register"
                            />
                          </div>
                          <div className="button-next-login">
                            Already has an account
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Search */}
          <div className="search-box">
            <div className="search-toggle">
              <i className="wpb-icon-magnifying-glass" />
            </div>
          </div>
          {/* Wishlist */}
          <div className="wishlist-box">
            <Link to="/wishlist">
              <i className="wpb-icon-heart" />
            </Link>
          </div>
        </div>
      </div>
      <div className="header-desktop">
        <div className="header-wrapper">
          <div className="section-padding">
            <div className="section-container large p-l-r">
              <div className="row" style={{ paddingTop: 19 }}>
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 header-left">
                  <div className="site-logo">
                    
                    
                    <a href="/"> 
                      {/*<img src="assets/images/nivslogo.png"*/}
                      <img
                        src="assets/images/logo1.png"
                        alt="NIVS"
                        style={{ width: 150, height: "auto" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text-center header-center">
                  <div className="site-navigation" id="mainnav">
                    <nav id="main-navigation">
                      <ul id="menu-main-menu" className="menu">
                        <li className="level-0 menu-item   current-menu-item">
                         
                            <a href="/">
                                <span className="menu-item-text">Home</span>
                            </a>
                        </li>
                        <li className="level-0 menu-item menu-item-has-children ">
                          <a href="#!">
                            <span className="menu-item-text">Mens</span>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="product?sId=05664443ca62185be10e094a9fb50104795864575030464c5858735554667046363261734d413d3d">
                                <span className="menu-item-text">Ring</span>
                              </a>
                            </li>
                            <li>
                              <a href="product?sId=b593f38a7cbba62e4b46193404776bc159704f4c63344f66657561624f55724146616c737a413d3d">
                                <span className="menu-item-text">Chain</span>
                              </a>
                            </li>
                            <li>
                              <a href="product?sId=55ee05254b65da21650ab1e4cf3cc24b613965396553587755624454664276777144545237773d3d">
                                <span className="menu-item-text">
                                  Plain Charms
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="product?sId=9aab4d3fc87093017bc05219103f6d69745530516c786b652f6b7868312f6c4f33617a3536413d3d">
                                <span className="menu-item-text">Bracelet</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="level-0 menu-item menu-item-has-children ">
                          <a href="#!">
                            <span className="menu-item-text">Women</span>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="product?sId=5e328f89f6ac856463b88552a8c19e14384f6c5a50766e5244354d7271695234384b533679413d3d">
                                <span className="menu-item-text">Ring</span>
                              </a>
                            </li>
                            <li>
                              <a href="product?sId=d9151670ce177834f898f9448167b5094a70467a364f6553534d76705938724453334a6774513d3d">
                                <span className="menu-item-text">Stud</span>
                              </a>
                            </li>
                            <li>
                              <a href="product?sId=2b38e8ab40421c886864b8f0900b5316473570694d6e357a4743616b54766b4265476a4169773d3d">
                                <span className="menu-item-text">Jhummiki</span>
                              </a>
                            </li>
                            <li>
                              <a href="product?sId=6e516f9705547faa82c51a56192f1c414659477a705a6c39524b735a3243446e5368463339673d3d">
                                <span className="menu-item-text">Charms</span>
                              </a>
                            </li>
                            <li>
                              <a href="product?sId=51ee1bcfa145221e52cd5e295c3d7f284166446a38575455694c427165764b796859676b49413d3d">
                                <span className="menu-item-text">Bangle</span>
                              </a>
                            </li>
                            <li>
                              <a href="product?sId=382dfeb7d378476b120bc5bb8fe42b9f666555694b4874594d34425058344a6c5355302b76673d3d">
                                <span className="menu-item-text">Bracelet</span>
                              </a>
                            </li>
                            <li>
                              <a href="product?sId=150d20ced27c1884bbf13cdca870245778364c564a4561365073564f7666474c6248314b67413d3d">
                                <span className="menu-item-text">Mugappu</span>
                              </a>
                            </li>
                            <li>
                              <a href="product?sId=4aee8c6457d6ef0e3ce985bcc94893696f3337666858524b47796f6a3239463831714e6a66413d3d">
                                <span className="menu-item-text">Necklace</span>
                              </a>
                            </li>
                            <li>
                              <a href="product?sId=57c81b606777fd0473261964714dee4c703234554a327770596837704670795a414445427a513d3d">
                                <span className="menu-item-text">
                                  Chain set
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="level-0 menu-item menu-item-has-children ">
                          <a href="#!">
                            <span className="menu-item-text">Kids</span>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="product?sId=02bad75a4e76124419983186e9eb85c531755058346463355334507039714b79474e455042773d3d">
                                <span className="menu-item-text">
                                  Plain Charms
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="product?sId=7b1b0d495c4b07825ef4f4e773b0247d74345a723061663668533567735259396b39366873513d3d">
                                <span className="menu-item-text">Ring</span>
                              </a>
                            </li>
                            <li>
                              <a href="product?sId=db502046a6b844d2f108774ce04df5c84d34654a7565675854643278775369644a677a3179513d3d">
                                <span className="menu-item-text">Bangle</span>
                              </a>
                            </li>
                            <li>
                              <a href="product?sId=3a7f002b8b7b5b9758874cd743a9d9346362706e716e626571656838725430724c754f5732413d3d">
                                <span className="menu-item-text">Bracelet</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="level-0 menu-item menu-item-has-children ">
                          <a href="#!">
                            <span className="menu-item-text">Unisex</span>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="product?sId=41aa07360cec11f987e1bd9516b3adfc573859495074656e41686b6a6d6936516543665331773d3d">
                                <span className="menu-item-text">
                                  Plain Charms
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="product?sId=746b6489f5f786f194c16ac87cb92fa06a52694e3138796e617a4a5053697a636245454642413d3d">
                                <span className="menu-item-text">
                                  Stone Charms
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="product?sId=cd827b1cf98574cde42651599fb50c004177723830794c727055442f4a50734245374b4b34673d3d">
                                <span className="menu-item-text">
                                  Wedding Ring
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="product?sId=7260105b1bfa018f3f56cc32d2489cd36f6272664658614b4d59357a622b756437766b6e34513d3d">
                                <span className="menu-item-text">Bracelet</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="level-0 menu-item ">
                            <Link to="/about"> 
                                <span className="menu-item-text ">AboutUs</span>
                            </Link>
                        </li>
                        <li className="level-0 menu-item ">
                            <Link to="/contact"> 
                         
                                <span
                                className="menu-item-text"
                                style={{ position: "absolute" }}
                                >
                                Contact
                                </span>
                            </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 header-right">
                  <div className="header-page-link">
                    {/* Search */}
                    <div className="search-box">
                      <div className="search-toggle">
                        <i className="icon-search" />
                      </div>
                    </div>
                    {/* Login */}
                    <div className="login-header icon">
                      <a className="active-login" href="#">
                        <i className="icon-user" />
                      </a>
                      <div className="form-login-register" id="signn">
                        <div className="box-form-login">
                          <div className="active-login" />
                          <div className="box-content">
                            <div className="form-login active">
                              <form
                                id="formlogin"
                                method="post"
                                className="login"
                                name="formlogin"
                                data-gtm-form-interact-id={2}
                              >
                                <h2>Sign in</h2>
                                <p className="status" />
                                <div className="content">
                                  <div className="email">
                                    <input
                                      type="email"
                                      className="input-text"
                                      placeholder="Email"
                                      name="email"
                                      id="email"
                                      defaultValue=""
                                      data-gtm-form-interact-field-id={4}
                                    />
                                  </div>
                                  <div className="password">
                                    <input
                                      className="input-text"
                                      required="required"
                                      type="password"
                                      name="password"
                                      id="password"
                                      placeholder="Password"
                                      data-gtm-form-interact-field-id={5}
                                    />
                                  </div>
                                  <div className="rememberme-lost">
                                    <div className="rememberme">
                                      <input
                                        name="rememberme"
                                        type="checkbox"
                                        id="rememberme"
                                        defaultValue="forever"
                                      />
                                      <label
                                        htmlFor="rememberme"
                                        className="inline"
                                      >
                                        Remember me
                                      </label>
                                    </div>
                                    <div className="lost_password">
                                      <a href="#!">
                                        Lost your password?
                                      </a>
                                    </div>
                                  </div>
                                  <div className="button-login">
                                    <input
                                      type="submit"
                                      className="button"
                                      name="login"
                                      defaultValue="Login"
                                    />
                                  </div>
                                  <div className="button-next-reregister">
                                    Create An Account
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="form-register">
                              <form
                                method="post"
                                className="register"
                                id="formregister"
                                data-gtm-form-interact-id={3}
                              >
                                <h2>REGISTER</h2>
                                <div className="content">
                                  <div className="email">
                                    <input
                                      type="text"
                                      className="input-text"
                                      placeholder="Name"
                                      name="name"
                                      id="name"
                                      defaultValue=""
                                    />
                                  </div>
                                  <div className="email">
                                    <input
                                      type="email"
                                      className="input-text"
                                      placeholder="Email"
                                      name="email"
                                      id="reg_email"
                                      defaultValue=""
                                      data-gtm-form-interact-field-id={6}
                                    />
                                  </div>
                                  <div className="password">
                                    <input
                                      type="password"
                                      className="input-text"
                                      placeholder="Password"
                                      name="password"
                                      id="reg_password"
                                      data-gtm-form-interact-field-id={7}
                                    />
                                  </div>
                                  <div className="button-register">
                                    <input
                                      type="submit"
                                      className="button"
                                      name="register"
                                      defaultValue="Register"
                                    />
                                  </div>
                                  <div className="button-next-login">
                                    Already has an account
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Wishlist */}
                    <div className="wishlist-box">
                      <Link to="/wishlist">
                        <i className="icon-heart" />
                      </Link>
                      <span className="count-wishlist">0</span>
                    </div>
                    {/* Cart */}
                    <div className="mojuri-topcart dropdown light">
                      <div className="dropdown mini-cart top-cart">
                        <div className="remove-cart-shadow" />
                        <a
                          className="dropdown-toggle cart-icon"
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <div className="icons-cart">
                            <i className="icon-large-paper-bag" />
                            <span className="cart-count">0</span>
                          </div>
                        </a>
                        <div className="dropdown-menu cart-popup">
                          <div className="cart-list-wrap">
                            <ul className="cart-list">
                              <li className="empty">
                                <a className="active-login button btn" href="#">
                                  Login <br />
                                  To View cart{" "}
                                  <i
                                    aria-hidden="true"
                                    className="arrow_right"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
