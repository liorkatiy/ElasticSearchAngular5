import { Component, OnInit } from '@angular/core';
import { DataService } from "../../Services/data.service";
import Customer from "../../Interfaces/Customer"

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  customers: Customer[] = []
  newUser: Customer = { FirstName: "", LastName: "", Age: 0, Email: "", IdCard: "" }

  constructor(private data: DataService) {

  }

  ngOnInit() {

  }

  search(s) {
    this.data.GetCustomers(s).subscribe(p => this.customers = p)
  }

  add() {
    this.data.createCustomer(this.newUser).subscribe(p => alert("User Added With ID " + p))
  }

  update(customer: Customer) {
    this.data.updateCustomer(customer).subscribe(p => alert("User Updated " + p))
  }

  delete(id: string) {
    const customers = this.customers;
    this.data.deleteCustomers(id).subscribe(deleted => {
      if (deleted) {
        for (let i = 0; i < customers.length; i++) {
          if (customers[i].Id === id) {
            customers.splice(i, 1);
            break;
          }
        }
      }
    });
  }

}

