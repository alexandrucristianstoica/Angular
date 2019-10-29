import { BaseComponent } from "./base-components.js";
export class IconButton extends BaseComponent {
    constructor(icon) {
        super();
        this.icon = icon;
    }
    getTemplateString() {
        return `
        <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
        <i class="material-icons">${this.icon}</i>
      </button>`;
    }
}
