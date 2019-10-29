
export abstract class BaseComponent{

element!:HTMLElement;
    append(target:HTMLElement)
{
  this.element=this.createElement();
  target.append(this.element);
}    

createElement(): HTMLElement
{
  const template = document.createElement("template");
  template.innerHTML=this.getTemplateString().trim();

  return template.content.firstChild as HTMLElement;
}

abstract getTemplateString() :string;

}