import styles from "./card.css"

export enum Attributes {
    "name" = "name",
    "birth_year" = "birth_year",
    "gender" = "gender"
}

class MyCard extends HTMLElement {
    name?: string;
    birth_year?: string;
    gender?: string

    static get observedAttributes() {
        const attrs: Record<Attributes, null> = {
            birth_year: null,
            name: null,
            gender: null,
        };
        return Object.keys(attrs);
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: Attributes,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {

                default:
                this[propName] = newValue;
                break;
            }

            this.render();
        }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``

                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);

                this.shadowRoot.innerHTML += `
                <section>
                    <h1 class="name">Name: ${this.name}</h1>
                    <p class="birthYear">Birth Year: ${this.birth_year}</p>
                    <p class="birthYear">Gender: ${this.gender}</p>
                </section>
                `;
            }
        }
    }

customElements.define("my-card", MyCard);
export default MyCard;