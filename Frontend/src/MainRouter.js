import React, { useRef, useEffect } from "react";
import {
  Switch,
  Route,
  Redirect,
  useLocation,
  withRouter,
} from "react-router-dom";
import Fullscreen from "react-full-screen";
import { Helmet } from "react-helmet";

// Pages
import Header from "./pages/Sections/Header";
import Sidebar from "./pages/Sections/Sidebar";
import Dashboard from "./pages/Dashboard";
import Chart from "./pages/Chart";
import SellerTable from "./pages/SellerTable";
import StickerSheet from "./pages/UdiManagement/StickerSheet";
import ImplantCard from "./pages/UdiManagement/ImplantCard";
import Education from "./pages/UdiManagement/Education";
import Admin from "./pages/Admin";
import TeamChat from "./pages/TeamChat";
import Kanban from "./pages/Kanban";

const MainRouter = (props) => {
  const [pageTitle] = React.useState("Udi Compliance");
  const [showMenu, setShowMenu] = React.useState(false);
  const [fullSceen, setFullSceen] = React.useState(false);
  const [roleId, setRoleId] = React.useState(0);

  let location = useLocation();
  const mainRef = useRef(null);

  useEffect(() => {
    if (!localStorage.getItem("access_token")) props.history.push("/login");
    else
      setRoleId(
        localStorage.getItem("roleId") ? localStorage.getItem("roleId") : 1
      );
  }, [location, props.history]);

  let mainClassName = "main__headerwithcontent";

  return (
    <Fullscreen
      enabled={fullSceen}
      onChange={(isFull) => {
        setFullSceen(isFull);
        if (mainRef) mainRef.current.focus();
        let presentaionContainer = mainRef.current.querySelector(".slideBox");
        if (presentaionContainer) {
          presentaionContainer.style.height = isFull ? "100vh" : null;
        }
      }}
    >
      <div className="main">
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
        <Sidebar
          fullSceen={fullSceen}
          setShowMenu={setShowMenu}
          showMenu={showMenu}
          setFullSceen={setFullSceen}
          roleId={roleId}
        />
        <div className={mainClassName}>
          <Header
            setShowMenu={setShowMenu}
            showMenu={showMenu}
            fullSceen={fullSceen}
            setFullSceen={setFullSceen}
          />
          <main className="main__content">
            <Switch>
              <Redirect from="/" to="/dashboard" exact />
              <Route path="/dashboard" component={Dashboard} />

              <Route path="/processing/seller-table" component={SellerTable} />
              <Route path="/processing/chart" component={Chart} />

              <Route
                path="/udi-management/sticker-sheet"
                component={StickerSheet}
              />
              <Route
                path="/udi-management/implant-card"
                component={ImplantCard}
              />
              <Route path="/udi-management/education" component={Education} />

              <Route path="/team-chat" component={TeamChat} />
              <Route path="/kanban" component={Kanban} />
              <Route path="/admin" component={Admin} roleId={roleId} />
            </Switch>
          </main>
        </div>
      </div>
    </Fullscreen>
  );
};

export default withRouter(MainRouter);
