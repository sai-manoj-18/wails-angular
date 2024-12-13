import { Component,Input,Output,EventEmitter, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-common-card',
  templateUrl: './common-card.component.html',
  styleUrl: './common-card.component.css'
})
export class CommonCardComponent {

  @Input() headerValue!: string;
  @Input() contentValue!: TemplateRef<any>;
  @Input() buttonValue!: string;
  @Output() routeEmitting = new EventEmitter<any>();

  routeToStocks(){
    this.routeEmitting.emit()
  }

}
