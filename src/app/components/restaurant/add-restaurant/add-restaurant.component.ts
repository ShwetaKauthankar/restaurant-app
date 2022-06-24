import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as restdata from 'src/assets/restaurants.json';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss']
})
export class AddRestaurantComponent implements OnInit {
  restaurants: any = (restdata as any).default;
  AddRestaurantFormGroup: FormGroup;
  CategoryArray: any = ['Asian', 'Pizza', 'American'];

  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddRestaurantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    this.AddRestaurantFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      category: new FormControl(''),
    });
  }

  onAddRestaurant() {
    this.restaurants.push(this.AddRestaurantFormGroup.value);
    console.log("this.restaurants", this.restaurants);
    
    this.dialogRef.close();
  }

  submitForm() {
    console.log("submit");
  }

  onCancel() {
    this.dialogRef.close();
  }


}
