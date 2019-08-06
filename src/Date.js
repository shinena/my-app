import React from 'react'

function FormattedDate(props){
  return <h2>现在是：{props.date.toLocaleTimeString()}</h2> // locate大小写问题
}
class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render(){
    return (
      <div>
        <FormattedDate date={this.state.date} />  
      </div>
    )
  }
}

export default Clock
// 用Date和默认有冲突