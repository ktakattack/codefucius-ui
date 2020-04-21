import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { UserService } from '../services/user/user.service';
import { User } from '../services/user/user';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';


/* export interface ManagerTable {
  name: string;
  role: string;
  reviewHours: number;
  value: number;
  completedReviews: number;
} */

/*  const ELEMENT_DATA: ManagerTable[] = [
  {name: 'Emily McDonald', role: 'Reviewer', reviewHours: 10, value: 10, completedReviews: 6},
  {name: 'Bill Smile', role: 'Reviewer', reviewHours: 15, value: 15, completedReviews: 10},
  {name: 'Will Desk', role: 'Reviewer', reviewHours: 6, value: 6, completedReviews: 8},
  {name: 'Smith Will', role: 'Reviewer', reviewHours: 1, value: 1, completedReviews: 15}
];  */

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {
  //displayedColumns: string[] = ['name', 'role', 'reviewHours', 'completedReviews'];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns: string[] = ['name', 'role', 'reviewHours'];
  users: Array<User>;
  dataSource: UserService;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  /*  assignCopy() {
     this.users = Object.assign([], this.users);
   }
   filterItem(value) {
     if (!value) {
       this.assignCopy();
     } // when nothing has typed
     this.users = Object.assign([], this.users).filter(
       item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
     )
     this.assignCopy();//when you fetch collection from server.
 
   }; */



  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Employee';
  yAxisLabel = 'Code Review Hours Completed';
  colorScheme = {
    domain: ['#80CBC4']
  };

  reviewDateTo: Date;
  reviewDateFrom: Date;

  constructor(private UserService: UserService) {
    // Object.assign(this, { ELEMENT_DATA })
    Object.assign(this, { User })
  }

  //call to API to get names
  ngOnInit() {
    this.UserService.getAll().subscribe(res => {
      this.users = res;
    })

  }
}


