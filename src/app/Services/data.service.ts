import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map"
import Customer from '../Interfaces/Customer';

const url: string = "http://localhost:57179/api/customers"

@Injectable()
export class DataService {

  constructor(public http: Http) {

  }

  GetCustomers(search: string) {
    return this.http
      .get(url + "/" + search)
      .map(res => res.json());
  }

  createCustomer(customer: Customer) {
    return this.http
      .post(url, customer)
      .map(res => res.json());
  }

  updateCustomer(customer: Customer) {
    return this.http
      .put(url + "/" + customer.Id, customer)
      .map(res => res.json());
  }

  deleteCustomers(id: string) {
    return this.http
      .delete(url + "/" + id)
      .map(res => res.json());
  }

}
