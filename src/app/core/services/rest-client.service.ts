import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {ServerResponseFeedData} from "../models/feed.model";

@Injectable()
export class RestClientService {
    constructor(private http: HttpClient) { }

    public getFeedData(nextUrl: string): Observable<ServerResponseFeedData> {
        let url = (nextUrl) ? nextUrl: 'https://staging-app.figure1.com/mock/feed';
        return this.http.get<ServerResponseFeedData>(url)
    }
}
