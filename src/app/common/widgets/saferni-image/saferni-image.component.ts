import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { ImageModel } from 'src/app/data/models/ImageModel';

@Component({
  selector: 'app-saferni-image',
  templateUrl: './saferni-image.component.html',
  styleUrls: ['./saferni-image.component.scss'],
})
export class SaferniImageComponent implements OnInit {
  @Input() url: string;
  @Input() imageModel: ImageModel;
  @Input() alt: string;

  isLoading = true;

  constructor() {}

  onImageLoaded() {
    this.isLoading = false;
  }

  ngOnInit(): void {}
}
