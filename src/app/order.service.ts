import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  // im using the json file as a mock api to get the data from the server so i can see the data in tab 2 and update page
  // we can delete these later when we have the data from mongodb

  // getAllOrder(): Observable<any> {
  //   let url = 'assets/data/test.json';
  //   return this.http.get(url);
  // }

  // getOrder(id: string): Observable<any> {
  //   let url = 'assets/data/test.json';
  //   return this.http.get<any[]>(url).pipe(
  //     map((orders) => orders.find((order) => order.id.toString() === id.toString()))
  //   );
  // }


  // passing two parameters to the update function, the orderID and the updateData
  // orderID will tell the server which orderid to update and the updateData will tell the server the info to update

  insert(data: any) {
    return this.http.post('http://127.0.0.1:8887/insert/',
      { data });
  }

  getAllOrder(): Observable<any>{
    return this.http.get('http://127.0.0.1:8887/retrieveAll/');
  }

  getOrder(params: any): Observable<any> {
    return this.http.get('http://127.0.0.1:8887/retrieveOne/', {params});
  }

  update(data: any) {
    return this.http.put('http://127.0.0.1:8887/update/',
      { data });
  }

  delete(params: any){
    return this.http.delete('http://127.0.0.1:8887/delete/', params);
  }
}
