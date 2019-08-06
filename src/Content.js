import React from 'react'

class Content extends React.Component{
  componentWillMount(){
    console.log("Component WILL NOUNT!")
  }
  componentDidMount(){
    console.log("Component DID MOUNT")
  }
  componentWillReceiveProps(){
    console.log("Component WILL RECEIVE PROPS")
  }
  shouldComponentUpdate(newProps, nextState){
    return true
  }
  componentWillUpdate(nextProps, nextState){
    console.log('Component WILL UPDATE')
  }
  componentDidUpdate(prevProps, prevState){
    console.log('Component DID UPDATE')
  }
  componentWillUnmount(){
    console.log('Component WILL UNMOUNT')
  }
  render(){
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    )
  }
}

export default Content