import { Component, OnInit, viewChild, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { ActivatedRoute,Router, TitleStrategy } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-stocks-detail',
  templateUrl: './stocks-detail.component.html',
  styleUrl: './stocks-detail.component.css'
})
export class StocksDetailComponent implements OnInit{
  
  stockDetailsData : any = [];
  displayedColumns : any;
  dataSource : any;
  singleObject : any;


  constructor(public routes: ActivatedRoute, public router : Router){
    this.dataSource = new MatTableDataSource([]);
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort; 
  }
  
  ngOnInit(){
    // console.log("data is",this.routes.snapshot.params)
    // this.routes.params.subscribe((record) => {
    //   console.log("final data is",record)
    // })
    // const data1 = this.router.getCurrentNavigation()?.extras.state
    let tempData = window.history.state
    Object.keys(tempData).forEach((stock) => {
      this.stockDetailsData.push(tempData[stock])
    })
    this.stockDetailsData.splice(-1,1);
    this.dataSource.data = this.stockDetailsData
    // this.dataSource.paginator = this.paginator;
    console.log("data from dashboard is:",this.dataSource);
    this.singleObject = this.stockDetailsData[0]
    const keys = Object.keys(this.singleObject)
    this.displayedColumns = keys
  }

}
