import { BaseComponent } from "./base-components.js";
export class Image extends BaseComponent {
    constructor(widht, height) {
        super();
        this.width = widht;
        this.height = height;
    }
    getTemplateString() {
        return `
        <img src="https://www.w3schools.com/images/w3schools_green.jpg" 
        alt="school" width="${this.width}" height="${this.height}">`;
    }
}
