import { Action } from "../types/action.type";
import { Issue } from "../types/issue.type";

let bugCounter = 0;

export default function reducer(
  state: Issue[] = [],
  action: Action
) {
  switch (action.type) {
    case "bugAdded":
      return [
        ...state,
        {
          id: ++bugCounter,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case "bugRemoved":
      return state.filter((bug: Issue) => bug.id != action.payload.id);

    case "bugResolved":
      const resolvedBug: any = state.find((bug: Issue) => {
        return bug.id == action.payload.id;
      });

      if (!resolvedBug) return state;

      let rest = state.filter((bug: Issue) => bug.id != action.payload.id);

      const updated = [{ ...resolvedBug, resolved: true }, ...rest];
      return updated;

    default:
      return state;
  }
}
