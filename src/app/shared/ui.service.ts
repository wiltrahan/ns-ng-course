import { Injectable, ViewContainerRef } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root'})
export class UIService {
  private _drawerState = new BehaviorSubject<void>(null);
  private _rootVCRef: ViewContainerRef;
  
  get drawerState() {
    return this._drawerState.asObservable();
  }

  toggleDrawer() {
    this._drawerState.next(null);
  }

  setRootVcRef(vcRef: ViewContainerRef) {
    this._rootVCRef = vcRef;
  }

  getRootVcRef() {
    return this._rootVCRef;
  }
}