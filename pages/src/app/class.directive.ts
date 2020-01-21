import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[appClass]"
})
export class ClassDirective {
  constructor(private element: ElementRef) {}

  @Input("appClass") set classNames(classObj: any) {
    console.log(classObj);

    for (let c of classObj) {
      if (classObj[c]) {
        this.element.nativeElement.classList.add(c);
      } else {
        this.element.nativeElement.classList.remove(c);
      }
    }
  }
}
