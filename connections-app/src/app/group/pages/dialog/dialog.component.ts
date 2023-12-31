import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { ProjectPages } from '../../../../environment/environment';
import { loadGroupDialog, sendNewMessage } from '../../state/dialog/dialog.actions';
import { selectDialogById } from '../../state/dialog/dialog.selectors';
import { IGroupMessageTransformed } from '../../model/dialog.model';
import { selectPeopleList, selectUserById } from '../../../core/state/people/people.selectors';
import { selectGroupById } from '../../state/group.selectors';
import { ModalService } from '../../../core/services/modal.service';
import { loadPeopleList } from '../../../core/state/people/people.actions';
import { loadGroupList } from '../../state/group.actions';
import { loadConversationList } from '../../../conversation/state/conversation.actions';

@Component({
  selector: 'app-group',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent implements OnInit {
  protected readonly selectUserById = selectUserById;

  protected readonly selectGroupById = selectGroupById;

  protected readonly ProjectPages = ProjectPages;

  protected groupID: string;

  protected authorUid: string;

  protected chatForm = this.fb.group({
    message: ['', Validators.required],
  });

  protected groupResponse$:
    | Observable<{
        messages: IGroupMessageTransformed[];
        since: number;
      }>
    | undefined;

  constructor(
    private fb: FormBuilder,
    protected store: Store,
    private activatedRoute: ActivatedRoute,
    protected modalService: ModalService
  ) {
    this.authorUid = JSON.parse(localStorage.getItem('userObject')!).uid;
    this.groupID = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  ngOnInit(): void {
    this.synchronizeGroupMessages();

    this.store
      .select(selectPeopleList)
      .pipe(take(1))
      .subscribe((list) => {
        if (list.length === 0) {
          this.store.dispatch(loadPeopleList());
          this.store.dispatch(loadGroupList());
          this.store.dispatch(loadConversationList());
        }
      });
  }

  synchronizeGroupMessages(): void {
    const group$ = this.store.select(selectDialogById({ groupID: this.groupID }));
    group$
      .pipe(
        take(1),
        tap((item) => {
          if (item) {
            this.store.dispatch(loadGroupDialog({ groupID: this.groupID, since: item.since }));
          } else {
            this.store.dispatch(loadGroupDialog({ groupID: this.groupID, since: 0 }));
          }
        })
      )
      .subscribe();
    this.groupResponse$ = group$;
  }

  get message(): AbstractControl {
    return this.chatForm.get('message')!;
  }

  isAuthorMessage(message: IGroupMessageTransformed): string {
    return this.authorUid === message.authorID ? 'author-message' : '';
  }

  onUpdateButtonClick(): void {
    this.synchronizeGroupMessages();
  }

  onSendNewMessageButtonClick(message: string): void {
    this.store.dispatch(sendNewMessage({ newMessage: { groupID: this.groupID, message } }));
    this.chatForm.reset();

    setTimeout(() => {
      this.synchronizeGroupMessages();
    }, 1500);
  }

  onDeleteGroupButtonClick(): void {
    this.modalService.openConfirmationDialog(this.groupID, true);
  }
}
