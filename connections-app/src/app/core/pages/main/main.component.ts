import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { loadGroupList, loadGroupListDirectHttp } from '../../../group/state/group.actions';
import { selectGroupList } from '../../../group/state/group.selectors';
import { ProjectPages } from '../../../../environment/environment';
import { ModalService } from '../../services/modal.service';
import { selectPeopleList } from '../../state/people/people.selectors';
import { loadPeopleList, loadPeopleListDirectHttp } from '../../state/people/people.actions';
import {
  createNewConversation,
  loadConversationList,
} from '../../../conversation/state/conversation.actions';
import { IPersonTransformed } from '../../models/people.model';
import { selectConversationList } from '../../../conversation/state/conversation.selectors';
import { IConversationItemTransformed } from '../../../conversation/model/conversation.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  protected userUid = JSON.parse(localStorage.getItem('userObject') as string).uid;

  protected readonly selectGroupList = selectGroupList;

  protected readonly ProjectPages = ProjectPages;

  peopleList$?: Observable<IPersonTransformed[]>;

  conversationList$?: Observable<IConversationItemTransformed[]>;

  constructor(
    protected store: Store,
    protected modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadGroupList());
    this.store.dispatch(loadPeopleList());
    this.store.dispatch(loadConversationList());

    this.peopleList$ = this.store.select(selectPeopleList);
    this.conversationList$ = this.store.select(selectConversationList);
  }

  isInConversationList(uid: string): Observable<boolean> | undefined {
    return this.conversationList$?.pipe(
      map((conversationList) => conversationList.some((item) => item.companionID === uid))
    );
  }

  getConversationId(uid: string): Observable<string | undefined> | undefined {
    return this.conversationList$?.pipe(
      map((conversationList) => conversationList.find((item) => item.companionID === uid)?.id)
    );
  }

  onUpdateButtonClick(): void {
    this.store.dispatch(loadGroupListDirectHttp());
  }

  onDeleteGroupButtonClick(id: string): void {
    this.modalService.openConfirmationDialog(id, true);
  }

  onCreateGroupButtonClick(): void {
    this.modalService.openCreateGroupDialog();
  }

  onUpdatePeopleListButtonClick(): void {
    this.store.dispatch(loadPeopleListDirectHttp());
  }

  onUserNameClick(companionId: string, isConversationCreated: boolean): void {
    if (!isConversationCreated) {
      this.store.dispatch(createNewConversation({ companionId }));
    }
  }
}
