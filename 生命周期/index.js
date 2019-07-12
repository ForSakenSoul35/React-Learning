// 组件的生命周期
/**
 * 创建阶段 第一次初始化渲染显示 ReactDOM.render()
 */
constructor() //创建对象 初始化 state
componentWillMount() //将要挂载
render() //渲染虚拟DOM
componentDidMount() //挂载完毕
/**
 * 刷新阶段
 */
// 每次更新 通过setState() 
componentWillReceiveProps()  //接收到新的props时回调
shouldComponentUpdate() //是否应该更新
componentWillUpdate() //将要更新
render() //重新渲染虚拟DOM
componentDidUpdate()  //更新完毕
/**
 * 卸载阶段 移除组件  ReactDOM.unmountComponentAtNode()
 */
componentWillUnmount() // 组件将要被移除回调
