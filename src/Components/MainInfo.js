import React from 'react';
import { SERVER } from '../Utils';

class MainInfo extends React.Component {

render() {
  let companyName = '';
  let background = '';
  let companyBrief = '';
  if(this.props.data){
    companyName=this.props.data.CompanyName;
    companyBrief=this.props.data.Brief;
    background=this.props.data.background.data.attributes.url;
  }
    return (
        <section style={{backgroundImage: `url("${SERVER}${background}")`}} className="u-align-left u-clearfix u-image u-section-1" id="carousel_7949" data-image-width="2169" data-image-height="1383">
      <h1 className="u-align-right u-custom-font u-font-roboto-condensed u-text u-text-body-alt-color u-text-1">
        <span className="u-text-palette-1-light-1">{companyName}</span>
        <br/>
      </h1>
      <span className="u-icon u-icon-circle u-text-body-alt-color u-icon-1">
          <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 27.555 27.555">
        </svg>
              <svg className="u-svg-content" viewBox="0 0 27.555 27.555" x="0px" y="0px" id="svg-c372" style={{enableBackground:'new 0 0 27.555 27.555'}}>
                  <g>
                      <path d="M13.777,0C7.108,0,1.701,5.407,1.701,12.076c0,3.45,1.454,6.553,3.773,8.752L5.07,27.555l5.736-3.787   c0.952,0.241,1.944,0.383,2.971,0.383c6.67,0,12.076-5.406,12.076-12.076C25.854,5.407,20.447,0,13.777,0z M12.61,11.342   c0,1.24-0.258,2.219-0.774,2.936s-1.4,1.352-2.654,1.9l-0.945-1.789c0.771-0.361,1.304-0.722,1.598-1.08   c0.295-0.36,0.459-0.784,0.493-1.273H8.237V7.974h4.373V11.342z M19.317,11.342c0,1.24-0.258,2.219-0.774,2.936   c-0.516,0.719-1.4,1.352-2.654,1.9l-0.944-1.789c0.771-0.361,1.304-0.722,1.599-1.08c0.295-0.36,0.459-0.784,0.493-1.273h-2.091   V7.974h4.373L19.317,11.342L19.317,11.342z"></path>
                    </g>
        </svg></span>
      <div className="u-align-center u-black u-container-style u-expanded-width u-group u-opacity u-opacity-40 u-group-1">
        <div className="u-container-layout u-container-layout-1">
          <p className="u-large-text u-text u-text-variant u-text-2">{companyBrief}</p>
        </div>
      </div>
    </section>
    );
  }
}
export default MainInfo;


