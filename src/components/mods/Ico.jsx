import React from 'react';

class MyIcon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { type,cName } = this.props;
    return <span className={`iconfont icon-${type} ${cName ? cName : ''}`} />;
  }
}

export default MyIcon;
