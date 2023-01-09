import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  readUser: any;
  deleteok:any

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.getAll();

  }

  //deleted user

  deleteID(h:any){
     this.service.deleteUser(h).subscribe(user=>{
      console.log(user ,'deleted')
      this.deleteok = user.message

     })
    console.log(h ,'delleted')

  }


  //get all user

  getAll(){
    this.service.getAllUser().subscribe((user) => {
      console.log(user, 'fecthed succesfully from backend');
      this.readUser = user.data

    });
  }

}
