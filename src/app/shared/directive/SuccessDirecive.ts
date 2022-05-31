import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[SuccessDirective]'
})
export class SuccessDirective{
    constructor(public viewContainerRef:ViewContainerRef){}
}