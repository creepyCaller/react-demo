/**
 * 事件
 * 使用小驼峰命名，不要加括号（）而是把函数引用传过去
 * 点击事件
 * 1. 调用类本身的方法引用 + .bind(this)
 * 2. 绑定到类中的箭头函数，由于箭头函数会默认绑定this所以不需要额外绑定this
 * 3. （优化1）在构造器中提前对类中的方法使用 this.method = this.method.bind(this); 对方法进行this绑定，然后就可以甩掉讨厌的 .bind(this) 了
 * 4. 直接写lambda： onClick={ () => { this.method(); } }
 */
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this); // 提前绑定this
    }

    /**
     * 点击事件执行方法
     * @param event 点击事件
     */
    onClick(event) {
        console.log(event);
    }

    render() {
        return (
            <div>
                <form action="#" method="get">
                    <input type="text" ref="inputRefByString"/><br/>
                    <button onClick={ this.onClick }>取值</button><br/>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<MyComponent/>, document.getElementById('demoReact'));
