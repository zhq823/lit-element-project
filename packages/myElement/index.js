import { LitElement, html, css } from 'lit-element';

export default class MyElement extends LitElement {
    static name() {
        return 'my-element'
    }
    static get styles() {
        return css`
            div { color: red;}
        `
    }
    render() {
        return html`
            <div>my-element!<div>
        `
    }
}