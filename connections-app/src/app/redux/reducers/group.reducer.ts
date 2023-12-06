import { createReducer, on } from '@ngrx/store';
import { IGroupItemTransformed } from '../../core/models/group.model';
import {
  createGroupSuccess,
  deleteGroupSuccess,
  loadGroupListHttpSuccess,
  loadGroupListStore,
} from '../actions/group.actions';

export interface GroupState {
  groupList: IGroupItemTransformed[];
}

export const initialGroupState: GroupState = {
  groupList: [],
};

export const groupReducer = createReducer(
  initialGroupState,
  on(loadGroupListHttpSuccess, (state, { groupList }): GroupState => ({ ...state, groupList })),
  on(loadGroupListStore, (state): GroupState => ({ ...state })),
  on(deleteGroupSuccess, (state, { id }): GroupState => {
    return { ...state, groupList: state.groupList.filter((item) => item.id !== id) };
  }),
  on(createGroupSuccess, (state, { id, name }): GroupState => {
    const newGroup: IGroupItemTransformed = {
      id,
      name,
      createdAt: '',
      createdBy: JSON.parse(localStorage.getItem('userObject') as string).uid,
    };
    return {
      ...state,
      groupList: [...state.groupList, newGroup],
    };
  })
);
