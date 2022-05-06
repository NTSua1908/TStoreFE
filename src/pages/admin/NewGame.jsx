import React, { useState, useEffect, useRef } from "react";
import Editor from "../../components/editor/Editor";
import Navbar from "../../components/navbar_admin/Navbar";
import Siderbar from "../../components/siderbar/Siderbar";
import "./newgame.scss";

const user = {
  name: "Nguyen Thien Sua",
  avatar: "https://demoda.vn/wp-content/uploads/2022/03/avatar-nam.jpg",
};

function NewGame(props) {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const containerRef = useRef();
  const sliderRef = useRef();

  const handleActiveMenu = () => {
    containerRef.current.classList.toggle("active");
    sliderRef.current.active();
    console.log("Active");
  };

  return (
    <div className="newgame">
      <Siderbar ref={sliderRef} active={3} />
      <div className="newgame__container" ref={containerRef}>
        <Navbar handleActiveMenu={handleActiveMenu} user={user} />
        <Editor
        // name="description"
        // onChange={(data) => {
        //   setData(data);
        // }}
        // editorLoaded={editorLoaded}
        />
        {JSON.stringify(data)}
      </div>
    </div>
  );
}

export default NewGame;
