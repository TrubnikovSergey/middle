import React from "react";
import { Col, Row } from "react-bootstrap";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { useGetGrooupContactsListQuery } from "src/store/slices/groupContactsSlice";

export const GroupListPage = () => {
  // const groupContactsState = useAppSelector((state) => state.groupContactsState);
  const { data: groupContactsState } = useGetGrooupContactsListQuery();

  return (
    <Row xxl={4}>
      {groupContactsState?.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
};
