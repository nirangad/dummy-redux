import { ActionType } from "../types/action.type";
import { IssueType } from "../types/issue.type";
import * as actions from './actions'

let bugCounter = 0;

export default function reducer(
  state: IssueType[] = [],
  action: ActionType
) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++bugCounter,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case actions.BUG_REMOVED:
      return state.filter((bug: IssueType) => bug.id != action.payload.id);

    case actions.BUG_RESOLVED:
      const resolvedBug: any = state.find((bug: IssueType) => {
        return bug.id == action.payload.id;
      });

      if (!resolvedBug) return state;

      let rest = state.filter((bug: IssueType) => bug.id != action.payload.id);

      const updated = [{ ...resolvedBug, resolved: true }, ...rest];
      return updated;

    default:
      return state;
  }
}
