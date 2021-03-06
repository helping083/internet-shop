import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { CardComponent } from './components/card/card.component';
import { CardImageComponent } from './components/card-image/card-image.component';
import { SharedModule } from '../_shared/shared.module';
import { BarRatingModule } from "ngx-bar-rating";
import { NgxPaginationModule } from 'ngx-pagination';
import { FiltersPanelComponent } from './components/filters-panel/filters-panel.component';
import { CardDetailsComponent } from './pages/card-details/card-details.component';

@NgModule({
  declarations: [
    CatalogComponent,
    CardComponent,
    CardImageComponent,
    FiltersPanelComponent,
    CardDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BarRatingModule,
    NgxPaginationModule,
    
  ],
  exports: [
    FiltersPanelComponent
  ]
})
export class ProductCatalogModule { }
