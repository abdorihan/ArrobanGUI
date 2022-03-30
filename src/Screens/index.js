import React from 'react';
import Header from '../Components/Header';
import MainInfo from '../Components/MainInfo';
import Services from '../Components/Services';
import About from '../Components/About';
import Calculator from '../Components/Caculator';
import Footer from '../Components/Footer';
import Why from '../Components/Why';
import { SERVER } from '../Utils';
const axios = require('axios').default;


class HomePage extends React.Component {
  constructor(){
    super();
    this.state={
      pageTitle: '',
      loaded: false
    }
  }

  componentDidMount() {
    axios.get(`${SERVER}/api/global`)
      .then(res => {
        this.setState({ header: res.data.data.attributes.header });
      }).catch(err=>{
        console.log(err);
      });
      axios.get(`${SERVER}/api/home-page`)
      .then(res => {
        console.log(res);
        this.setState({ 
          mainInfo: res.data.data.attributes.maininfo,
          about: res.data.data.attributes.about,
          whyus: res.data.data.attributes.whyus,
          whyusbackground: res.data.data.attributes.whyusbackground,
          whyusdesc: res.data.data.attributes.whyusdesc,
          whyuselement: res.data.data.attributes.whyuselement,
          services: res.data.data.attributes.services,
        });
      }).catch(err=>{
        console.log(err);
      })
  }


  render(){
    return (
      <div>
        <Header data={this.state.header}/>
        <MainInfo data={this.state.mainInfo}/>
        <Services data={this.state.services}/>
        <About data={this.state.about}/>
        <Why data={{elements : this.state.whyuselement, background: this.state.whyusbackground, desc: this.state.whyusdesc}}/>
        <Calculator />
        <Footer />
      </div>
    );
  }
  }
  
  export default HomePage;
  