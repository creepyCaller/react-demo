/**
 * 条件渲染
 * 根据状态变化只渲染其中一部分， 使用state存储状态、使用分支逻辑设置文本
 */
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRender: true
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        this.setState({
            isRender: !this.state.isRender
        }, () => {
            console.log('切换渲染状态: ', this.state.isRender)
        });
    }

    render() {
        let style = this.state.isRender ? {} : {display: 'none'};
        let text = this.state.isRender ? '显示了!' : '隐藏了!';
        return(
            <div>
                <h1 style={style}>{text}</h1><br/>
                <button onClick={this.onClick}>Button</button>
            </div>
        );
    }
}

ReactDOM.render(<MyComponent/>, document.getElementById('demoReact'));
