import React, { Component } from 'react';
import ConnectTodos from './Todos';
import ConnectGoals from './Goals';
import { connect }  from 'react-redux';
import { handleInitialData}  from '../actions/shared';
import { ToastContainer } from 'react-toastify';

class App extends Component {
  componentDidMount(){
      const { dispatch } = this.props;                
      dispatch(handleInitialData())                            
  }
  render(){

      if (this.props.loading === true){
          return <h3>Loading...</h3>
      }
      return (
          <div>
              <ConnectTodos/>                    
              <ConnectGoals/>
              <ToastContainer autoClose={8000} />
          </div>          
      )
  }
}

export default connect((state) => (
  {
      loading: state.loading
  }
))(App)
