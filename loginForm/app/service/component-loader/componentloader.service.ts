import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { ComponenthelperService } from '../component-helper/componenthelper.service';

@Injectable({
  providedIn: 'root'
})
export class ComponentloaderService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private componentHelper: ComponenthelperService,
  ) { }
  //createComponent(matchedComponent, containerName: ViewContainerRef, componentData, index?: number)
  createComponent(matchedComponent:any, containerName: ViewContainerRef,componentData,index?: number) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(matchedComponent);
    const componentRef = containerName.createComponent(componentFactory, index);
    Object.assign(componentRef.instance, componentData);
  }
  parseData(jsonData:any, specificContainerName: ViewContainerRef, index?: number) {
    if (jsonData.hasOwnProperty('ctype')) {
      let matchedComponent = this.componentHelper.determineComponent(jsonData['ctype']);
      this.createComponent(matchedComponent,specificContainerName,jsonData,index);
    }
    
  }
 
}
