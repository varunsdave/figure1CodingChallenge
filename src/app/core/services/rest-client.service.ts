import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class RestClientService {
    constructor(private http: HttpClient) {

    }

    public getFeedData(nextUrl: string): Observable<ServerResponseFeedData> {
        let url = (nextUrl) ? nextUrl: 'https://staging-app.figure1.com/mock/feed';
        // (nextUrl.length > 0) ? url = : url = url;
        return this.http.get<ServerResponseFeedData>(url)
    }
}

export interface ServerResponseFeedData  {
    skip: number;
    count: number;
    _links: {
        next: {
            url: string;
        }
    }
    feed: any[]
} 