import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.css'],
})
export class CreatComponent implements OnInit {
  errMsg: any;
  okMsg: any;
  getParamid: any;

  constructor(private service: ApiService, private router: ActivatedRoute) {}
  ngOnInit(): void {
    // console.log(this.router.snapshot.paramMap.get('id'),'getid')
    this.getParamid = this.router.snapshot.paramMap.get('id');

    //get single user

    if(this.getParamid){
      this.service.getauser(this.getParamid).subscribe((user) => {
        console.log(user, 'single user');

        //persite value in form
        this.userForm.patchValue({
          fullname: user.data[0].fullname,
          email: user.data[0].email,
          mobile: user.data[0].mobile,
          id: user.data[0].id,
        });
      });

    }

  }

  userForm = new FormGroup({
    fullname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required),
  });

  //creat new user
  userSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);

      this.service.creatUser(this.userForm.value).subscribe((user) => {
        console.log(user, 'creat api free');
        //sucess message
        this.okMsg = user.message;
      });
    } else {
      this.errMsg = ' Head up! all field are required ';
    }
  }

  //updateUser

  userUpdate() {
    console.log(this.userForm.value, 'updatedform');

    if (this.userForm.valid) {
      this.service
        .updateUser(this.userForm.value, this.getParamid)
        .subscribe((user) => {
          console.log(user, 'data updated');
          this.okMsg = user.message;
        });
    } else {
      this.errMsg = ' failed to update ';
    }
  }
}
