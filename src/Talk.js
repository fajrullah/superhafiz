import React, { PureComponent } from 'react';
// import './App.css';
import './New.css';
import Loadable from 'react-loadable';
import Loading from './TalkComponent';

const ImageLoader = () => {
  return (<div>Loading ...</div>)
}
const LoadableComponent = Loadable({
  loader: () => import('./TalkComponent'),
  loading: Loading,
});

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
    const playStatusSound = this.state.show ? "Sound.status.PLAYING" : "Sound.status.STOPPED"
    if(isLoading){
      return <ImageLoader/>
    }
    console.log(playStatusSound)
    return (
      <LoadableComponent/>
    );
  }
}
export default Talk;