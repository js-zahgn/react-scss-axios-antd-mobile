import React from 'react';
import { Switch,Route,Link } from 'react-router-dom';

class TheInfo extends React.Component {
  render() {
    return (
    <div>
      <h2>个人信息</h2>
      <ul>
        <li>
          <Link to="/info/rendering">Rendering with React Routers</Link>
        </li>
        <li>
          <Link to="/info/components">Components Router</Link>
        </li>
        <li>
          <Link to="/info/props-v-state">Props v. State Router</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/info" render={()=><h3>Please select a topic.</h3>}/>
        <Route path="/info/rendering" render={()=><h3>rendering page.</h3>}/>
        <Route path="/info/components" render={()=><h3>components page.</h3>}/>
        <Route path="/info/props-v-state" render={()=><h3>props-v-state page.</h3>}/>
      </Switch>
    </div>
    );
  }
}
export default TheInfo;