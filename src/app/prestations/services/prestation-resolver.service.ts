import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot, Resolve } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationService } from './prestation.service';

@Injectable({
  providedIn: 'root'
})
export class PrestationResolverService implements Resolve<Prestation> {
  constructor(
    private ps: PrestationService,
    private router: Router,
    private ar: ActivatedRoute) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Prestation> | Observable<never> {
    const id = route.paramMap.get('id');

    return this.ps.getPrestation(id).pipe(
      take(1),
      mergeMap(prestation => {
        if (prestation) {
          return of(prestation);
        } else { // id not found
          this.router.navigate(['prestations']);
          return EMPTY;
        }
      })
    );
  }
}
