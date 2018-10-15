import React from 'react';
import { Switch,Route,Link } from 'react-router-dom';

import { UserContext,ThemeContext } from '../store/context';

import ContextChild from '../components/mods/ContextChild';

class TheInfo extends React.Component {
  constructor(props) {
    super(props);

    this.changeContextMsg = (e) => {
      console.log(e.target.value)
      const { themeContext } = this.state;
      themeContext.message = e.target.value;
      this.setState({
        themeContext
      });
    };

    this.state = {
      userContext: 'this is user',
      themeContext: {
        message: 'theme context',
        fn: this.changeContextMsg
      }
    };
  }

  render() {
    return (
    <div>
      <h2>个人信息</h2>
        <UserContext.Provider value={this.state.userContext}>
          <ThemeContext.Provider value={this.state.themeContext}>
            <ContextChild/>
          </ThemeContext.Provider>
        </UserContext.Provider>
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
