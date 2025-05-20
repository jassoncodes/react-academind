import { formattedDate, newId } from "../utils";

export const SAMPLE_DATA = [
  {
    id: newId(),
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut exercitationem et. Iusto, reprehenderit facilis tenetur impedit, illum itaque eaque beatae quae officia consequatur sint, soluta porro voluptatibus quasi consectetur.",
    dueDate: formattedDate(new Date()),
    createdAt: formattedDate(new Date()),
    tasks: [
      {
        id: newId(),
        taskDescription: "task 1",
      },
      {
        id: newId(),
        taskDescription: "task 2",
      },
      {
        id: newId(),
        taskDescription: "task 3",
      },
      {
        id: newId(),
        taskDescription: "task 1",
      },
      {
        id: newId(),
        taskDescription: "task 2",
      },
      {
        id: newId(),
        taskDescription: "task 3",
      },
      {
        id: newId(),
        taskDescription: "task 1",
      },
      {
        id: newId(),
        taskDescription: "task 2",
      },
      {
        id: newId(),
        taskDescription: "task 3",
      },
      {
        id: newId(),
        taskDescription: "task 1",
      },
      {
        id: newId(),
        taskDescription: "task 2",
      },
      {
        id: newId(),
        taskDescription: "task 3",
      },
      {
        id: newId(),
        taskDescription: "task 1",
      },
      {
        id: newId(),
        taskDescription: "task 2",
      },
      {
        id: newId(),
        taskDescription: "task 3",
      },
    ],
  },
  {
    id: newId(),
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut exercitationem et. Iusto, reprehenderit facilis tenetur impedit, illum itaque eaque beatae quae officia consequatur sint, soluta porro voluptatibus quasi consectetur.",
    dueDate: formattedDate(new Date()),
    createdAt: formattedDate(new Date()),
    tasks: [
      {
        id: newId(),
        taskDescription: "task 1",
      },
      {
        id: newId(),
        taskDescription: "task 2",
      },
      {
        id: newId(),
        taskDescription: "task 3",
      },
    ],
  },
];
