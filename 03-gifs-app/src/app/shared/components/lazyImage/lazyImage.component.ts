import { Component, Input, type OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazyImage.component.html',
  styleUrls: ['./lazyImage.component.css'],
})
export class LazyImageComponent implements OnInit {

  @Input() url!: string;
  @Input() alt!: string;

  public hasLoaded : boolean = false;

  ngOnInit(): void {
    if (!this.url) { throw new Error('Url property is required');}
  }

  onLoad(): void {
    this.hasLoaded = true;
  }
}
