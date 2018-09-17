import React from 'react';
const AsyncService = (importComponent) => { 
   class InsideAsyncService extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      };
    }
    async componentDidMount() {
      const {default: component} = await importComponent()
      this.setState({
        component: component
      })
    }
    render() {
      const Com = this.state.component;
      return Com ? <Com {...this.props}/> : null
    }
   }
   return InsideAsyncService
 };

 export default AsyncService;