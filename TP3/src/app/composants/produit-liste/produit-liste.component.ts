import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit-liste',
  templateUrl: './produit-liste.component.html',
  styleUrls: ['./produit-liste.component.css']
})
export class ProduitListeComponent implements OnInit {
  produits: any[] = [];
  produitsFiltres: any[] = [];

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.produitService.getProduits().subscribe((data: any[]) => {
      console.log(data); // Ajoutez cette ligne pour déboguer
      this.produits = data;
      this.produitsFiltres = data; 
    }, error => {
      console.error("Erreur lors de la récupération des produits", error);
    });
  }

  filtrerProduits(term: string): void {
    if (!term) {
      this.produitsFiltres = this.produits;
    } else {
      this.produitsFiltres = this.produits.filter(produit =>
        produit.nom.toLowerCase().includes(term.toLowerCase())
      );
    }
  }
}
