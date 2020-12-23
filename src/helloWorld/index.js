import { LitElement, html } from 'lit-element';

export default class HelloWorld extends LitElement {
    static name() {
        return 'hello-world'
    }
    render() {
        return html`
            <div>hello-world!<div>
        `
    }
}