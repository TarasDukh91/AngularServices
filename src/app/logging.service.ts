import { Injectable } from "@angular/core";

@Injectable()
export class LoggingService {
    logStatus(status: string) {
        console.log('Status has been changed to ' + status)
    }
}