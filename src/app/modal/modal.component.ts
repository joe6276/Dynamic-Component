import { Component, ComponentFactoryResolver, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuccessDirective } from '../shared/directive/SuccessDirecive';
import { SuccessComponent } from '../success/success.component';
import { AlertComponent } from '../alert/alert.component';
import { ErrorDirective } from '../shared/directive/ErrorDirective';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations:[
    trigger('Trigger1',[
      state('in',style({
        transform:'translateY(10px)',
        opacity:1
      })),
      transition('void=>*',animate(1000,style({
        opacity:0.5,
        transform:'translateY(2px)',
      })))
     
    ])
  ]
})
export class ModalComponent implements OnInit {
@Input() message=''
submitForm!:FormGroup
valid=false
valid1=false


@ViewChild(SuccessDirective) sucess!:SuccessDirective
@ViewChild(ErrorDirective) error!:ErrorDirective
@Input() message2=''
@Output() close=new EventEmitter<void>( )

  constructor(private fb:FormBuilder, private ComponentFactory:ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.submitForm= this.fb.group({
      name:[null ,Validators.required],
      email:[null,Validators.required],
      phone:[null, Validators.required]
    })
  }
  onCancel(){
  this.close.emit()
  }
  onSubmit(){
    if(!this.submitForm.valid){
      this.message="Please input all fields"
        this.showError()

    }else{
      console.log(this.submitForm.value);
      this.showSuccess()


    }
   
  }
  onClose(){
      this.valid=false
    
  }

  showError(){
    const componentFactory=this.ComponentFactory.resolveComponentFactory(AlertComponent)

    const hostContainer= this.error.viewContainerRef
    hostContainer.clear()
    const comp= hostContainer.createComponent(componentFactory)
    comp.instance.state=true
    comp.instance.message='Please Fill in all Credentials'
    comp.instance.changeState.subscribe(()=>{
      hostContainer.clear()
      comp.instance.state=false
    })
  }

  showSuccess(){
    const componentFactory=this.ComponentFactory.resolveComponentFactory(SuccessComponent)

    const hostContainer= this.sucess.viewContainerRef
    hostContainer.clear()
    const comp= hostContainer.createComponent(componentFactory)

    comp.instance.state=true
    comp.instance.message='Success'
    comp.instance.close.subscribe(()=>{
      hostContainer.clear()
      comp.instance.state=false
    })


  }

  onClose1(){

    this.valid1=false
    this.close.emit()
}

}
