import { setQueryParams } from "../utils";

export const goHome = () => {
  setQueryParams({ page: "lobby" });
};
