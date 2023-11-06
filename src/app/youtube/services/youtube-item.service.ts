import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISearchItem } from '../models/search-item.model';
import { youtubeResponse } from '../../../mocks/youtube.mock';

@Injectable({
  providedIn: 'root',
})
export class YoutubeItemService {
  getYoutubeItemsBySearchQuery(query: string): Observable<ISearchItem[]> {
    return of(youtubeResponse.items.filter((item) => item.snippet.title.toLowerCase().includes(query.toLowerCase())));
  }

  getSpecificItemById(id: string): Observable<ISearchItem | undefined> {
    return of(youtubeResponse.items.find((item) => item.id === id));
  }
}