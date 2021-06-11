import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentloaderService } from '../../service/component-loader/componentloader.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-form-panel',
  templateUrl: './form-panel.component.html',
  styleUrls: ['./form-panel.component.css']
})
export class FormPanelComponent implements OnInit {

  @Input() header: {};
  @Input() footer: any[];
  @Input() items: any = [];
  @Input() css: any;
  @Input() uuid: any;
  @Input() tileActions: any;
  @Input() footerStyles: string;
  @Input() footerClass: string;
  @Input() parentuuid: string;
  @Input() targetuuid: any;
  @Input() accessoryName: any;
  @Input() formPanelClass: string;
  @Input() formContainerClass: string;
  @Input() footerActions: any[];
  componentUUID: any;
  @ViewChild('formContent', { static: true, read: ViewContainerRef })
  formContent:any= ViewContainerRef;
  @ViewChild('footerContent', { static: true, read: ViewContainerRef })
  footerContent:any= ViewContainerRef;
  @ViewChild('formpanel', { static: true, read: ViewContainerRef })
  formpanel:any= ViewContainerRef;

  constructor(
    private componentLoaderService: ComponentloaderService,
      ) {  }

  ngOnInit(): void {
    this.componentUUID = this.uuid;
    this.uuid = new FormGroup({});
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.items.length; i++) {
      this.uuid.addControl(
        this.items[i].name,
        new FormControl(this.items[i].value)
      );
    }
    this.items.forEach((item:any) => {
      item.group = this.uuid;
      item.parentuuid = this.componentUUID;
      item.targetuuid = this.componentUUID;
      /// Handling multiple nested panels case
      item.footerActions = this.footerActions !== undefined &&
        this.footerActions.length > 0 ? this.footerActions : (this.footer && this.footer.length > 0 ?
          this.footer[0].actions : []);
      this.componentLoaderService.parseData(item, this.formContent);
    });
    if (this.footer && this.footer.length > 0) {
      this.footer.forEach((item) => {
        item.group = this.uuid;
        this.componentLoaderService.parseData(item, this.footerContent);
      });
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.onExpanedTrue()
    }, 300)
  }

  onExpanedTrue() {
    let data = this.items.filter((ele:any) => ele.ctype === "textField");
    data = data.filter((ele:any) => ele.focus === undefined)
    if (data.length > 0) {
  //     let txtfield = this.contextService.getDataByKey(data[0].uuid + "ref")
  //     // console.log(txtfield);
  //     txtfield.instance.textFieldRef.nativeElement.focus()
  //     txtfield.instance.textFieldRef.nativeElement.autofocus = true;
     }
   }

}


