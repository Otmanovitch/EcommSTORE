import { Component, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ps : ProduitsService) { }

  ngOnInit(): void {
  }

  addProduit(produit:any){
  let data = produit.value;
  this.ps.addProduits(produit.value).subscribe(data => {
  console.log("produit enregistré");

  });

}
}

