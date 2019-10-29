import { BaseComponent } from "./base-components.js"

export class Badge extends BaseComponent{
    box:string;

    constructor(box:string) {
        super();
        this.box=box;
    }

    getTemplateString()
    {
        return `
        <div class="material-icons mdl-badge mdl-badge--overlap" data-badge="${this.box}">account_box</div>`
    }

}