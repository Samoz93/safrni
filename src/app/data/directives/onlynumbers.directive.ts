import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[OnlyNumbers]',
})
export class Onlynumbers {
  constructor(private el: ElementRef) {}

  @Input() OnlyNumbers: boolean;
  navigationKeys = [
    'Backspace',
    'Delete',
    'Tab',
    'Escape',
    'Enter',
    'Home',
    'End',
    'ArrowLeft',
    'ArrowRight',
    'Clear',
    'Copy',
    'Paste',
  ];
  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    let e = <KeyboardEvent>event;

    if (this.OnlyNumbers) {
      if (
        // Allow: Delete, Backspace, Tab, Escape, Enter, etc
        this.navigationKeys.indexOf(e.key) > -1 ||
        (e.key === 'a' && e.ctrlKey === true) || // Allow: Ctrl+A
        (e.key === 'c' && e.ctrlKey === true) || // Allow: Ctrl+C
        (e.key === 'v' && e.ctrlKey === true) || // Allow: Ctrl+V
        (e.key === 'x' && e.ctrlKey === true) || // Allow: Ctrl+X
        (e.key === 'a' && e.metaKey === true) || // Cmd+A (Mac)
        (e.key === 'c' && e.metaKey === true) || // Cmd+C (Mac)
        (e.key === 'v' && e.metaKey === true) || // Cmd+V (Mac)
        (e.key === 'x' && e.metaKey === true) // Cmd+X (Mac)
      ) {
        return; // let it happen, don't do anything
      }
      // Ensure that it is a number and stop the keypress
      if (e.key === ' ' || isNaN(Number(e.key))) {
        e.preventDefault();
      }
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: any): void {
    // let pastedInput: string | any;
    // if (window['clipboardData']) {
    //   // Browser is IE
    //   pastedInput = window['clipboardData'].getData('text');
    // } else if (event.clipboardData && event.clipboardData.getData) {
    //   // Other browsers
    //   pastedInput = event.clipboardData.getData('text/plain');
    // }

    event.preventDefault();
  }
}
