import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[appClass]"
})
export class ClassDirective {
  constructor(private element: ElementRef) {}

  @Input("appClass") set classNames(classObj: any) {
    for (let c in classObj) {
      if (classObj[c]) {
        this.element.nativeElement.classList.add(c);
      } else {
        this.element.nativeElement.classList.remove(c);
      }
    }
  }
}
