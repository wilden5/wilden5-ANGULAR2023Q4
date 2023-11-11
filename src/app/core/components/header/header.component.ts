import { Component, DestroyRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FiltersVisibilityService } from '../../../youtube/services/filters-visibility.service';
import { SearchService } from '../../../youtube/services/search.service';
import { LoginService } from '../../../auth/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAddButtonClicked = false;

  constructor(
    protected filtersVisibilityService: FiltersVisibilityService,
    private searchService: SearchService,
    private router: Router,
    protected loginService: LoginService,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.searchService
      .getSearchQueryObservable()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {});
  }

  onToggleFiltersButtonClick(): void {
    this.filtersVisibilityService.toggleFiltersVisibility();
  }

  onSearchInputChange(searchQuery: string): void {
    this.searchService.setSearchObservable(searchQuery);
    if (searchQuery.length > 2) {
      this.router.navigate(['/search']);
    }
  }

  onLogoutButtonClick(): void {
    this.loginService.logout();
  }

  onLoginButtonClick(): void {
    this.router.navigate(['/login']);
  }

  onAddVideoButtonClick(): void {
    this.router.navigate(['/search/admin']);
    this.isAddButtonClicked = true;
  }
}
