export class BaseComponent {
    append(target) {
        this.element = this.createElement();
        target.append(this.element);
    }
    createElement() {
        const template = document.createElement("template");
        template.innerHTML = this.getTemplateString().trim();
        return template.content.firstChild;
    }
}
