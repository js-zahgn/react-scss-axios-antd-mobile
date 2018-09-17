import React from 'react';
import { ListView } from 'antd-mobile';
import Goods from './Goods';

class TheList extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource,
      isLoading: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.list !== this.props.list) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.list),
      });
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.props.list),
        isLoading: false,
      });
    }, 600);
  }

  render() {
    const { list } = this.props;
    let index = list.length - 1;
    const row = () => {
      if (index < 0) {
        index = list.length - 1;
      }
      const goods = list[index--];
      return <Goods {...goods}/>;
    };
    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderFooter={() => (<div style={{ textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'No More Goods...'}
        </div>)}
        renderRow={row}
        className="searchGoodsList"
        pageSize={8}
        useBodyScroll
        scrollRenderAheadDistance={800}
      />
    );
  }
}

export default TheList;