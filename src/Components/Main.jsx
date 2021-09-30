// import logo from './logo.svg';
import Slideshow from './SlideShow';
import {Image} from "./Image"
import {Delivery} from "./Delivery"
import{Card} from "./Card"
import SlideShowAgain from "./slideShowAgain"
function Main() {
  return (
    <div className="App">
      <Image image="https://assets.ajio.com/medias/sys_master/images/images/h86/h94/44453415288862/22092021-d-unisex-topcarousel-p1-bbsprebuzz-50to90.jpg"/>
      <Slideshow/>
      <Delivery/>
      <Image image="https://assets.ajio.com/medias/sys_master/images/images/h94/hb5/44459908628510/27092021-d-unisex-freeevent-uspa.jpg"/>
      <Card/>
      <SlideShowAgain/>
    </div>
  );
}

export default Main;