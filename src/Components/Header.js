import React from 'react';
import { SERVER } from '../Utils';



class Header extends React.Component {


      
    render() {
        return (
            <header className="u-clearfix u-header u-header" id="sec-0289">
            <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
              <a href="/" className="u-image u-logo u-image-1">
                {this.props.data && this.props.data.logo ?
                  <img src={SERVER + this.props.data.logo.data.attributes.url} className="u-logo-image u-logo-image-1"/> :
                  ''
                }
              </a>
              <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
                <div className="menu-collapse" style={{fontSize: '1rem', letterSpacing: 0}}>
                  <a className="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="#">
                    <svg className="u-svg-link" viewBox="0 0 24 24"><use xlink="http://www.w3.org/1999/xlink" href="#menu-hamburger"></use></svg>
                    <svg className="u-svg-content" version="1.1" id="menu-hamburger" viewBox="0 0 16 16" x="0px" y="0px" xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g><rect y="1" width="16" height="2"></rect><rect y="7" width="16" height="2"></rect><rect y="13" width="16" height="2"></rect>
      </g></svg>
                  </a>
                </div>
                <div className="u-nav-container">
                  <ul className="u-nav u-unstyled u-nav-1">
                  {this.props.data && this.props.data.pages ?
                       this.props.data.pages.data.map( (page, indx) => <li key={indx} className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href={page.attributes.pageid || '/'} style={{padding: '10px 20px'}}>{page.attributes.name}</a></li>): 
                       ''}
                  </ul>
                </div>
                <div className="u-nav-container-collapse">
                  <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                    <div className="u-inner-container-layout u-sidenav-overflow">
                      <div className="u-menu-close"></div>
                      <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                      {this.props.data && this.props.data.pages ?
                       this.props.data.pages.data.map( (page, indx) => <li key={indx} className="u-nav-item"><a className="u-button-style u-nav-link" href={page.attributes.pageid || '/'}>{page.attributes.name}</a></li>): 
                       ''}
                        
                      </ul>
                    </div>
                  </div>
                  <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
                </div>
              </nav>
            </div>
            </header>
        );
    }
}
export default Header;


