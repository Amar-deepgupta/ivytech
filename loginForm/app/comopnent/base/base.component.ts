import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentloaderService } from '../../service/component-loader/componentloader.service';


@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  
  @ViewChild('container', { read: ViewContainerRef }) container:any= ViewContainerRef;
  constructor(private componentLoaderService: ComponentloaderService,
     private _changeDetectionRef: ChangeDetectorRef,private client:HttpClient) { }

  ngOnInit(): void {
    // this.metadataService.getLocal(Url.login)
    this.client.get('../assets/login.json').subscribe((data) => {
      this.componentLoaderService.parseData(data, this.container);
      console.log(data);
      // this.contextService.addToContext('baseContainerRef', this.container);
    }, (error) => {
      console.log(error);
    });
  }
}
