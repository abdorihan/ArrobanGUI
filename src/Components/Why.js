import React from 'react';
import { SERVER } from '../Utils';


class Why extends React.Component {
render() {

  let  background = '';
  let desc = '';
  let elements = [];
    console.log(this.props.data);
  if(this.props.data && this.props.data.background) {
    background = this.props.data.background.data.attributes.url;
    desc = this.props.data.desc;
    elements = this.props.data.elements;
  }
    return (
      <section className="u-black u-clearfix u-section-4" id="carousel_a0b6">
      
      <img className="u-expanded-width u-image u-image-1" src={`${SERVER}${background}`} data-image-width="1387" data-image-height="622"/>
      
      <div className="u-clearfix u-gutter-26 u-layout-wrap u-layout-wrap-1">
        <div className="u-layout">
          <div className="u-layout-row">


            {elements && elements.map((elm, indx) =>{
              return (
                <div key={indx} className="u-size-15 u-size-30-md">
                  <div className="u-layout-col">
                    {indx%2 ==0 ? 
                    <div className={`u-container-style u-layout-cell u-size-20 u-layout-cell-1`}>
                    <div className="u-container-layout u-container-layout-1"></div>
                  </div>
                  :''}
                    <div className="u-align-center u-container-style u-grey-10 u-layout-cell u-size-40 u-layout-cell-2">
                      <div className="u-container-layout u-valign-top u-container-layout-2">
                        <span className="u-file-icon u-icon u-icon-circle u-palette-3-base u-spacing-18 u-icon-1">
                          <img src={`${SERVER}${elm.img.data.attributes.url}`} alt=""/></span>
                        <h5 className="u-custom-font u-font-roboto-condensed u-text u-text-1">{elm.name}</h5>
                        <p className="u-text u-text-2">{elm.description}</p>
                        {/* <a href="/" className="u-active-none u-align-center u-border-1 u-border-active-grey-60 u-border-black u-border-hover-grey-60 u-btn u-button-style u-hover-none u-none u-text-body-color u-btn-1">more</a> */}
                      </div>
                    </div>
                    {indx%2 ==1 ? 
                    <div className={`u-container-style u-layout-cell u-size-20 u-layout-cell-1`}>
                    <div className="u-container-layout u-container-layout-1"></div>
                  </div>
                  :''}
                  </div>
                </div>
              );
            })}

            



          </div>
        </div>
      </div>
      <div className="u-clearfix u-layout-wrap u-layout-wrap-2">
        <div className="u-layout">
          <div className="u-layout-row">
            <div className="u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-9">
              <div className="u-container-layout u-valign-middle u-container-layout-9">
                <h1 className="u-align-center u-custom-font u-font-roboto-condensed u-text u-text-9">Why Us?</h1>
              </div>
            </div>
            <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-10">
              <div className="u-container-layout u-valign-middle u-container-layout-10">
                <p className="u-text u-text-10">{desc}</p>
                <a href="https://nicepage.com/k/awards-website-templates" className="u-active-black u-border-2 u-border-black u-btn u-button-style u-hover-black u-palette-2-base u-text-active-white u-text-black u-text-hover-palette-2-base u-btn-5">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
}
export default Why;


