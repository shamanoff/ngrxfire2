import * as PostAction from '../actions/post.actions';
import {Post} from '../models/post.model';

export type Action = PostAction.All;

export function postReducer(state: Post, action: Action) {

  switch (action.type) {
    case PostAction.GET_POST:
      return {...state, loading: true};

    case PostAction.GET_POST_SUCCESS:
      return {...state, ...action.payload, loading: false};

    case PostAction.VOTE_UPDATE:
      return {...state, ...action.payload, loading: true};

    case PostAction.VOTE_SUCCESS:
      return {...state, loading: false};

    case PostAction.VOTE_FAIL:
      return {...state, ...action.payload, loading: false};

    default:
      return state;
  }
}
