import React from 'react';
import { UserContext, ThemeContext } from '../../store/context';

const ContextChild = () => <div><GrandContextChild /></div>;

class GrandContextChild extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <UserContext.Consumer>
          {
            user => (
              <ThemeContext.Consumer>
                {
                  ({ message,fn }) => (<div>
                    <span>{user}</span>
                    <input type="text" onChange={fn} />
                    <p>{message}</p>
                  </div>)
                }
              </ThemeContext.Consumer>
            )
          }
        </UserContext.Consumer>

      </div>
    );
  }
}

export default ContextChild;