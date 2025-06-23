import React from "react";
import TableContainer from "../../components/common/TableContainer";

type Props = {};

const Projects = (props: Props) => {
  const actionHandler = (action: any) => alert(action);

  return (
    <div>
      <TableContainer
        columns={[
          {
            title: "Title",
            field: "name",
          },
          {
            title: "Tasks",
            field: "task",
          },
          {
            title: "Created At",
            field: "createdAt",
          },
          {
            title: "Updated At",
            field: "updatedAt",
          },
        ]}
        data={[
          {
            name: "Project-1",
            task: 25,
            createdAt: new Date().toDateString(),
            updatedAt: new Date().toDateString(),
          },
          {
            name: "Project-2",
            task: 34,
            createdAt: new Date().toDateString(),
            updatedAt: new Date().toDateString(),
          },
          {
            name: "Project-1=3",
            task: 45,
            createdAt: new Date().toDateString(),
            updatedAt: new Date().toDateString(),
          },
        ]}
        isShowActionColumn
        actionHandler={actionHandler}
      />
    </div>
  );
};

export default Projects;
