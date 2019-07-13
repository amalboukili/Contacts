import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
// import 'rxjs/add/operator/map';
//  import 'rxjs/Rx';
// import { map } from "rxjs/operators"; 

@Component({
  selector: 'app-c',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
 pageCotacts:any;
  //injection des dependantes
  constructor(private http:HttpClient) { }

  ngOnInit() {
    //le traitement qui se fait a l'initialisation
    this.http.get("http://localhost:8081/chercherContacts")
    .subscribe(data=>{
      this.pageCotacts=data;
    },err=>{
      console.log(err);
    }
    )
  }

}
