import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GroupService } from '../../services/group.service';
import { loadGroupList, loadGroupListDirectHttp } from '../../../redux/actions/group.actions';
import { selectGroupList } from '../../../redux/selectors/group.selectors';
import { ProjectPages } from '../../../../environment/environment';
import { ModalService } from '../../services/modal.service';
import { selectPeopleList } from '../../../redux/selectors/people.selectors';
import { loadPeopleList, loadPeopleListDirectHttp } from '../../../redux/actions/people.actions';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  protected userUid = JSON.parse(localStorage.getItem('userObject') as string).uid;

  protected readonly selectGroupList = selectGroupList;

  protected readonly selectPeopleList = selectPeopleList;

  protected readonly ProjectPages = ProjectPages;

  constructor(
    protected store: Store,
    protected groupService: GroupService,
    protected modalService: ModalService,
    protected peopleService: PeopleService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadGroupList());
    this.store.dispatch(loadPeopleList());
  }

  onUpdateButtonClick(): void {
    this.store.dispatch(loadGroupListDirectHttp());
    this.groupService.isExceptionSubject.next(true);
  }

  onDeleteGroupButtonClick(id: string): void {
    this.modalService.openConfirmationDialog(id);
  }

  onCreateGroupButtonClick(): void {
    this.modalService.openCreateGroupDialog();
  }

  onUpdatePeopleListButtonClick(): void {
    this.store.dispatch(loadPeopleListDirectHttp());
    this.peopleService.isExceptionSubject.next(true);
  }
}
