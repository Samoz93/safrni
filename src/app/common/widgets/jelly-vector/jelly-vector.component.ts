import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jelly-vector',
  templateUrl: './jelly-vector.component.html',
  styleUrls: ['./jelly-vector.component.scss']
})
export class JellyVectorComponent implements OnInit {

  @Input() items:JellyVectorItem[]
  constructor() { }

  ngOnInit(): void {
    if(!this.items)
    {
      this.items = [
       new JellyVectorItem(
          30,80,'left'
        ), new JellyVectorItem(
          20,60,'right'
        ),
      ]
    }
  }
  getStyleFromJellyItem(jellyVectorItem : JellyVectorItem)
  {
    return {
      'width':`${jellyVectorItem.width}rem`,
      'top':`${jellyVectorItem.top}rem`,
      
    };
  }

}

export class JellyVectorItem
{
  width:number;
  top:number;
  alignment:string
  constructor(
    width:number,top:number,alignment:string
  ){
   this.width = width;
    this.alignment = alignment;
   this.top = top;
  }
}