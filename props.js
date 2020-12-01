/**
 * props是React的重要属性，是组件对外的接口
 * 数据通过props在组件外或父组件传递到组件内
 * 不能修改组件自身的props
 */
function PropsFunctionComponent(props) {
    return (
        <div>props: {JSON.stringify(props)}</div>
    );
}

let props = {date: new Date(), msg: 'Hello'}; // 定义props并打包对象进去

// 三种渲染的方法
// ReactDOM.render(PropsFunctionComponent(props), document.getElementById('demoReact'));
// ReactDOM.render(<PropsFunctionComponent date={new Date()} msg={'Hello'}/>, document.getElementById('demoReact'));
// 使用ES6的扩展运算符, '...{Object}'会将对象自动展开
// ReactDOM.render(<PropsFunctionComponent {...props}/>, document.getElementById('demoReact'));

/**
 * 类组件props使用跟函数组件是一模一样的
 * 唯一注意需要使用this指针来获取组件本身的props
 */
class PropsClassComponent extends React.Component {

    /**
     * /**
     * 默认props值设置
     * 使用{组件名.defaultProps}设置
     * 或者在调用时使用或(React.ver < 15)：p||'暂无p'

        // 在类外部设置props默认值
        PropsClassComponent.defaultProps = {
            p: '暂无p'
        };
     */
    // 直接在类中定义static来设置props默认值
    static defaultProps = {
        p: '暂无p'
    }

    /**
     * props验证
     * 注：只在开发时生效
     * cnpm install --save prop-types
     * react.development.js:1641 Warning: Failed prop type: Invalid prop `p` of type `number` supplied to `PropsClassComponent`, expected `string`.in PropsClassComponent

        // 在类外部对propTypes类型验证配置
        PropsClassComponent.propTypes = {
            p: PropTypes.string // 验证通过props传递来的p属性必须为字符串
        };
     */
    // 直接在类中定义static来设置propTypes类型验证配置
    static propTypes = {
        p: PropTypes.string // 验证通过props传递来的p属性必须为字符串
    };

    onClick() {
        alert('child.click');
    }

    render() {
        return (
            <div onClick={this.onClick.bind(this)}>
                <div>props: {JSON.stringify(this.props)}</div>
                <div>{this.props.p}</div>
            </div>
        );
    }
}

// ReactDOM.render(<PropsClassComponent {...props}/>, document.getElementById('demoReact'));

/**
 * 父子组件互相传递数据
 */
class SuperComponent extends React.Component {
    onClick() {
        alert('super.click');
    }

    render() {
        return (
            <div>
                <div onClick={this.onClick.bind(this)}>超组件向子组件传递数据:设置tag属性或继续把props往下丢</div>
                <PropsClassComponent {...this.props}/>
                <PropsClassComponent p={'a'} {...this.props}/>
            </div>
        );
    }
}

console.log(JSON.stringify(props));
ReactDOM.render(<SuperComponent {...props} date={new Date()}/>, document.getElementById('demoReact'));
