import React, { memo } from "react";
import { CommonPageProps } from "./types";
import { Col, Row } from "react-bootstrap";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { useAppSelector } from "src/store/hooks";

export const GroupListPage = () => {
  const groupContactsState = useAppSelector((state) => state.groupContactsState);

  return (
    <Row xxl={4}>
      {groupContactsState.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
};
