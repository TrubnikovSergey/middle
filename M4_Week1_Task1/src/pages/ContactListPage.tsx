import React, { useEffect } from "react";
import { CommonPageProps } from "./types";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { FilterForm, FilterFormValues } from "src/components/FilterForm";
import { ContactDto } from "../types/dto/ContactDto";
import { FavoriteContactsDto } from "../types/dto/FavoriteContactsDto";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { createSETContactsListAction } from "src/types/actions";
import { favoriteContactsSlice, useGetContactsListQuery } from "../store/slices/contactsSlice";
import { useGetGrooupContactsListQuery } from "src/store/slices/groupContactsSlice";

export const ContactListPage = () => {
  const dispatch = useAppDispatch();
  // const contacts = useAppSelector((state) => state.contactState);
  const { data: contacts } = useGetContactsListQuery();

  useEffect(() => {
    if (contacts) {
      let favorite: FavoriteContactsDto = [];

      for (let i = 0; i < contacts.length; i++) {
        if (i === 4) {
          break;
        }
        const item = contacts[i];

        favorite.push(item.id);
      }

      dispatch(favoriteContactsSlice.actions.setFavoriteContacts(favorite));
    }
  }, [contacts]);

  // const groupContactsState = useAppSelector((state) => state.groupContactsState);
  const { data: groupContactsState } = useGetGrooupContactsListQuery();
  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts: ContactDto[] = contacts || [];

    if (fv.name) {
      const fvName = fv.name.toLowerCase();
      findContacts = findContacts?.filter(({ name }) => name.toLowerCase().indexOf(fvName) > -1);
    }

    if (fv.groupId) {
      const groupContacts = groupContactsState?.find(({ id }) => id === fv.groupId);

      if (groupContacts) {
        findContacts = findContacts?.filter(({ id }) => groupContacts.contactIds.includes(id));
      }
    }

    // setContacts(findContacts);
    dispatch(createSETContactsListAction(findContacts));
  };

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm groupContactsList={groupContactsState ? groupContactsState : []} initialValues={{}} onSubmit={onSubmit} />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {contacts?.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};
