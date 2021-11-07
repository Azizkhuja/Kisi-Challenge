import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Box, Typography, Card, List, CardContent } from "@mui/material";

import kisiApi from "../api";
import LockList from "./LockList";
import PagePagination from "./PagePagination";
import Spinner from "./Spinner";
import EmptyQueue from "./EmptyQueue";

const GroupLists = () => {
  const [groups, setGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState();

  const fetchGroups = (page) => {
    kisiApi.then((client) => {
      client.get(`groups/?offset=${page - 1}&limit=5`).then((groupData) => {
        setGroups(groupData.data);
        setPagination(groupData.pagination);
        setIsLoading(false);
      });
    });
  };

  useEffect(() => {
    fetchGroups(1);
  }, []);

  return (
    <Box mt={2} ml="auto" mr="auto" width={900}>
      <Box mb={2}>
        <Typography variant="h4">Groups</Typography>
        <Typography variant="h7">
          Add members to groups and assign different access rights
        </Typography>
      </Box>
      <Card>
        <CardContent>
          <Box minHeight={300}>
            {isLoading ? (
              <Spinner />
            ) : groups.length > 0 ? (
              <div>
                <div>
                  <List>
                    {groups.map((group) => (
                      <Link to={`/${group.id}`} key={group.id}>
                        <LockList items={group}>{group.name}</LockList>
                      </Link>
                    ))}
                  </List>
                </div>
                <PagePagination
                  pagination={pagination}
                  onChange={(page) => fetchGroups(page)}
                />
              </div>
            ) : (
              <EmptyQueue
                emptyGroup="You haven't added any groups, or you don't have any viewing
                    permissions."
                emptyGroupImg="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAiIGhlaWdodD0iMTYwIiB2aWV3Qm94PSIwIDAgMTYwIDE2MCI+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxyZWN0IHdpZHRoPSIxNjAiIGhlaWdodD0iMTYwIiBmaWxsPSIjRThFREZBIiByeD0iODAiLz4KICAgICAgICA8ZyBzdHJva2U9IiMxMzE4NDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MCA1MikiPgogICAgICAgICAgICA8cGF0aCBkPSJNNDYuNTQ1IDUyLjM2NHYtNS44MTljMC02LjQyNi01LjIxLTExLjYzNi0xMS42MzYtMTEuNjM2SDExLjYzNkM1LjIxIDM0LjkxIDAgNDAuMTIgMCA0Ni41NDV2NS44MTkiLz4KICAgICAgICAgICAgPGNpcmNsZSBjeD0iMjMuMjczIiBjeT0iMTEuNjM2IiByPSIxMS42MzYiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTY0IDUyLjM2NHYtNS44MTljLS4wMDQtNS4zMDItMy41OTMtOS45MzItOC43MjctMTEuMjU4TTgwLjM2NCA1Mi4zNjR2LTUuODE5Yy0uMDA0LTUuMzAyLTMuNTkzLTkuOTMyLTguNzI4LTExLjI1OE00My42MzYuMzc4YzUuMTUgMS4zMTggOC43NSA1Ljk1OCA4Ljc1IDExLjI3MyAwIDUuMzE1LTMuNiA5Ljk1NC04Ljc1IDExLjI3M002MCAuMzc4YzUuMTQ5IDEuMzE4IDguNzUgNS45NTggOC43NSAxMS4yNzMgMCA1LjMxNS0zLjYwMSA5Ljk1NC04Ljc1IDExLjI3MyIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
              />
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default GroupLists;
