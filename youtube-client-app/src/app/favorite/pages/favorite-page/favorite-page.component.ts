import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectFavoriteItems } from '../../../redux/selectors/youtube-items.selectors';
import { AppState } from '../../../redux/app.state';
import { ProjectPath } from '../../../utils/project-constants';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss'],
})
export class FavoritePageComponent {
  protected readonly selectFavoriteYoutubeItems = selectFavoriteItems;

  protected readonly ProjectPath = ProjectPath;

  constructor(protected store: Store<AppState>) {}
}
