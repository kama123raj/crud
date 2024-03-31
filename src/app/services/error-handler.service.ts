import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export class GloErrorHandler implements ErrorHandler{

    handleError(error: any): void {
        console.log(error)
    }

}