import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  @ Input() state=false
  @Input() message=''
  @Output() close= new EventEmitter<void>()
  constructor() { }

  ngOnInit(): void {
  }

  onClose(){
      this.close.emit()
  }

}
