import { ComponentFactoryResolver } from "@angular/core";
import { Subscription } from "rxjs";
import { AlertComponent } from "./alert.component";
import { PlaceholderDirective } from "../placeholder/placeholder.directive";
import { StatusCodeDescriptor } from "./status_code_descriptor";

export class ComponentInjectHelpers {

    static showStatusCodeErrorAlert(
        statusCode: number,
        componentFactoryResolver: ComponentFactoryResolver,
        closeSub: Subscription,
        alertHost: PlaceholderDirective
        ) { 
        
        const alertCmpFactory = componentFactoryResolver.resolveComponentFactory(
          AlertComponent
        );
        const hostViewContainerRef = alertHost.viewContainerRef;
        hostViewContainerRef.clear();
    
        const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
    
        componentRef.instance.message = StatusCodeDescriptor.codeMessage(statusCode);;
        closeSub = componentRef.instance.close.subscribe(() => {
          closeSub.unsubscribe();
          hostViewContainerRef.clear();
        });
    }

    static showErrorMessageAlert(
        errorMessage: string,
        componentFactoryResolver: ComponentFactoryResolver,
        closeSub: Subscription,
        alertHost: PlaceholderDirective
        ) {
        
        const alertCmpFactory = componentFactoryResolver.resolveComponentFactory(
          AlertComponent
        );
        const hostViewContainerRef = alertHost.viewContainerRef;
        hostViewContainerRef.clear();
    
        const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
    
        componentRef.instance.message = errorMessage;
        closeSub = componentRef.instance.close.subscribe(() => {
          closeSub.unsubscribe();
          hostViewContainerRef.clear();
        });
    }

}