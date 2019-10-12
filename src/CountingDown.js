import React, { Component } from 'react';
import './New.css';
import { Row, Col,Form, Button } from 'react-bootstrap';
import bg_bumi from './images/background-bumi.png';
import hafiz_roket_before from './images/hafiz_roket_before.png';
import hafiz_roket from './images/hafiz_roket.png';
import Countdown from 'react-countdown-now';
import awan_belakang from './images/awan_belakang_roket.png';
import awan_depan from './images/awan_tengah_roket.png';
import dust from './images/dust.png';
import fire_roket from './images/fire_roket.png';
import arus_roket from './images/arus_roket.png';
import Loadable from 'react-loadable';
import Loading from './CountingComponent';
 
function MyLoadingComponent() {
  return <div>Loading...</div>;
}

const LoadableAnotherComponent = Loadable({
  loader: () => import('./CountingComponent'),
  loading: Loading,
});

const ImageLoader = () => {
  return (<div>Loading ...</div>)
}

const Completionist = () => {
  return (
    <div>
      <img src={arus_roket} className="arus_roket absolute" alt="fire roket kiri"/>
      <img src={arus_roket} className="arus_roket1 absolute" alt="fire roket kiri"/>
      <img src={fire_roket} className="fire_roket absolute" alt="fire roket kiri"/>
      <img src={fire_roket} className="fire_roket1 absolute" alt="fire roket kiri"/>
      <img src={hafiz_roket} className="hafiz_roket absolute" alt="fire roket kiri"/>
      <img src={bg_bumi} className="bg_bumi_complete absolute" alt="fire roket kiri"/>
      <img src={dust} className="dust_awan_roket absolute" alt="debu roket"/>
      <img src={awan_belakang} className="bg_awan_belakang_roket absolute" alt="awan di belakang roket"/>
      <img src={awan_depan} className="bg_awan_tengah_roket absolute" alt="awan di tengah roket"/>
      <h2 className="digital_after absolute">00 : 00 : 00</h2>
    </div>
    )
};

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return <div>
            {/* <img src={planet_orange} className="planet_orange_before absolute" alt="fire roket kiri"/> */}
            <img src={hafiz_roket_before} className="hafiz_roket_before absolute" alt="fire roket kiri"/>
            <img src={bg_bumi} className="bg_bumi absolute" alt="fire roket kiri"/>
            <h5 className="countdown_h5 absolute">Hafiz akan datang dalam </h5><br/><h2 className="digital absolute">{hours} : {minutes} : {seconds}</h2>
            <br/><h5 className="countdown_h5_jam absolute">Jam Menit Detik </h5>
            <img src={awan_depan} className="bg_awan_tengah_before absolute" alt="awan di tengah roket"/>
          </div>;
  }
};


class CountingDown extends Component{
  constructor(props) {
    super(props) 
      this.state = {
        show: false,
        isLoading : true,
      }
  }
  static getDerivedStateFromProps(props, state) {
    if (props.isrender !== state.isLoading) {
      return {isLoading: props.isrender }
    }

  // Return null if the state hasn't changed
    return null;
  }
  componentDidMount(){
    const { isrender, renderer } = this.props
    this.setState({
      isLoading : isrender,
    })
  }

  render() {
    const { isLoading } = this.state
    if(isLoading){
      return <ImageLoader/>
    }
    // console.log(Date.now())
    console.log(renderer)
    return (
      <LoadableAnotherComponent/>
    );
  }
}
export default CountingDown;