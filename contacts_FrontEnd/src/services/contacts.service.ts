import { Contact } from './../model/model.contact';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactsService{
    constructor(public http:HttpClient){

    }
    getContacts(motCle:string , page:number , size: number){
        return this.http.get("http://localhost:8081/chercherContacts?mc="
        +motCle+"&size="+size+"&page="+page);
    }

    saveContact(contact:Contact){
        return this.http.post("http://localhost:8081/contacts", contact);
    }

}