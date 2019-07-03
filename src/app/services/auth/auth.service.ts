import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  apiBase = 'http://localhost:53417/';

  constructor(private http: HttpClient) { }

  test(): void {
    // const encryptedUserName: Uint8Array;  // equivalent of C# byte[]
    // encryptedUserName =

    this.http.get(`${this.apiBase}api/Info/HealthCheck`)
      .subscribe(res => {
        console.log(res);
      });
  }
}
