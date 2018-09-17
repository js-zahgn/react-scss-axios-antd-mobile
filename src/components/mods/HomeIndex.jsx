import React from 'react';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import { initDataList,getDataList } from '../../store/actions';
import { Carousel,Toast } from 'antd-mobile';
import Swipe from 'react-id-swiper';
import '../../static/style/swiper.scss';
import { Url,Http } from '../../UIConfig/api';
import { Tools } from '../../UIConfig/common';
import Goods from './Goods';
import Floor from './Floor';
import createHistory from 'history/createHashHistory';
const history = createHistory();

class HomeIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      sliders: [],
      category: [],
      recommend: [],
      floor1: [],
      floor2: [],
      floor3: [],
      floorTitle: {},
      hotGoods: []
    };
  }

  componentWillMount() {
    const _this = this;
    _this.setState({loading:true});
    Toast.loading('loading...',0);
    Http.get(Url.getTotalData).then(res=>{
      Toast.hide();
      const { data } = res.data;
      _this.setState({
        loading:false,
        sliders: data.slides,
        category: data.category,
        adBanner: data.advertesPicture,
        recommend: data.recommend,
        floor1: data.floor1,
        floor2: data.floor2,
        floor3: data.floor3,
        floorTitle: data.floorName,
        hotGoods: data.hotGoods
      });
      _this.props.initDataList(res.data.data);
    });
  }

  goGoods(id) {
    const param = {
      pathname:'/goodsPage',
      search : `goodsId=${id}`,
      state: {
        goodsId: id
      }
    };
    history.push(param);
  }

  render() {
    const { loading,sliders,category,adBanner,recommend,
            floor1,floor2,floor3,floorTitle,hotGoods } = this.state;
    return (
      
      <div className="homeIndex">
        {
          loading ? '数据加载中...' :
          <div>
            <Carousel autoplay infinite autoplayInterval={4000}
                      className="autoSliderBox" 
                      dotActiveStyle={{backgroundColor:'#f60'}}>
              {
                sliders.map(item=>(
                  <div className="sliderItem" key={item.goodsId} 
                       onClick={this.goGoods.bind(this,item.goodsId)}>
                    <img src={item.image} alt=""/>
                  </div>
                )) 
              }
            </Carousel>
            <ul className="categoryList">
              {
                category.map(item=>(
                  <li key={item.mallCategoryId}>
                    <img src={item.image} alt=""/>
                    <span>{item.mallCategoryName}</span>
                  </li>
                ))
              }
            </ul>
            <div className="adBanner">
              <img src={adBanner.PICTURE_ADDRESS} alt=""/>
            </div>
            <div className="recommendArea">
              <div className="title">商品推荐</div>
              <Swipe containerClass="content" lazy={true}  
                     slidesPerView = {3} slidesPerGroup = {3}>
                {
                  recommend.map(item=>(
                    <div className="goodsItem" key={item.goodsId}
                         onClick={this.goGoods.bind(this,item.goodsId)}>
                      <img src={item.image} alt="" width="80%"/>
                      <div>
                        <p>￥{Tools.money(item.price)}</p>
                        <p>￥{Tools.money(item.mallPrice)}</p>
                      </div>
                    </div>
                  )) 
                }
              </Swipe>
            </div>
            <div className="floorArea">
              <Floor title={floorTitle.floor1} list={floor1} goGoods={this.goGoods.bind(this)}/>
              <Floor title={floorTitle.floor2} list={floor2} goGoods={this.goGoods.bind(this)}/>
              <Floor title={floorTitle.floor3} list={floor3} goGoods={this.goGoods.bind(this)}/>
            </div>
            <div className="hotArea">
              <div className="title">
                热卖商品
              </div>
              {
                hotGoods.map(item=>(<Goods key={item.goodsId}
                                           goGoods={this.goGoods.bind(this)}
                                            ID={item.goodsId} 
                                            PRESENT_PRICE={item.price} 
                                            NAME={item.name}
                                            IMAGE1={item.image}/>))
              }
            </div>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state)=> {
  return {
    totalData : state.TotalDataList,
  };
};

const mapDispatchToProps = (dispatch)=> {
  return bindActionCreators({ initDataList,getDataList },dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeIndex);