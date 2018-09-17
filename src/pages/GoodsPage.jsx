import React from 'react';
import { NavBar,Button,Toast,Icon,Tabs } from 'antd-mobile';
import { Url,Http } from '../UIConfig/api';
import { Tools } from '../UIConfig/common';
import '../static/style/goods.scss';
import createHistory from 'history/createHashHistory';
const history = createHistory();


class GoodsInfoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goodsInfo:{}
    };
  }
  componentDidMount() {
    const _this = this;
    const id = _this.props.location.search.split('goodsId=')[1];
    Http.post(Url.getDetailGoodsInfo,{goodsId:id}).then(res=>{
      _this.setState({goodsInfo:res.data.message});
    });
  }
  render() {
    const {goodsInfo} = this.state;
    return (
      <div className="goodsPage">
        <NavBar mode="dark"
                icon={<span><Icon type="left" />返回</span>}
                onLeftClick={() => history.go(-1)}>商品详情</NavBar>
        <div className="topImageBox">
          <img src={goodsInfo.IMAGE1} alt="" width="100%"/>
        </div>
        <div className="goodsName">{goodsInfo.NAME}</div>
        <div className="goodsPrice">价格：￥{Tools.money(goodsInfo.PRESENT_PRICE)}</div>
        <div>
        <Tabs tabs={[{title:'商品详情'},{title:' 评价'}]}
              initialPage={0}>
          <div className="detail" dangerouslySetInnerHTML={{__html: goodsInfo.DETAIL}}/>
          <div>collecting</div>
        </Tabs>
        </div>
        <div className="footer">
          <Button>加入购物车</Button>
          <Button type="warning">直接购买</Button>
        </div>
      </div>
    );
  }
}

export default GoodsInfoPage;