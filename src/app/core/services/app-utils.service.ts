import {Injectable} from '@angular/core';
import {Location} from '@angular/common';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AppUtilsService {

  private appRootPath = environment.config.appRootPath;

  constructor(private location: Location) {
  }

  isCurrentPathInApp(): boolean {
    const currentPath:string = this.location.path();

    return currentPath.startsWith(this.appRootPath);
  }

}
