import {Action} from '@ngrx/store';
import {Post} from '../models/post.model';

export const GET_POST = 'Post get';
export const GET_POST_SUCCESS = 'Post get success';
export const VOTE_UPDATE = 'Post Vote';
export const VOTE_SUCCESS = 'Post Vote Success';
export const VOTE_FAIL = 'Post Vote Fail';

export class GetPost implements Action {
  readonly type = GET_POST;
  constructor(public payload: string) { }
}

export class GetPostSuccess implements Action {
  readonly type = GET_POST_SUCCESS;

  constructor(public payload: Post) { }
}

export class VoteUpdate implements Action {
  readonly type = VOTE_UPDATE;

  constructor(public payload: any) { }
}

export class VoteSuccess implements Action {
  readonly type = VOTE_SUCCESS;

  constructor(public payload?: any) { }
}

export class VoteFail implements Action {
  readonly type = VOTE_FAIL;

  constructor(public payload?: any) { }
}

export type All =
  GetPost
  | GetPostSuccess
  | VoteUpdate
  | VoteFail
  | VoteSuccess;
