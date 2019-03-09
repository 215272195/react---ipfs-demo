import React, { Component } from 'react'
import ipfsAPI from 'ipfs-api'

let ipfs = ipfsAPI('localhost', '5002', {protocol: 'http'})

// 第一种解决跨域方法 输入到node
// jsipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["GET", "POST"]'
// jsipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin  '["*"]'
// jsipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials  '["true"]'
// jsipfs config --json API.HTTPHeaders.Access-Control-Allow-Headers  '["Autherization"]'
// jsipfs config --json API.HTTPHeaders.Access-Control-Expose-Headers  '["Location"]'

// 公网数据查看
// https://ipfs.io/ipfs/QmYkMuFZj7tyHFJRVe7ucqMNYGEiSXrjKdudm2mu7UD7er
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      text:'',
      // ipfs上传后就是一个hash值
      hash:'',
      // 上传的内容
      content:''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  // 添加到ipfs网络之上
  saveTextToIpfs(text){
    const descBuf = Buffer.from(text, 'utf-8')
    // 上传是一个promise
    ipfs.add(descBuf).then(res=>{
      this.setState({
        hash:res[0].hash
      })
    })
  }

  handleClick(){
    this.saveTextToIpfs(this.state.text)
  }

  handleReadClick(){
    // 读取文件
    ipfs.cat(this.state.hash).then(res=>{
      // 转换成可读的字符串
      let content = new TextDecoder('utf-8').decode(res)
      this.setState({
        content
      })
    })
  }

  render() {
    return (
      <div className="App">
        <input value={this.state.text} onChange={(e)=>{
            this.setState({
              text:e.target.value
            })
        }}/>

        <button onClick={this.handleClick}>提交数据到IPFS</button>
        <hr/>
        <p>
          hash is: {this.state.hash}
        </p>
        <button onClick={()=>this.handleReadClick()}>从IPFS读取数据</button>
        <p>
          {this.state.content}
        </p>
      </div>
    );
  }
}

export default App;
