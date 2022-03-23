import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog} from '@angular/material/dialog';
import { DialogCmpComponent } from './dialog-cmp/dialog-cmp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (private dialog: MatDialog) {}

  newForm: FormGroup = new FormGroup({
  
  name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
  user: new FormControl('', [Validators.required, Validators.minLength(8)]),
  cpf: new FormControl('', [Validators.required, Validators.minLength(10)]),
  phone: new FormControl('', [Validators.required, Validators.minLength(9)]),
  address:  new FormControl('', [Validators.required, Validators.minLength(6)]),
  address2: new FormControl('', [Validators.required, Validators.minLength(6)]),
  password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  confirmpass: new FormControl('',[Validators.required, Validators.minLength(6)]),

})


  
   submit(): void{
   console.log(`Name= ${this.newForm.controls['name'].value}`)
   console.log(`LastName= ${this.newForm.controls['lastname'].value}`)
   console.log(`User= ${this.newForm.controls['user'].value}`)
   console.log(`Cpf= ${this.newForm.controls['cpf'].value}`)
   console.log(`Phone= ${this.newForm.controls['phone'].value}`)
   console.log(`Address= ${this.newForm.controls['address'].value}`)
   console.log(`Address2= ${this.newForm.controls['address2'].value}`)
   console.log(`Password= ${this.newForm.controls['password'].value}`)
   console.log(`Confirmpass= ${this.newForm.controls['confirmpass'].value}`)


    if(this.newForm.controls['password'].value !=
      this.newForm.controls['confirmpass'].value) {
    alert("As senhas não são compatíveis, digitar novamemente");
     return;
      }
    

      
      let ref = this.dialog.open(DialogCmpComponent)

    ref.componentInstance.name = this.newForm.controls['name'].value
    ref.componentInstance.lastname = this.newForm.controls['lastname'].value
    ref.componentInstance.user= this.newForm.controls['user'].value
    ref.componentInstance.cpf= this.newForm.controls['cpf'].value
    ref.componentInstance.phone= this.newForm.controls['phone'].value
    ref.componentInstance.address= this.newForm.controls['address'].value
    ref.componentInstance.address2= this.newForm.controls['address2'].value
   
  } 

 }
 



 