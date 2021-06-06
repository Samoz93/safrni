import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageModel } from 'src/app/data/models/ImageModel';
import { MetaService } from 'src/app/data/services/meta.service';

@Component({
  selector: 'app-horizontal-listview',
  templateUrl: './horizontal-listview.component.html',
  styleUrls: ['./horizontal-listview.component.scss'],
})
export class HorizontalListviewComponent implements OnInit {
  currentSwiperIndex: number = 0;
  @Input() images: string[] | ImageModel[];

  @Output() itemClicked = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  imagesUrls(): string[] {
    if (this.isStringList(this.images)) return this.images;
    else return this.images.map((image: ImageModel) => image.url);
  }
  onImageClicked(index: number) {
    this.itemClicked.emit(index);
  }
  isStringList(images: string[] | ImageModel[]): images is string[] {
    return (
      images === undefined ||
      (images as ImageModel[])[0] === undefined ||
      (images as ImageModel[])[0].url === undefined
    );
  }
}
