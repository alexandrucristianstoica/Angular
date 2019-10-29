import { BaseComponent } from "./base-components.js";
export class Badge extends BaseComponent {
    constructor(box) {
        super();
        this.box = box;
    }
    getTemplateString() {
        return `
        <div class="material-icons mdl-badge mdl-badge--overlap" data-badge="${this.box}">account_box</div>`;
    }
}
