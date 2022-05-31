import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[ErrorDirective]'
})

export class ErrorDirective{
 
        constructor(public viewContainerRef:ViewContainerRef){}

}