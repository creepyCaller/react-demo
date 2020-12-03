import React from "react";
import ReactDOM from "react-dom";
import Button from "@fluent-ui/core/Button";
import ThemeProvider from "@fluent-ui/core/ThemeProvider";

function App() {
    return (
        <ThemeProvider>
            <Button variant="primary">Hello World</Button>
        </ThemeProvider>
    );
}

// https://fluent-windows.com/zh/getting-started/installation
// https://codesandbox.io/s
// material-ui
// https://evergreen.segment.com/components/
// https://react.geist-ui.dev/zh-cn/guide/introduction
// https://developer.microsoft.com/zh-cn/fluentui#/get-started/web
// https://preview.tabler.io/
// https://www.gatsbyjs.cn/docs/
ReactDOM.render(<App />, document.querySelector("#root"));
