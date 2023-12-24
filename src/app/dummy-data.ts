
export class PredefinedElements {
    private tag: string;
    private label: string;
    private style: string;

    private html: string = '';
    private options: string[] = [];
    private tableOptions: any;

    constructor ( prop: elements) {
        this.tag = prop.tag;
        this.label = prop.label;
        this.style = prop.style!;
        this.options = prop.options!;
        this.tableOptions = prop.tableOptions;
    }

    // getters and setters

    setTextHTMLElement() : void{
        this.html = `<${this.tag} ${!!this.label?'placeholder=' +'"'+this.label+'"':''} ${!!this.style?'style=' + '"' 
        + this.style + '"':''} />`;
    }
    setLabelHTMLElement() : void{
        this.html = `<${this.tag} ${!!this.style?'style=' + '"' 
        + this.style + '"':''}
        >${this.label}</this.tag>`;
    }

    setButtonHTMLElement() : void{
        this.html = `<${this.tag} ${!!this.style?'style=' + '"' 
        + this.style + '"':''}
        >${this.label}</this.tag>`;
    }

    setDropdownHTMLElement() : void {
        let optionsHTML = '';
        for (let option of this.options) {
          optionsHTML += `<option value="${option}">${option}</option>`;
        }
        this.html = `<${this.tag} ${!!this.style?'style=' + '"' + this.style + '"':''}>${optionsHTML}</${this.tag}>`;
      }

      setTableHTMLElement() : void {
        let headerHTML = '<tr>';
        for (let i = 0; i < this.tableOptions.columns; i++) {
          headerHTML += `<th>Header ${i+1}</th>`;
        }
        headerHTML += '</tr>';
      
        let rowsHTML = '';
        for (let i = 0; i < this.tableOptions.rows; i++) {
          let rowHTML = '';
          for (let j = 0; j < this.tableOptions.columns; j++) {
            rowHTML += `<td ${!!this.tableOptions.rowStyle?'style=' + '"' + this.tableOptions.rowStyle + '"':''}></td>`;
          }
          rowsHTML += `<tr>${rowHTML}</tr>`;
        }
        this.html = `<${this.tag} ${!!this.style?'style=' + '"' + this.style + '"':''}>${headerHTML}${rowsHTML}</${this.tag}>`;
      }
      
    getHTMLElement() : string{
        return this.html;
    }
}

export interface elements {
    tag: string;
    label: string;
    style?: string;
    options?: string[];
    tableOptions?:{
        rows: number,
        columns: number,
        rowStyle: string,
    }
}