import React from 'react';
import { TabBar } from 'antd-mobile';

import '../static/style/main.scss';
import Home from '../components/Home';
import Category from '../components/Category';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
        };
    }

    render() {
        return (
            <div className="mainContent">
                <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white">
                    <TabBar.Item title="商城" key="商城"
                        icon={<span className="iconfont icon-home" />}
                        selectedIcon={<span className="iconfont icon-home" />}
                        selected={this.state.selectedTab === 'home'}
                        onPress={()=> this.setState({ selectedTab: 'home' })}>
                        <Home/></TabBar.Item>
                    <TabBar.Item title="分类" key="分类"
                        icon={<span className="iconfont icon-list" />}
                        selectedIcon={<span className="iconfont icon-list" />}
                        selected={this.state.selectedTab === 'category'}
                        onPress={()=> this.setState({ selectedTab: 'category' })}>
                        <Category/></TabBar.Item>
                    <TabBar.Item title="购物车" key="购物车"
                        icon={<span className="iconfont icon-cart" />}
                        selectedIcon={<span className="iconfont icon-cart" />}
                        selected={this.state.selectedTab === 'shoppingCart'}
                        onPress={()=> this.setState({ selectedTab: 'shoppingCart' })}>
                        购物车</TabBar.Item>
                    <TabBar.Item title="会员中心" key="会员中心"
                        icon={<span className="iconfont icon-my" />}
                        selectedIcon={<span className="iconfont icon-my" />}
                        selected={this.state.selectedTab === 'myInfo'}
                        onPress={()=> this.setState({ selectedTab: 'myInfo' })}>
                        会员中心诶呦挖虐啊</TabBar.Item>
                </TabBar>
            </div>
            
        );
    }
}

export default Main;