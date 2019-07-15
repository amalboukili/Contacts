import { ContactsService } from './../../services/contacts.service';
import { Contact } from './../../model/model.contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  contact:Contact=new Contact();

  constructor(public contactsService:ContactsService) { }

  ngOnInit() {
  }

  saveContact(){
    this.contactsService.saveContact(this.contact)
    .subscribe(data=>{
      console.log(data)
    }, err=>{
      console.log(err)
    });
  }

}
