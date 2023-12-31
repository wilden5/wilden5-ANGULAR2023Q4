import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RootState } from '../../../core/state/root.state';

export const selectRootState = createFeatureSelector<RootState>('dialogList');

export const selectDialogList = createSelector(selectRootState, (state) => state.dialogList);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const selectDialogById = (props: { groupID: string }) =>
  createSelector(selectDialogList, (dialogList) => dialogList[props.groupID]);
