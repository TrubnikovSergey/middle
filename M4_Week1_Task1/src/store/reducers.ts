import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";
import { ContactDto } from "src/types/dto/ContactDto";
import { AnyAction } from "redux";
import { SET_CONTACTS_LIST, SET_FAVORITECONTACTS, SET_GROUPCONTACTS_LIST, SetContactsListAction, SetFavoriteContactsAction, SetGroupContactsAction } from "../types/actions";
import { DATA_CONTACT, DATA_GROUP_CONTACT } from "../__data__";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const contactsListReducer = (state: ContactDto[] = DATA_CONTACT, action: SetContactsListAction): ContactDto[] => {
  switch (action.type) {
    case SET_CONTACTS_LIST:
      return [...action.payload];

    default:
      break;
  }

  return state;
};

export const groupContactsReducer = (state: GroupContactsDto[] = DATA_GROUP_CONTACT, action: SetGroupContactsAction): GroupContactsDto[] => {
  switch (action.type) {
    case SET_GROUPCONTACTS_LIST:
      return [...action.payload];

    default:
      break;
  }

  return state;
};

const initDataFavorite = [DATA_CONTACT[0].id, DATA_CONTACT[1].id, DATA_CONTACT[2].id, DATA_CONTACT[3].id];
export const favoriteContactsReducer = (state: FavoriteContactsDto = initDataFavorite, action: SetFavoriteContactsAction): FavoriteContactsDto => {
  switch (action.type) {
    case SET_FAVORITECONTACTS:
      return [...action.payload];

    default:
      break;
  }

  return state;
};
