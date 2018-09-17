import React from 'react';
import { NavBar } from 'antd-mobile';
import { Url,Http } from '../UIConfig/api';
import { Tools } from '../UIConfig/common';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: []
    };
  }

  componentDidMount() {
    const _this = this;
    Http.get(Url.getCategoryList).then(res=>{
      _this.setState({category:res.data.data});
    });
  }

  render() {
    const { category } = this.state;
    return (
      <div className="categoryComponent">
        <NavBar mode="dark" >商品类别</NavBar>
        <ul className="headerBar">
          {
            category.map(item=>(
              <li key={item.ID}>
                <img src={item.IMAGE} alt="" width="60%"/>
                <span>{item.MALL_CATEGORY_NAME}</span>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}


export default Category;