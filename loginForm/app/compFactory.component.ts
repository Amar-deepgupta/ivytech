// import { ChangeDetectorRef, Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from "@angular/core";

// @Component({
//     selector: 'compfact',
//     template:`<div #load></div>`
// })
// export class CompFactory{
//     @ViewChild('load', { read: ViewContainerRef }) 
//     target:any;
//     @Input() type:any;
//     cmpRef :any;
   
//     private isViewInitialized: boolean = false;
  
//     constructor(private componentFactoryResolver: ComponentFactoryResolver, private cdRef: ChangeDetectorRef) { }
  
//     updateComponent() {
//       if (!this.isViewInitialized) {
//         return;
//       }
//       if (this.cmpRef) {
//         this.cmpRef.destroy();
//       }
  
//       let factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
//       this.cmpRef = this.target.createComponent(factory)
//       // to access the created instance use
//       // this.compRef.instance.someProperty = 'someValue';
//       // this.compRef.instance.someOutput.subscribe(val => doSomething());
//       this.cdRef.detectChanges();
//     }
  
//     ngOnChanges() {
//       this.updateComponent();
//     }
  
//     ngAfterViewInit() {
//       this.isViewInitialized = true;
//       this.updateComponent();
//     }
  
//     ngOnDestroy() {
//       if (this.cmpRef) {
//         this.cmpRef.destroy();
//       }
//     }
//   }
