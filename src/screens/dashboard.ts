import MyCard, {Attributes} from "../components/card/card";
import { addObserver, appState, dispatch } from '../store/index';
import { getPeople } from '../store/actions';

class MainDashboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this)
    }

    async connectedCallback() {
        const action = await getPeople();
        dispatch(action)
    }

    render() {

        appState.people.forEach((data: any) => {
            const StarwCard = this.ownerDocument.createElement("my-card") as MyCard;
            StarwCard.setAttribute(Attributes.name, data.name);
            StarwCard.setAttribute(Attributes.birth_year, data.birth_year);
            StarwCard.setAttribute(Attributes.gender, data.gender);
            this.shadowRoot?.appendChild(StarwCard);
        });

    }
}

customElements.define('app-dashboard', MainDashboard)