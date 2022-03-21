import React from 'react';
import { SERVER } from '../Utils';

class Services extends React.Component {
render() {
    let services = [];
    
    if (this.props.data) {
      services = this.props.data;
    }
    return (
      
      <section className="u-align-center u-clearfix u-white u-section-2" id="carousel_5df3">
      <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <h2 className="u-text u-text-1">Our Services</h2>
        <div className="u-border-3 u-border-palette-4-light-1 u-line u-line-horizontal u-line-1"></div>
        <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
          <div className="u-gutter-0 u-layout">
            <div className="u-layout-col">
              <div className="u-size-30">
                <div className="u-layout-row">
                  {
                    services && services.map((service, indx) => {
                      return (
                        [<div key={indx*1} className="u-align-center u-container-style u-layout-cell u-left-cell u-size-30-md u-size-6 u-layout-cell-1">
                        <div className="u-container-layout u-valign-top u-container-layout-1">
                          <span className="u-border-2 u-border-palette-4-light-1 u-file-icon u-icon u-icon-rounded u-radius-10 u-spacing-12 u-icon-1">
                            <img src={`${SERVER}${service.icon.data.attributes.url}`} alt=""/></span>
                        </div>
                      </div>,
                      <div key={indx*1 + 1} className="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-container-style u-layout-cell u-size-14 u-size-30-md u-layout-cell-2">
                        <div className="u-container-layout u-container-layout-2">
                          <h3 className="u-text u-text-2">{service.name}</h3>
                          <p className="u-text u-text-font u-text-3">{service.description}</p>
                        </div>
                      </div>]
                      );
                    })
                  }
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
}
export default Services;
