import React, { FC, memo, useEffect, useState } from "react";
import { CommonPageProps } from "./types";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { ContactDto } from "src/types/dto/ContactDto";
import { useAppSelector } from "src/store/hooks";

export const FavoritListPage: FC = () => {
  const [contacts, setContacts] = useState<ContactDto[]>([]);
  const contactsState = useAppSelector((state) => state.contactState);
  const favoriteContactsState = useAppSelector((state) => state.favoriteContactsState);

  useEffect(() => {
    setContacts(() => contactsState.filter(({ id }) => favoriteContactsState.includes(id)));
  }, [contactsState, favoriteContactsState]);
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
