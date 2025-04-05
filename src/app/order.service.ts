import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  insert(data:any){
    return this.http.post('http://127.0.0.1:8887/insert/',{data});
  }
  retrieveAll(params:any) {
    return this.http.get('http://127.0.0.1:8887/retrieveAll/',{params});
    }

    retrieveOne(params:any) {
      return this.http.get('http://127.0.0.1:8887/retrieveOne/',{params});
      }

  
    delete(params:any){
      return this.http.get('http://127.0.0.1:8887/delete/',{params});
      }

       //Modifythe below code for update 
       getOrder(params:any) {
      
       }

       //****below code written by Han */

      // im using the json file as a mock api to get the data from the server so i can see the data in tab 2 and update page
  // we can delete these later when we have the data from mongodb
  

      // getAllOrder():Observable<any>{
      //   let url = 'assets/data/test.json';
      //   return this.http.get(url);
      // }
    
      // getOrder(id: string): Observable<any> {
      //   let url = 'assets/data/test.json';
      //   return this.http.get<any[]>(url).pipe(
      //     map((orders) => orders.find((order) => order.id.toString() === id.toString()))
      //   );
      // }


     
      

}
