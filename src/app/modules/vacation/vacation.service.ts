import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})

export class VacationService {
  private apiUrl = 'http://localhost:3000/sum'

  constructor(private _http: HttpClient) {
  }

  getSum(num1: number, num2: number): Observable<{ result: number }> {
    return this._http.get<{result: number}>(`${this.apiUrl}?num1=${num1}&num2=${num2}`)
  }
}
