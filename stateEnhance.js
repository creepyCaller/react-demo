/**
 * 状态提升
 * 如果多个组件需要反映相同的变化数据,就可以将数据提升到他们最近的父组件中,然后通过props分发给子组件
 * 如果没有提升目标的父组件
 */
class SubComponentA extends React.Component {
    render() {
        return (
            <p>I am SubComponentA, common data is {this.props.commonData}</p>
        );
    }
}

class SubComponentB extends React.Component {
    render() {
        return (
            <p>I am SubComponentB, common data is {this.props.commonData}</p>
        );
    }
}

class SuperComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commonData: "This is common data"
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            commonData: new Date().toISOString()
        });
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
