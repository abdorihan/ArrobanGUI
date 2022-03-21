import React from 'react';
import Header from '../Components/Header';
import MainInfo from '../Components/MainInfo';
import Services from '../Components/Services';
import About from '../Components/About';
import Calculator from '../Components/Caculator';
import Footer from '../Components/Footer';
import Why from '../Components/Why';
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
    axios.get(`http://10.251.11.73:1337/api/global`)
      .then(res => {
        this.setState({ header: res.data.data.attributes.header });
      }).catch(err=>{
        console.log(err);
      });
      axios.get(`http://10.251.11.73:1337/api/home-page`)
      .then(res => {
        console.log(res);
        this.setState({ 
          mainInfo: res.data.data.attributes.maininfo,
          about: res.data.data.attributes.about,
          whyus: res.data.data.attributes.whyus,
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
        <Why data={this.state.whyus}/>
        <Calculator />
        <Footer />
      </div>
    );
  }
  }
  
  export default HomePage;
  