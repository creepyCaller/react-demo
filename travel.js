/**
 * 列表渲染
 * 必须给每个遍历的JSX对象添加key属性不然react会报警，所以要加一个: key={index}
 * key属性是辅助React进行组件管理的属性
 * 建议在return处均使用括号包裹,这样的话可以对返回内容换行,如果没有括号,根据js的规则， 换行之前会被return，就什么都没有了
 * React的点击事件: onClick={() => {}},特别注意,如果onClick中不是一个箭头函数,它里面的东西会被直接调用,丧失效果
 */
let dataArr = ["A", "B", "C"];

// map & Lambda
let listDomMap = dataArr.map((value, index, array) => {
    function ok(value) {
        alert('Click ' + value);
    }
    return (
        <p key={'a' + index} onClick={() => {ok(value)}}>elm on {index}: {value}, content: {array}</p>
    )
})

// 使用函数渲染列表,这样可以动态获取
let elmIndex = -1;
function listDomMapFunction() {
    return dataArr.map((v, i) => {
        return (<h1 key={'d' + i} style={{color: i === elmIndex ? 'red' : 'black'}} onClick={() => {elmIndex = i; foo();}}>{v}</h1>)
    });
}

// for in,函数化渲染
function listDomForIn(arr) {
    let elmArr = [];
    for (let index in arr) {
        // 需要使用hasOwnProperty过滤for in遍历结果,原因见JavaScript学习笔记
        if (arr.hasOwnProperty(index)) {
            elmArr.push(<p key={index}>elm on {index}: {arr[index]}</p>);
        }
    }
    return elmArr;
}

// 对象遍历
let obj = {name: 'n', sex: 0};
let keys = Object.keys(obj);
let values = keys.map((v, i) => {
    obj[v];
});

// 遍历对象
// ReactDOM.render(listDomMap, document.getElementById('demoReact'));
// ReactDOM.render(listDomForIn(dataArr), document.getElementById('demoReact'));
ReactDOM.render(listDomMapFunction(), document.getElementById('demoReact'));
/**
 * 使用函数包裹起ReactDOM.render()方便每次需要刷新组件时调用
 * 记得提前调用一次来渲染出东西
 */
function foo() {
    ReactDOM.render(listDomMapFunction(), document.getElementById('demoReact'));
}
