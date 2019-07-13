import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactsService{
    constructor(public http:HttpClient){

    }
    getContacts(){
        return this.http.get("http://localhost:8081/chercherContacts");
    }

}