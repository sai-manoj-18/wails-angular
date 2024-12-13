import { Component, OnInit } from '@angular/core'; 
import { LoginService } from '../login.service';
import { Router } from '@angular/router'; 



@Component({
  selector: 'app-stocks-dashboard',
  templateUrl: './stocks-dashboard.component.html',
  styleUrl: './stocks-dashboard.component.css'
})
export class StocksDashboardComponent implements OnInit{

  stocksData = [];
  TotalInvestmentOfStocks : number = 0
  TotalProfitOfStocks : number = 0
  TotalValueOfStocks : number = 0

  constructor(public loginService:LoginService,public route : Router){}

  ngOnInit(){
    this.loginService.getStocksData().subscribe((data) => {
      this.stocksData = data.stocks
      console.log("stock data is:",this.stocksData);
      this.stocksData.map((data) => {
        let { CurrentMarketPrice, Buyingprice, Quantity } = data
        this.TotalInvestmentOfStocks += (Buyingprice * Quantity)
        let profitOfStocks = ((CurrentMarketPrice - Buyingprice) * Quantity)
        this.TotalValueOfStocks += (CurrentMarketPrice * Quantity)  
        this.TotalProfitOfStocks += profitOfStocks
      })
    })
  }


  rountingToStocks(){
    this.route.navigate(['/stocks'],{state : this.stocksData});
  }

}