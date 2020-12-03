/**
 * 将脚本单独写出去，就复制<script>标签中的代码并新建为js文件，保证路径正确和标签中包含{type="text/babel"},导入index.html
 */

/**
 * 使用JSX定义了dom对象
 * JSX即JavaScript XML,是扩展语法
 * 如何对JSX注释？答：在JSX中使用大括号和斜杠星号注释：{/*注释内容✳/}
 * JSX最外层必须只有一个标签，否则会无法渲染，如果有多行标签最好使用阔包括起来
 */
let text = "this is text";
let filter = (str) => {return `String context is: ${str}`};
let domArr = [
    <p key='e1'>elm on arr: 1</p>,
    <p key='e2'>elm on arr: 2</p>,
    <p key='e3'>elm on arr: 3</p>
];

/**
 * 普通对象和JSX对象的声明使用
 */
let link = "https://www.bilibili.com/video/BV1H54y1e7xV?p=5";
let anchorText = "kandaozhelile";

let myDom = (
    <div>
        {/*注释要这么注释*/}
        <h1>Hello, world !</h1>
        <h2>OHHHHHHHHHHHHHHHHH</h2>
        {/*在JSX中使用js表达式的方法(对象、函数调用、算式)*/}
        <p>{text}</p>
        <p>1 + 1 = {1 + 1}</p>
        <p>2 + 2 = {eval(2 + 2)}</p>
        <p>{filter(text)}</p>
        {/*三目运算符,跟表达式一样的*/}
        <p>{1 + 1 <= 2? 'yep': 'nope'}</p>
        {/*渲染JSX数组,直接把数组放在花括号中*/}
        <div>
            <p>渲染数组:开始</p>
            {domArr}
            <p>渲染数组:结束</p>
        </div>
        {/*遍历数组，渲染列表,见其他dom*/}
        {/*属性动态插值，动态设置JSX属性,使用类似模板的方式动态插值(不知道能不能用此种方法动态插入属性)*/}
        <a href={link}>{anchorText}</a>
    </div>); // 最外层至少要包着一个元素,使用括号括起来表示整个元素范围

let domStyle = {color: "red", backgroundColor: "pink"}; // 声明jsx为css
let myDom1 = <p style={domStyle} className={"demo"}>T E X T</p>; // 不能使用class作为属性，因为它是js关键字，只能用className作为替换

/**
 * 调用React执行渲染，注意此处需两个参数，第一个是待渲染的JSX对象，第二个是页面中的渲染根节点
 */
// ReactDOM.render(myDom, document.getElementById('demoReact'));
ReactDOM.render(myDom1, document.getElementById('demoReact'));
