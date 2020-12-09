import { $CombinedState } from "redux"

export const createList = (list) => {
  return $.ajax({
    url: `/api/lists`,
    method: "POST",
    data: { list },
  });
};

export const updateList = (list) => {
  return $.ajax({
    url: `/api/lists/${list.id}`,
    method: "PATCH",
    data: { list },
  });
};

export const deleteList = (listId) => {
  return $.ajax({
    url: `/api/lists/${listId}`,
    method: "DELETE",
  });
};