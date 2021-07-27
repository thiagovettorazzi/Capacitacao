import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Roupa } from '../../models/roupa.model';
import { RoupasService } from '../../services/roupas.service';

@Component({
  selector: 'roupa-detalhes',
  templateUrl: './roupa-detalhes.component.html',
  styleUrls: ['./roupa-detalhes.component.css']
})
export class RoupaDetalhesComponent implements OnInit {
  
  public roupa: Roupa;
  
  constructor(private roupasService: RoupasService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.roupasService.buscarRoupa(id).subscribe((roupa: Roupa) => {
      this.roupa = roupa;
    });
  }
  
  public onClickComprar() {
    this.roupasService.comprar(this.roupa).subscribe(resultado => {
      if (resultado) {
        this.router.navigate(['/carrinho']);
      }
    });
  }
  
}
