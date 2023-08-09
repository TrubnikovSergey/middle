import React, { FC, memo, useEffect, useState } from "react";
import { CommonPageProps } from "./types";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { ContactDto } from "src/types/dto/ContactDto";
import { useAppSelector } from "src/store/hooks";
import { useGetContactsListQuery } from "src/store/slices/contactsSlice";

export const FavoritListPage: FC = () => {
  const [contacts, setContacts] = useState<ContactDto[]>([]);
  // const contactsState = useAppSelector((state) => state.contactState);
  const { data: contactsState } = useGetContactsListQuery();
  const favoriteList = useAppSelector((state) => {
    return state.favoriteContactsState.entities;
  });

  useEffect(() => {
    if (contactsState) {
      setContacts(() => contactsState.filter(({ id }) => favoriteList.includes(id)));
    }
  }, [contactsState, favoriteList]);
  return (
    <Row xxl={4} className="g-4">
      {contacts.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
};
