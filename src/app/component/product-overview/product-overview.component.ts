import { Component, OnInit } from '@angular/core';
import { ProductOverviewService } from '../../service/product-overview/product-overview.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {
   filePaths: string[];

  constructor(private productOverviewService: ProductOverviewService) { }

  ngOnInit() {
    this.productOverviewService.findAllThumbnails()
    .subscribe(
      (resp) => {
        this.filePaths = resp.body['thumbnails'];
        console.log("filepaths",this.filePaths);
      },
      (err) => {
        alert(err.error.message);        
      }
    );
  }

}
