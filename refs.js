/**
 * refs转发
 * React在有状态组件中提供了ref数据（由于无状态组件无实例所以没有）
 * 转发就是标识组件内部的DOM对象，方便程序员查找和获取对象进行操作
 * 有三种使用方式：
 *  1. 字符串: <... ref="xxx" />, this.refs['xxx'].xx;
 *  2. 回调函数 (推荐）: <... ref={(self) => { this.ref['xxx'] = self; } />, this.ref['xxx'].xx
 *  3. React.createRef() // React.ver > React 16.3, 把值赋给一个变量,通过ref挂载在节点或组件上，使用ref.current获取节点
 * 建议不要过度使用refs对逻辑处理，而是使用state
 */
class MyComponent extends React.Component {
    myRef = React.createRef();

    onClick() {
        console.log(this.refs['inputRefByString'].value);
        console.log(this.refs['inputRefByLambdaFunction'].value);
        console.log(this.myRef.current.value);
    }

    render() {
        return (
            <div>
                <input type="text" ref="inputRefByString"/><br/>
                <input type="text" ref={(self) => { this.refs['inputRefByLambdaFunction'] = self; }}/><br/>
                <input type="text" ref={this.myRef}/><br/>
                <button onClick={ this.onClick.bind(this) }>取值</button><br/>
            </div>
        );
    }
}

// https://www.bilibili.com/video/BV1H54y1e7xV?p=13
ReactDOM.render(<MyComponent/>, document.getElementById('demoReact'));
