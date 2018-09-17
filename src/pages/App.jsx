import React from 'react';
import { Router,Switch,Route,Redirect } from 'react-router-dom';
import createHistory from 'history/createHashHistory';

import Main from './Main';
import GoodsPage from './GoodsPage';
import MyInfo from './MyInfo';

const history = createHistory();

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Router history = {history}>
                <Switch>
                    <Route exact path="/" render={()=><Redirect to="/main"/>}/>
                    <Route path="/main" component={Main}/>
                    <Route path="/goodsPage" component={GoodsPage}/>
                    <Route path="/goodsPage/:id" component={GoodsPage}/>
                    <Route path="/info" component={MyInfo}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
