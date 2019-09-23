import React, { PureComponent } from 'react';
import './App.css';
import {  Row } from 'react-bootstrap';
import bi from './images/bi.png';
import bi2 from './images/bi2.png';
import layout_about from './images/layout_about.png';
import wifi from './images/about_wifimobile.png';
import talk from './images/about_talkmobile.png';
import onlinecontent from './images/about_onlinecontentmobile.png';
import offlinecontent from './images/about_offlinecontentmobile.png';
import bilingual from './images/about_bilingualmobile.png';
import konten_islami from './images/about_kontenislamimobile.png';
import AI from './images/about_AImobile.png';
import song from './images/about_songmobile.png';
import alquran from './images/about_alquranmobile.png';
import funemoticon from './images/about_funemoticonmobile.png';
import ensiklopedia from './images/about_ensiklopediamobile.png';
import matdas from './images/about_matdasmobile.png';
// import hafiz from './images/hafiz.png';
// import baling2 from './images/baling2.png';
// import center_baling2 from './images/center.png';
// import planet_orange from './images/planet-orange.png';
// import planet_ungu from './images/planet-ungu.png';
// import awan from './images/awan.png';
// import bg_awan from './images/bg_cloud.png';
// import background from './images/backgroundabout2.png';
// import hafiz from './images/hafiz_new.JPG';
// import hafizslide1 from './images/IMG_7703.JPG';
// import hafizslide2 from './images/IMG_7702.JPG';
// import hafizslide3 from './images/IMG_7704.JPG';

class About extends PureComponent{
	constructor(props) {
		super(props); 
		this.state = {
			alert: "ini di klik"
		}
	  }

  	render() {
	  this.setState = {
		  alert: "testing"
		}
		// const imageClick = () => {
		// 	alert(this.setState.alert)
		  // } 
    	return (
    	<div>
			<Row>
				<div className="cube absolute"></div>
				<div className="cube absolute version1"></div>
				<div className="cube absolute"></div>
				<img src={bi} className="bi absolute" alt="bi"/>
				<img src={bi2} className="bi2 absolute" alt="bi"/>
				<img src={layout_about} className="layout_about absolute" alt="layout about"/>				
				<div className="background_about"></div>
				<h1 className="title_about absolute">This is Title About Page</h1>
				<hr className="hr_title"/>
				<p className="description absolute">
					Superhafiz adalah produk edukasi terbaru dari Al-Qolam yang menggunakan teknologi tinggi. Yang dapat di hubungkan dengan aplikasi Hafiz-Hafizah di Android yang bisa di download di Google Play, Icon anak soleh ini bisa mengajarkan banyak hal positif kepada anak-anak dengan cara menyenangkan dan tidak membosankan.
				</p>
				<div className="wifi_about_mobile absolute" onMouseOver={this.wifi}></div>
				<img src={wifi} className="wifi_about absolute" alt="feature wifi di halaman about"/>
				<img src={talk} className="talk_about absolute" alt="feature talk di halaman about"/>
				<img src={onlinecontent} className="onlinecontent_about absolute" alt="feature online content di halaman about"/>
				<img src={offlinecontent} className="offlinecontent_about absolute" alt="feature offline content di halaman about"/>
				<img src={bilingual} className="bilingual_about absolute" alt="feature bilingual di halaman about"/>
				<img src={konten_islami} className="kontenislami_about absolute" alt="feature konten islami di halaman about"/>
				<img src={AI} className="AI_about absolute" alt="feature konten islami di halaman about"/>
				<img src={song} className="song_about absolute" alt="feature song di halaman about"/>
				<img src={alquran} className="alquran_about absolute" alt="feature alquran di halaman about"/>
				<img src={funemoticon} className="funemoticon_about absolute" alt="feature fun emoticon di halaman about"/>
				<img src={ensiklopedia} className="ensiklopedia_about absolute" alt="feature ensiklopedia di halaman about"/>
				<img src={matdas} className="matdas_about absolute" alt="feature matematika dasar di halaman about"/>
			</Row>
			
    		{/* <Row> */}
    			{/* <Col> */}
					{/* <img src={hafizslide1} className="hafiz_about" alt="awan home"/>
					<img src={hafizslide2} className="hafiz_about1" alt="awan home"/>
					<img src={hafizslide3} className="hafiz_about2" alt="awan home"/>
					<Button onClick={() => imageClick()} className="buttontest">klik ini</Button> */}
					{/* <h4 className="descriptionabout">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and scrambled it to make a type specimen book
							It has survived not only five centuries, but also the leap into electronic typesetting,
							remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
							and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
						</h4> */}
						{/* <h4 className="descriptionabout">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and scrambled it to make a type specimen book
							It has survived not only five centuries, but also the leap into electronic typesetting,
							remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
							and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
						</h4>					
						<Button onClick={() => imageClick()} className="buttontest">klik ini</Button> */}
			    {/* </Col> */}
				{/* <img src={background} className="backgroundabout2"/> */}
		    {/* </Row> */}
			{/* <Row> */}
				{/* <img src={background} className="backgroundabout2"/> */}
			{/* </Row> */}
    	</div>
    );
  }
}
export default About;