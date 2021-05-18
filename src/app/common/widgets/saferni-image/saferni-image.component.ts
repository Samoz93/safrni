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
  @Input() overlayOpacity = 25;
  isLoading = true;

  constructor() {}

  onImageLoaded() {
    this.isLoading = false;
  }

  ngOnInit(): void {}

  getOverlayStyle(): string {
    return `linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, ${this.overlayOpacity}));`;
  }
}
