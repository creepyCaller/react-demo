/**
 * React的组件 - 高内聚低耦合
 * 高内聚把逻辑紧密的内容全部塞进一个组件中
 * 低耦合把不同组件依赖关系弱化,尽可能独立每个组件
 * 内容：
 *  1.构建方式
 *  2.属性
 *  3.声明周期
 * 组件内容：属性props、状态state、生命周期
 * 作用：将页面中的ui部分切分成独立、高复用性的部件，让开发者更专注于组件
 * 创建组件
 *  1.函数/无状态组件
 *  2.类
 */

/**
 * 函数式声明组件
 * 无状态组件
 * 必须是大写的首字母，返回一个JSX对象
 * @constructor
 */
function MyFunctionComponent() {
    return (
        <div>Hello from MyFunctionComponent</div>
    );
}

/**
 * 赋值使用
 * 用于显示的组件,必须将所有组件最终嵌套在一个XML tag(父组件)中
 * 可以使用单标签或多标签调用
 */
let displayComponent = (
<div>
    使用单标签或多标签调用组件:
    <MyFunctionComponent/>
    <MyFunctionComponent></MyFunctionComponent>
</div>
);

/**
 * 在组件函数中使用组件
 */
function DisplayComponentFunction() {
    return (
        <div>
            使用单标签或多标签调用组件:
            <MyFunctionComponent/>
            <MyFunctionComponent></MyFunctionComponent>
        </div>
    );
}

// ReactDOM.render(displayComponent, document.getElementById('demoReact'));
// ReactDOM.render(DisplayComponentFunction(), document.getElementById('demoReact')); // 调用函数渲染组件
// ReactDOM.render(<DisplayComponentFunction/>, document.getElementById('demoReact')); // 在render中直接渲染组件的单标签,效果同上

/**
 * 类组件
 * 类名首字母大写，需要继承React.Component
 * 必须覆写render()方法,返回一个JSX
 * 使用方法同函数组件
 */
class MyClassComponent extends React.Component {
    render() {
        return (
            <div>Hello from React.Component.MyClassComponent.render()</div>
        );
    }
}
// 渲染同函数组件,这里只使用了单标签直接渲染
ReactDOM.render(<MyClassComponent/>, document.getElementById('demoReact'));
