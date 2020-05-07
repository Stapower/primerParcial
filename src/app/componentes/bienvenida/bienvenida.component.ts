import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
	selector: 'app-bienvenida',
	templateUrl: './bienvenida.component.html',
	styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

	constructor(
		private router: Router
		) { }

	ngOnInit(): void {
	}


	redirectTo(tipo: string) {
		this.router.navigate([tipo]);
	}

}
