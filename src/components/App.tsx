import * as React from "react";
import "./../assets/scss/App.scss";
export interface AppProps {

}
export default class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <div className="app">
                <h1>Hello World!</h1>
                <p>Foo to the barz</p>
            </div>
        );
    }
}
