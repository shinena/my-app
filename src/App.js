import React from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './Name'
import Url from './Url'
import Nickname from './Nickname'
import Clock from './Date'
import LoginControl from './LoginControl'
import NumberList from './NumberList'
import Counter from './Counter'
import Button from './Button';
// import UserGist from './UserGist'
import FlavorForm from './FlavorForm'

const numbers = [1,2,3,4,5]
class App extends React.Component {
  constructor(){
    super();
    this.state={
      name : "我的网站",
      url:"http://www.baidu.com",
      nickname:"hello world!",
      isToggleOn: true
    }
    // this.handleClick = this.handleClick.bind(this)
  }
    handleClick = () => {
      console.log('this is:', this)
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }))
      console.log('链接被点击')
    }
    preventPop(name, e){
      e.preventDefault()
      alert(name)
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello World!</h2>
          <p>
            你可以在<code>src/App.js</code>文件中修改。
          </p>
          <a href="https://reactjs.org" onClick={this.preventPop.bind(this, this.state.name)}>Click</a>
          <button href="#" onClick={this.handleClick}>
          {this.state.isToggleOn?'ON':'OFF'}
          </button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Name name={this.state.name}/>
        <Url url={this.state.url}/>
        <Nickname nickname={this.state.nickname}/>
        <Clock />
        <LoginControl />
        <NumberList numbers={numbers}/>
        <Counter />
        <Button/>
        <FlavorForm/>
      </div>
    );
  }
  
}
//<UserGist source="https://api.github.com/users/octocat/gists"/>
export default App;
