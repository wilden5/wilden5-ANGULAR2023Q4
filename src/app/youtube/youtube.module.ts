import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './pages/search/search-results/search-results.component';
import { SearchItemComponent } from './pages/search/search-item/search-item.component';
import { ColoredBorderDirective } from './directives/colored-border.directive';
import { FilterComponent } from './components/filter/filter.component';
import { SortByKeywordPipe } from './pipes/sort-by-keyword.pipe';
import { SharedModule } from '../shared/shared.module';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { CustomButtonComponent } from '../shared/components/custom-button.component';
import { DetailedInformationComponent } from './pages/detailed-information/detailed-information.component';
import { ColoredItemFilterDirective } from './directives/colored-item-filter.directive';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    ColoredBorderDirective,
    FilterComponent,
    SortByKeywordPipe,
    DetailedInformationComponent,
    ColoredItemFilterDirective,
  ],
  imports: [CommonModule, CustomButtonComponent, YoutubeRoutingModule, SharedModule],
  exports: [SearchResultsComponent],
  providers: [SortByKeywordPipe],
})
export class YoutubeModule {}
