import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Loadable from 'react-loadable';
import Loading from './HomeComponent';
// import LazyLoad from 'react-lazyload';
// import { TransitionGroup } from 'react-transition-group';
// import './Style.css';
import './New.css';

const ImageLoader = () => {
  return (<div>Loading ...</div>)
}
const LoadableComponent = Loadable({
  loader: () => import('./HomeComponent'),
  loading: Loading,
});
class Home extends PureComponent{
  constructor(props) {
    super(props) 
      this.state = {
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

  render() {
    const { isLoading } = this.state
    if(isLoading){
      return <ImageLoader/>
    }
    return (
      <div>
        <Container>
        <LoadableComponent/>
        </Container>
      </div>
    );
  }
}

export default Home;