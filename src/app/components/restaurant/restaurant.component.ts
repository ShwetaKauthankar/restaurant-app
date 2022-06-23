import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { MatTableDataSource } from '@angular/material/table';
import * as restdata from 'src/assets/restaurants.json';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  restaurants: any = (restdata as any).default;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }
  displayedColumns: string[] = ['id', 'name', 'cuisine_type', 'btn'];
  dataSource = new MatTableDataSource(this.restaurants);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  add_restaurant(): void {
    const dialogRef = this.dialog.open(AddRestaurantComponent, {
      width: '400px',
      data: "Hello"
    });

    dialogRef.afterClosed().subscribe(result => {
      return null;
    });
  }

  removeSelectedRows(e: number) {
    this.dataSource.data = this.dataSource.data.filter((element: any) => element.id !== e);
  }

  editRowData(e: number){
    console.log("edit", e);
    
  }

}
