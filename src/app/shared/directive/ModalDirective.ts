import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[modalDirective]'
})

export class ModalDirective{
 
        constructor(public viewContainerRef:ViewContainerRef){}

}