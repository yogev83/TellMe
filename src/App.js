import React from "react";
import { Header } from "./header/header";
import { LecturePage } from "./pages/lecture/lecturePage";
import { Lobby } from "./pages/lobby/lobby";
import { getQueryParam, setQueryParams } from "./utils";
import "./styles.css";
import { UserAccountPage } from "./pages/userAccount/userAcountPage";
import { UserContext } from "./context/userContext";
import { DbContext } from "./context/bdContext";
import { fetchSessionData } from "./service";
//import userEvent from "@testing-library/user-event";
import { MyAccount } from "./pages/myAccount/myAccountPage";

export default function App({ db }) {
  const [filter, setFilter] = React.useState([]);
  const onFilterChange = React.useCallback(
    (e) => {
      const values = e.target.value.split(",");
      setFilter(values.map((s) => s.trim()));
    },
    [setFilter]
  );

  const [user, setUser] = React.useState({});

  const openLecture = (id) => {
    setQueryParams({ page: "lecture", lecture: id });
  };

  const openSignIn = () => {
    setQueryParams({ page: "signIn" });
  };

  const openMyAccount = () => {
    setQueryParams({ page: "myAccount" });
  };

  const pageElement = React.useMemo(() => {
    const page = getQueryParam("page");
    switch (page) {
      case "lobby":
        return <Lobby filter={filter} openLecture={openLecture} />;
      case "lecture":
        return <LecturePage id={getQueryParam("id")} />;
      case "signIn":
        return <UserAccountPage></UserAccountPage>;
      case "myAccount":
        return <MyAccount></MyAccount>;
      default:
        return <Lobby filter={filter} openLecture={openLecture} />;
    }
  }, [filter]);

  React.useEffect(() => {
    const callFetchSessionData = async () => {
      const token = sessionStorage.getItem("token");
      if (token) {
        let data = await fetchSessionData(token);
        setUser(data.user);
      }
    };
    callFetchSessionData();
  }, []);

  return (
    <DbContext.Provider value={db}>
      <UserContext.Provider value={{ user, setUser }}>
        <Header
          onFilterChange={onFilterChange}
          openSignIn={openSignIn}
          openMyAccount={openMyAccount}
        />
        {pageElement}
      </UserContext.Provider>
    </DbContext.Provider>
  );
}
