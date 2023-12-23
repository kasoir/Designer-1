
export class PredefinedElements {
    private type: string | 'text' | 'button' | 'dropdown';
    private tag: string;
    private lable: string;
    private style: string;
    private classStyle: string;

    private html: string = '';

    constructor (type: string, tag: string, lable: string, style: string, classStyle: string) {
        this.type = type;
        this.tag = tag;
        this.lable = lable;
        this.style = style;
        this.classStyle = classStyle;
    }

    // getters and setters

    setHTMLElement() : void{
        this.html = `<${this.tag} ${!!this.lable?'lable=' +'"'+this.lable+'"':''} ${!!this.style?'style=' + '"' 
        + this.style + '"':''} ${!!this.classStyle?'calssStyle=' + '"' + this.classStyle + '"':''} />`;
    }

    getHTMLElement() : string{
        return this.html;
    }
}

export const elements = [
    { type: 'text', tag:'input', lable: '', style: ''},
    { type: 'button', tag:'<button></button>', lable: '', style: ''},
    { type: 'dropdown', tag:'',lable: '', style: ''}
]