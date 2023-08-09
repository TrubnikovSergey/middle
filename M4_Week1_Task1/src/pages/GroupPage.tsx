import React, { memo, useEffect, useState } from "react";
import { CommonPageProps } from "./types";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { Empty } from "src/components/Empty";
import { ContactCard } from "src/components/ContactCard";
import { useAppSelector } from "src/store/hooks";
import { useGetGrooupContactsListQuery } from "src/store/slices/groupContactsSlice";
import { useGetContactsListQuery } from "src/store/slices/contactsSlice";

export const GroupPage = () => {
  const { groupId } = useParams<{ groupId: string }>();
  const [contacts, setContacts] = useState<ContactDto[]>([]);
  const [groupContacts, setGroupContacts] = useState<GroupContactsDto>();
  // const groupContactsState = useAppSelector((state) => state.groupContactsState);
  // const contactsState = useAppSelector((state) => state.contactState);
  const { data: groupContactsState } = useGetGrooupContactsListQuery();
  const { data: contactsState } = useGetContactsListQuery();

  useEffect(() => {
    const findGroup = groupContactsState?.find(({ id }) => id === groupId);
    setGroupContacts(findGroup);
    setContacts(() => {
      if (contactsState) {
        if (findGroup) {
          return contactsState.filter(({ id }) => findGroup.contactIds.includes(id));
        }
      }
      return [];
    });
  }, [groupId]);

  return (
    <Row className="g-4">
      {groupContacts ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                <GroupContactsCard groupContacts={groupContacts} />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className="g-4">
              {contacts.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))}
            </Row>
          </Col>
        </>
      ) : (
        <Empty />
      )}
    </Row>
  );
};
