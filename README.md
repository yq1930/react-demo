# react 生命周期函数

componentWillMount:组件渲染前执行
componentDidMount:组件渲染后执行
shouldComponentUpdate:返回 true 和 false,true 表示允许修改，false 表示禁止修改
componentWillUpdate:数据修改前执行
componentDidUpdate:数据修改后执行

componentWillReveiceProps:props 发生改变执行

componentWillUnmount:组件卸载前执行

### key

在 react 中 key 的作用，当数据渲染量较大时，改变数据，有 key 时，如果 key 不发生变化，则整个 ui 页面不会全部重绘，只是 key 改变的部分重新绘制

### 跨域的解决方案，在 react 开发模式下

- 第一种：package.json 中添加 "proxy": "http://tingapi.ting.baidu.com"
