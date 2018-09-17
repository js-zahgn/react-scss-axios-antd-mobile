import React from 'react';
import { Toast,Icon } from 'antd-mobile';
import { Url,Http } from '../UIConfig/api';

import Ico from './mods/Ico';
import SearchList from './mods/SearchList';
import HomeIndex from './mods/HomeIndex';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goodsName: '牛奶',
      searchList: []
    };
  }

  setSearchName(e) {
    this.setState({goodsName:e.target.value});
  }

  getSearchList() {
    const _this = this;
    const param = {
      name: _this.state.goodsName
    };

    Http.post(Url.getGoodsListByName,param).then(res=>{
      console.log(res);
      if (res.status == 200) {
        if (res.data.list.length == 0) {
          Toast.info('没有此名称商品');
        }
        _this.setState({searchList: res.data.list});
      } else {
        Toast.fail('获取数据失败');
      }
    });
  }

  render() {
    const { searchList,goodsName } = this.state;
    return (
      <div className="homeComponent">
        <div className="homeNavBar">
          {
            searchList.length > 0 ? 
            <Icon type="left" onClick={()=>this.setState({searchList:[]})}/> : 
            <Ico type="location"/>
          }
          <div className="inputBox">
            <input type="text" placeholder="请输入商品名"
                  value={goodsName}
                  onChange={(e)=>this.setSearchName(e)}/>
          </div>
          <span onClick={this.getSearchList.bind(this)}><Ico type="search" /></span>
        </div>
        {
          searchList.length > 0 ? <SearchList list={searchList}/> : 
          <HomeIndex />
        }
      </div>
    );
  }
}

export default Home;