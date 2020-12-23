import { LitElement, html } from 'lit-element';

export default class MyElement extends LitElement {
    static name() {
        return 'my-element'
    }
    render() {
        return html`
            <div>my-element!<div>
        `
    }
}