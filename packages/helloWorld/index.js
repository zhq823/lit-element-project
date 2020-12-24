import { LitElement, html, css } from 'lit-element';

export default class HelloWorld extends LitElement {
    static name() {
        return 'hello-world'
    }
    static get styles() {
        return css`
            div { color: red; }
        `
    }
    render() {
        return html`
            <div>hello-world!<div>
        `
    }
}