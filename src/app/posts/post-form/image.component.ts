import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-image',
  template: `
    <div class="image-upload-container">
      <div><img [src]="base64image | safeImageUrl" class="bigger-image" *ngIf="base64image"/> </div>
      <span>Select Image</span>
      <input
             type="file"
             accept="image/*"
             (change)="selectFile($event)">
    </div>
  `,
  styles: [
  ]
})
export class ImageComponent implements OnInit {

  @Input() newPost!: boolean;
  @Output() sendImage = new EventEmitter();

  base64image: any;
  errorMessage: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  selectFile(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.errorMessage = 'You must select an image';
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.errorMessage = "Only images are supported";
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.errorMessage = "";
      this.base64image = reader.result;
    }
    console.log(this.errorMessage);
    this.sendImage.emit(this.base64image);
  }

}
