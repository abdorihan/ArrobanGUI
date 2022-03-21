import React from 'react';
import { SERVER } from '../Utils';

class About extends React.Component {
 render() {
   console.log(this.props.data);
   let name = '';
   let desc = '';
   let img = '';
   if(this.props.data){
      name = this.props.data.name;
      desc = this.props.data.aboutbrief;
      img = this.props.data.img.data.attributes.url;
   }

    return (
      <section className="u-clearfix u-image u-section-3" id="carousel_0e2e" data-image-width="1125" data-image-height="1500">
      <div className="u-clearfix u-sheet u-sheet-1">
        <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
          <div className="u-layout">
            <div className="u-layout-row">
              <div className="u-align-center u-container-style u-layout-cell u-left-cell u-size-23 u-layout-cell-1">
                <div className="u-container-layout u-valign-middle u-container-layout-1">
                  <div style={{backgroundImage: `url(${SERVER}${img})`}} alt="" className="u-image u-image-circle u-image-1" src="" data-image-width="1386" data-image-height="1385"></div>
                </div>
              </div>
              <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-37 u-layout-cell-2">
                <div className="u-container-layout u-container-layout-2">
                  <h2 className="u-custom-font u-font-playfair-display u-text u-text-body-alt-color u-text-1">{name}</h2>
                  <p className="u-text u-text-grey-30 u-text-2">{desc}</p>
                  <a href="/" className="u-border-2 u-border-white u-btn u-btn-rectangle u-button-style u-none u-btn-1">read more</a>
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
  
export default About;


