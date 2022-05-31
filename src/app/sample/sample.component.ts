import { Component, ComponentFactoryResolver, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import {ModalComponent} from '../modal/modal.component'
import { ModalDirective } from '../shared/directive/ModalDirective';
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit, OnDestroy {
  state1=false
  sub!:Subscription
  @ViewChild(ModalDirective) modal!:ModalDirective
  constructor( private componentFactoryResolver:ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  onClick(){
    this.showModal()
 }
 ngOnDestroy(): void {
  this.sub.unsubscribe()
 }
 showModal(){
  const compfactory=this.componentFactoryResolver.resolveComponentFactory(ModalComponent)
  const hostcomp= this.modal.viewContainerRef
  hostcomp.clear()
  const comp=hostcomp.createComponent(compfactory)
  comp.instance.message='Hello World'
  this.sub=comp.instance.close.subscribe(()=>{
    hostcomp.clear()
    this.sub.unsubscribe()
  })
 }
 onChange(){
   this.state1=false
 }

 onClick1(){
   this.state1= true
 }
}
