import React from 'react';
import LazyLoad from 'react-lazyload';

class Goods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src : this.props.IMAGE1 ? this.props.IMAGE1 : ''
    };
  }
  render() {
    const { props } = this;
    const { src } = this.state;
    return (
      <div className="goodsBox" key={props.ID} onClick={()=> props.goGoods(props.ID)}>
        <div className="goodsImg">
          <LazyLoad height={50}>
            <img src={src} alt="" width="100%"
                onError={()=> this.setState({src:require('../../static/images/4.jpg')})}/>
          </LazyLoad>
        </div>
        <div className="goodsDetail">
          <p>{props.NAME}</p>
          <span>￥<em>{props.PRESENT_PRICE}</em></span>
        </div>
      </div>
    );
  }
}
export default Goods;