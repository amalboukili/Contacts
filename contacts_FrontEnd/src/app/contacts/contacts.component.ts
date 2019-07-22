import { Contact } from './../../model/model.contact';
import { ContactsService } from './../../services/contacts.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
// import 'rxjs/add/operator/map';
//  import 'rxjs/Rx';
// import { map } from "rxjs/operators"; 

@Component({
  selector: 'app-c',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageCotacts: any;
  motCle: string = "";
  currentPage: number = 0;
  size: number = 5;
  //******Declarer un tableau de pagination
  pages: Array<number>;
  //pages:any;


  //******injection des dependantes
  constructor(private http: HttpClient, public contactservice: ContactsService, public router: Router) { }

  ngOnInit() {
    //******le traitement qui se fait a l'initialisation

    // this.http.get("http://localhost:8081/chercherContacts")
    // .subscribe(data=>{
    //   this.pageCotacts=data;
    // },err=>{
    //   console.log(err);
    // }
    // )

  }

  doSearch() {
    this.contactservice.getContacts(this.motCle, this.currentPage, this.size)
      .subscribe(data => {
        this.pageCotacts = data;
        console.log(data);
        this.pages = new Array(data.totalPages);
      }, err => {
        console.log(err);
      })
  }

  chercher() {
    this.doSearch();
  }
  gotoPage(i: number) {
    this.currentPage = i;
    this.doSearch();

  }

  onEditContact(id: number) {
    this.router.navigate(['editContact', id]);
  }

  onDeleteContact(c: Contact) {
    let confirm = window.confirm('Etes vous sure de vouloir supprimer ce contact??');
    if (confirm == true) {
      this.contactservice.deleteContact(c.id)
        .subscribe(data => {

          //supprimer 1 element avec splice 
          this.pageCotacts.content.splice(
            this.pageCotacts.content.indexOf(c), 1
          );
        }, err => {
          console.log(err);
        })
    }

  }

}
