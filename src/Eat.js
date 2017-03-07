import React from "react";
let data = ["牛奶","屎","蟑螂","老鼠","玉溪","小鸟","我爱你","周末陪我","说爱我","亲我","吻我"];

export default class Eat extends React.Component{
  constructor(){
    super();
    this.state={
      start:false,
      data,
      text:""
    }
  }
  select(){
    let result = this.state.data[Math.floor(Math.random()*this.state.data.length)];
    this.setState({text:result})
  }
  handleClick(){
    if(this.state.start){
      this.setState({start:false});
      clearInterval(this.interval);
    }else{
      this.interval = setInterval(() => this.select(),100);
      this.setState({start:true});
    }
  }
  render(){
    return(
    <div className = "eat-w">
      <div className="eat">
        <p>今天吃什么:{this.state.text}</p>
        <button onClick　=　{this.handleClick.bind(this)}>{this.state.start ? "停止"　: "开始"}</button>
      </div>
    </div>
    )
  }
}
