import { IProduct } from './../interfaces/product.interface';
import { Injectable } from '@angular/core';
import { IFilter } from './../interfaces/';
import { AsyncSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  private _makeUpFiltersSubject$: AsyncSubject<IFilter[]> = new AsyncSubject<IFilter[]>();
  public readonly makeUpFilters$: Observable<IFilter[]> = this._makeUpFiltersSubject$.asObservable();

  constructor() { }

  onCreateMakeUpFilters(products: IProduct[]): void {
    let categories: Set<string> = new Set();
    let tagList: Set<string> = new Set();
    let brand: Set<string> = new Set();
    let product_type: Set<string> = new Set();
    let filters: IFilter[] = [];

    products.forEach((product) => {
      if(product.category) {
        categories.add(product.category);
      }
      product.tag_list.forEach(item => tagList.add(item));
      brand.add(product.brand);
      product_type.add(product.product_type);
    });

    filters.push({filterName: 'catergories', filterValues:[...categories]});
    filters.push({filterName: 'tag_list', filterValues: [...tagList]});
    filters.push({filterName: 'brand', filterValues: [...brand]});
    filters.push({filterName: 'product_type', filterValues: [...product_type]});

    this._makeUpFiltersSubject$.next(filters);
    this._makeUpFiltersSubject$.complete()
  }
  private calcFiltersAmount(products: IProduct[]): void {
    
  }
}
