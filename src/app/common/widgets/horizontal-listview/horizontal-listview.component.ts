import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageModel } from 'src/app/data/models/ImageModel';

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
    console.log(index);

    this.itemClicked.emit(index);
  }
  isStringList(images: string[] | ImageModel[]): images is string[] {
    return (images as ImageModel[])[0].url === undefined;
  }
}
