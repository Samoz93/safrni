import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() viewRef : TemplateRef<any>;
  @Input() isLoading = false;
  constructor() {}

  ngOnInit(): void {}
}
