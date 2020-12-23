import HelloWorld from './helloWorld'
import MyElement from './myElement';

const components = [
    HelloWorld,
    MyElement
]

class LitElementProject {
    static install() {
        components.map(e => window.customElements.define(e.name(), e))
    }
}

export {
    LitElementProject as default,
    LitElementProject
}