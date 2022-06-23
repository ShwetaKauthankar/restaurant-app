import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl  } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import * as restdata from 'src/assets/restaurants.json';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss']
})
export class AddRestaurantComponent implements OnInit {
  restaurants: any = (restdata as any).default;
  AddRestaurantFormGroup: FormGroup;
  CategoryArray: any = ['Asian', 'Pizza', 'American'];
  
  constructor(public dialogRef: MatDialogRef<AddRestaurantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
      this.AddRestaurantFormGroup = new FormGroup({
        name: new FormControl('', [ Validators.required ]),
        category: new FormControl(''),
      });
     }

  ngOnInit(): void {}

  submitForm(){
    console.log("fjb");
    
  }

  onAddItem(){
    this.restaurants.push(this.AddRestaurantFormGroup.value);
    console.log(this.restaurants)
    this.restaurants = [this.restaurants, this.AddRestaurantFormGroup.value];
    this.dialogRef.close();

    
  }

  onCancel(){

  }

}
