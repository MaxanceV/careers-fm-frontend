import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Application} from "../data/application";
import { Observable } from "rxjs";


@Injectable({ providedIn: 'root' })
export class ApplicationService {
  private apiUrl = 'http://localhost:2121/api/v1/applications';

  constructor(private http: HttpClient) {}

  getApplicationsByJobId(jobId: string): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.apiUrl}/job/${jobId}`);
  }
}

