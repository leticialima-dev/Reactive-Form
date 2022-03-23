import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-cmp',
  templateUrl: './dialog-cmp.component.html',
  styleUrls: ['./dialog-cmp.component.css']
})
export class DialogCmpComponent implements OnInit {

  name: string = ''
  lastname: string = ''
  user: string = ''
  cpf: string = ''
  phone: string = ''
  address:string = ''
  address2:string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
