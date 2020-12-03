/**
 * 状态提升
 * 如果多个组件需要反映相同的变化数据,就可以将数据提升到他们最近的父组件中,然后通过props分发给子组件
 * 如果没有提升目标的父组件
 */

/**
 * 需要共享父组件数据的子组件A
 */
class SubComponentA extends React.Component {
    render() {
        return (
            <p>I am SubComponentA, common data is {this.props.commonData}</p>
        );
    }
}

/**
 * 需要共享父组件数据的子组件B
 */
class SubComponentB extends React.Component {
    render() {
        return (
            <p>I am SubComponentB, common data is {this.props.commonData}</p>
        );
    }
}

/**
 * 父组件
 */
class SuperComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commonData: "This is common data"
        }; // 将需要共享的数据存在state中
        this.onClick = this.onClick.bind(this); // 提前绑定onClick的this为这个类本身
    }

    onClick() {
        this.setState({
            commonData: new Date().toISOString()
        }); // 使用setState({..}, (..) => {..})对state进行修改同时React回对组件进行刷新
    }

    render() {
        return (
            <div>
                <SubComponentA commonData={this.state.commonData}/><br/>
                <SubComponentB {...this.state}/><br/>
                <button onClick={this.onClick}>Change commonData</button>
            </div>
        );
    }
}

ReactDOM.render(<SuperComponent/>, document.getElementById('demoReact'));
