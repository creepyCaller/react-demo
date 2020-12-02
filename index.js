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

// https://fluent-windows.com/getting-started/installation
// https://codesandbox.io/s
// material-ui
// https://evergreen.segment.com/components/
// https://react.geist-ui.dev/zh-cn/guide/introduction
ReactDOM.render(<App />, document.querySelector("#root"));
