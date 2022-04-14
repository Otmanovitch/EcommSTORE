import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  constructor(private http:HttpClient) { }

getProduits() {
  return this.http.get("http://localhost:3000/products")
}

deleteProduits(id: any){
  return this.http.delete("http://localhost:3000/products/" + id)
};

addProduits(produit:any){
  return this.http.post("http://localhost:3000/products", produit)
}



disponible(p:any){
  let Stock = p.Stock;

  return this.http.patch("http://localhost:3000/products/" + p.id, {Stock: !Stock})
}

filterbyPrice(search:any){
  let price_min= search.value.price_min;
  let price_max= search.value.price_max;
  return this.http.get("http://localhost:3000/products/?price_gte="+price_min+"&price_lte="+price_max)
}


}
