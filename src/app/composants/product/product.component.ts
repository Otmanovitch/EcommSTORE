import { Component, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
product: any;

  constructor(private ps : ProduitsService ) { }

  ngOnInit(): void {
    this.getProduits();
  }

  getProduits(){
    this.ps.getProduits().subscribe(data=>{
      this.product = data;
      console.log(this.product);

    })
  }
  deleteProduct(id: any){
    this.ps.deleteProduits(id).subscribe(data => {
      this.getProduits();
      console.log("deleted");
    }
    )
  }

  

 disponible(p: any){
    this.ps.disponible(p).subscribe(data => {
      this.getProduits();
      console.log("disponible");
    })

  }



  filterbyPrice(search : any ){
  /* let search= search.value;**/
    this.ps.filterbyPriceservices(search).subscribe(data => {
    this.product = data;
    

      
    
    }

 
    
  )  }

  filterbyKeyword(searchK : any){
    this.ps.filterbyKeywordServices(searchK).subscribe(data => {
      this.product = data;
      
    })
  }
}
