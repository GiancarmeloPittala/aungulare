import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  inputValue: string = "";

  private default_type: String = "text";
  private default_id: String = "id-" + ( ~~(Math.random() * 1000));
  private default_name: String = this.default_id;
  private default_placeholder: String = "";
  private default_label: String = "< no label set >";

  @Input() 
  get type(): String { return this._type; }
  set type(type: String) {
    this._type = (type && type.trim()) || this.default_type;
  };

  @Input() 
  get id(): String { return this._id; }
  set id(id: String) {
    this._id = (id && id.trim()) || this.default_id;
  };

  @Input() 
  get name(): String { return this._name; }
  set name(name: String) {
    this._name = (name && name.trim()) || this.default_name;
  };

  @Input() 
  get placeholder(): String { return this._placeholder; }
  set placeholder(placeholder: String) {
    this._placeholder = (placeholder && placeholder.trim()) || this.default_placeholder;
  };

  @Input() 
  get label(): String { return this._label; }
  set label(label: String) {
    this._label = (label && label.trim()) || this.default_label;
  };


  private _type: String = this.default_type;
  private _id: String = this.default_id;
  private _name: String = this.default_name;
  private _placeholder: String = this.default_placeholder;
  private _label: String = this.default_label;
}
