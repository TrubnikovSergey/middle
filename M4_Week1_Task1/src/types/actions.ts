import { type } from "os";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "./dto/GroupContactsDto";
import { FavoriteContactsDto } from "./dto/FavoriteContactsDto";
export const SET_CONTACTS_LIST = "SET_CONTACTS_LIST";
export const SET_GROUPCONTACTS_LIST = "SET_GROUPCONTACTS_LIST";
export const SET_FAVORITECONTACTS = "SET_FAVORITECONTACTS";

export interface SetContactsListAction {
  type: typeof SET_CONTACTS_LIST;
  payload: ContactDto[];
}
export interface SetGroupContactsAction {
  type: typeof SET_GROUPCONTACTS_LIST;
  payload: GroupContactsDto[];
}
export interface SetFavoriteContactsAction {
  type: typeof SET_FAVORITECONTACTS;
  payload: FavoriteContactsDto;
}

export const createSETContactsListAction = (data: ContactDto[]): SetContactsListAction => {
  return { type: SET_CONTACTS_LIST, payload: data };
};

export const createSETGroupContactsAction = (data: GroupContactsDto[]): SetGroupContactsAction => {
  return { type: SET_GROUPCONTACTS_LIST, payload: data };
};

export const createSETFavoriteContacts = (data: FavoriteContactsDto): SetFavoriteContactsAction => {
  return { type: SET_FAVORITECONTACTS, payload: data };
};

export type ProjectActions = SetContactsListAction | SetGroupContactsAction | SetFavoriteContactsAction;
