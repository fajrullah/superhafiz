import React, { PureComponent } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import {  Row, Col, Button } from 'react-bootstrap';
// import planet_ungu from './images/planet-ungu.png';
// import planet_orange from './images/planet-orange.png';
import awan_depan from './images/awan_tengah.png';
import awan_tengah from './images/awan_depan.png';
import kepala_hafiz from './images/kepala_hafiz.png';
import kepala_user from './images/kepala-user.png';
import assalamualaikum from './images/assalamualaikum.png';
import balon_user_custom from './images/dialog-user-custom1.png';
import apakabar from './images/apakabar.png';
// import balon_hafiz from './images/dialog-hafiz-long.png';
import balon_hafiz_custom from './images/dialog-hafiz-long-custom.png';
import balon_hafiz_custom1 from './images/dialog-hafiz-long-custom1.png';
import alhamdulillah from './images/alhamdulillah.png'; 
import walaikumsalam from './images/walaikumsalam.png';
import hafiz from './images/FOR-GIF.gif';
import background from './images/backgroundblack.png';
// import talk_button from './images/talk_button.png';
import klikdisini from './images/klikdisini.png';
// import hand from './images/hand.png';
import Sound from 'react-sound';

const ImageLoader = () => {
  return (<div>Loading ...</div>)
}

class Talk extends PureComponent{
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
    const { isrender } = this.props
    this.setState({
      isLoading : isrender
    })
  }
  
  changeStyle()  {
    this.setState({show: !this.state.show})
    // console.log('change style')
  }

  render() {
    const { isLoading } = this.state
    // console.log(Sound.status.PLAYING)
    // const columnstyle = this.state.show ? "column" : "hide";
    const backgroundblack = this.state.show ? "hide" : "whiteButton";
    const klikdisinistyle = this.state.show ? "hide" : "klik-style";
    const buttonclass = this.state.show ? "hide" : "talk_button";
    const hafizstyle = this.state.show ? "hafiz_talk_left" : "hafiz_talk";
    const headhafizstyle = this.state.show ? "head_hafiz" : "hide";
    const headhafizstyle2 = this.state.show ? "head_hafiz2" : "hide";
    const headuserstyle = this.state.show ? "head_user" : "hide";
    const assalamualaikumstyle = this.state.show ? "assalamualaikum" : "hide";
    const walaikumsalamstyle = this.state.show ? "walaikumsalam" : "hide";
    const headuserstyle1 = this.state.show ? "head_user1" : "hide";
    const apakabarstyle = this.state.show ? "apakabar" : "hide";
    const headhafizstyle1 = this.state.show ? "head_hafiz1" : "hide";
    const balonhafizstyle1 = this.state.show ? "balon_hafiz1" : "hide";
    const balonhafizstyle11 = this.state.show ? "balon_hafiz11" : "hide";
    const alhamdulillahstyle = this.state.show ? "alhamdulillah" : "hide";
    const headuserstyle2 = this.state.show ? "head_user2" : "hide";    
    const descriptionstyle = this.state.show ? "description_talk" : "hide";
    const balonusercustom = this.state.show ? "balon_user_custom" : "hide";
    const playStatusSound = this.state.show ? "Sound.status.PLAYING" : "Sound.status.STOPPED"
    // console.log(isLoading)
    if(isLoading){
      return <ImageLoader/>
    }
    console.log(playStatusSound)
    return (
      <Container>
        <Button className={buttonclass} onClick={this.changeStyle.bind(this)}> TALK </Button>
        <img src={background} className={backgroundblack} alt="background-black"/>
        <img src={klikdisini} className={klikdisinistyle} alt="background-black"/>
        <p className={descriptionstyle}>Ini Kalimat Untuk Deskripsi Produk, Misalkan Contohnya, Superhafiz Ini Bisa di Ajak Ngobrol, Belajar Ngaji, Curhat, dll</p>
        <Row>
          <Sound
            url="./withoutuservoice.mp3"
            playStatus={Sound.status.PLAYING}
            playFromPosition={200}
            volume={100}
            autoLoad={false}
            loop={false}
            />
            {/* <img src={button} className="button_talk" alt="orange planet in page about" onClick={() => imageClick()} style={{"pointer-events": "all"}}/> */}
          <Col>
            {/* <img src={planet_ungu} className="planet_ungu" alt="planet ungu di halaman talk"/> */}
          </Col>
          <Col>
            <img src={hafiz} className={hafizstyle} alt="planet ungu di halaman talk"/>        
          </Col>
          <Col className="column">
            <img src={ kepala_user  } className={headuserstyle} alt="kepala user di halaman talk"/>
            <img src={ assalamualaikum   } className={assalamualaikumstyle}  alt="balon dialog user di halaman talk"/>

            <img src={ kepala_hafiz } className={headhafizstyle}  alt="kepala hafiz di bagian animasi chat di halaman talk"/>
            <img src={ walaikumsalam  } className={walaikumsalamstyle} alt="balon dialog hafiz di halaman talk"/>

            <img src={ kepala_user  } className={headuserstyle1} alt="kepala user di halaman talk"/>
            <img src={ apakabar  } className={apakabarstyle} alt="balon dialog user di halaman talk"/>

            <img src={ kepala_hafiz } className={headhafizstyle1} alt="kepala hafiz di bagian animasi chat di halaman talk"/>
            <img src={ alhamdulillah } className={alhamdulillahstyle} alt="balon dialog hafiz di halaman talk"/>
            {/* <img src={ balon_hafiz_custom } className={balonhafizstyle1} alt="balon dialog hafiz di halaman talk"/> */}

            <img src={ kepala_user  } className={headuserstyle2} alt="kepala user di halaman talk"/>
            <img src={ balon_user_custom  } className={balonusercustom} alt="balon dialog user di halaman talk"/>
            
            <img src={ kepala_hafiz } className={headhafizstyle2} alt="kepala hafiz di bagian animasi chat di halaman talk"/>
            <img src={ balon_hafiz_custom1 } className={balonhafizstyle11} alt="balon dialog hafiz di halaman talk"/>
          </Col>
        </Row>
        <Row className="bg_awan_talk">
          <img src={ awan_depan  } className="bg_awan"        alt="cloud in page contact"/>
					<img src={ awan_tengah } className="bg_awan_tengah" alt="cloud in page contact"/>
        </Row>
      </Container>
    );
  }
}
export default Talk;