/**
 * React的状态
 * 与props的区别：1. props是组件对外的接口
                2. state是组件对内的接口
                3. props是只读的
                4. state是可变的
 * 组件内可以引用其他组件，组件间引用形成了树状接口
 * 如果下层组件需要使用上层组件的数据，上层组件可以通过下层组件的props进行数据传递，因此props是组件对外的接口
 * 组件除了使用上层组件传递的数据之外，本身也可能有需要管理的数据，state就是负责对内管理
 * props一经渲染不可更改，除非再次调用render方法进行渲染，但是效率太低，可以通过更新组件内的state进行重新渲染组件
 * react只需要关注数据，当数据改变时页面会自动发生改变
 * 状态等同于页面中的数据，状态的数据改变了，页面中对应的数据绑定内容会被react自动改变
 * 声明式渲染：一切数据改变不用开发者担心，当数据被修改则react会自动刷新组件
 * 只能使用类组件，因为它可以有状态
 */
class StatefulComponent extends React.Component {
    /**
     * 构造函数是可以不写，因为会默认生成同java
     * 如果有别的需求才要自己覆写
     * @param props
     */
    constructor(props) {
        super(props); // 使用super上级组件指针进行上级构造
        this.state = {
            msg: 'Click to get ISO DateString',
            innerHTML: '点击动态渲染html内容'
        }; // 定义状态,初始值
    }

    /**
     * 点击事件监听器
     */
    onClickListener() {
        // 使用this.setState({key: newValue, ...})进行状态更改,注意这是个异步方法,React会自动触发render进行数据渲染
        // 如果想要状态更改后做某些操作,则需要setState执行完之后的异步函数,箭头函数会自动绑定this
        // 如果需要插入HTML字符串并渲染,就是用: dangerousSetInnerHTML={{__HTML: 需要插入的HTML字符串}}
        this.setState({msg: (new Date()).toISOString()},() => {
            console.log('set to ' + this.state.msg);
        });
    }

    /**
     * 渲染HTMl
     * 使用dangerouslySetInnerHTML属性,传入{__html: html内容},就可以自动渲染html内容了
     */
    onClickRenderHtml() {
        this.setState({
            innerHTML: `<h1>Hello ${(new Date()).toISOString()}</h1>`
        }, () => {
            console.log('set to ' + this.state.innerHTML);
        });
    }

    render() {
        return (
            <div>
                <div onClick={this.onClickListener.bind(this)}>{this.state.msg}</div>
                <div onClick={this.onClickRenderHtml.bind(this)} dangerouslySetInnerHTML={{__html: this.state.innerHTML}}/>
            </div>
        );
    }
}

ReactDOM.render(<StatefulComponent/>, document.getElementById('demoReact'));
