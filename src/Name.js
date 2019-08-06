import React from 'react'
var myStyle = {color:'red', textAlign: 'center'}
class Name extends React.Component  {
  render(){
    return <h1 style={myStyle}>网站名称：{this.props.name}</h1>
  }
  
}

export default Name