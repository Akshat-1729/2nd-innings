import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Content from "../../components/content/Content";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Content/>
        <Rightbar/>
      </div>
    </>
  );
}