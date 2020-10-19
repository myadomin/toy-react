import { createElement, Component, renderHtml } from './toy-react'

class Mycomponent extends Component {
  render () {
    return <div>
      <div class="aaa">my component</div>
      <div>
        <div>1212</div>
        <div></div>
        <div></div>
      </div>
      {/* {this.children} */}
    </div>
  }
}

renderHtml(<Mycomponent>
  <div class="11" id="22">222244</div>
  <div></div>
</Mycomponent>, document.body)

// 流程 
// 1 Mycomponent render里的html、renderHtml Mycomponent里的html，全部被babel编译成createElement(xxx)
// 2 执行Mycomponent render里的createElement -> new ElementWrapper、new TextWrapper -> this.root赋值 -> 渲染html -> return e 
// 3 执行renderHtml Mycomponent里的createElement -> new Component -> this.props this.children -> this._root = this.render().root
// 4 renderHtml Mycomponent的子元素 -> 通过{this.children}被babel解析 -> 调用createElement -> 渲染html