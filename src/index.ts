import "./components/export"
import "./screens/dashboard"
import styles from "./components/card/card.css"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const view = this.ownerDocument.createElement('app-dashboard');
        this.shadowRoot?.appendChild(view);
    }
}

customElements.define('app-container', AppContainer)