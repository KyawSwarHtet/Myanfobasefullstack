import EditForm from "../../components/profile/editform";
import EditProfile from "../../components/profile/editprofile";
import "./usersedit.css"



export default function UsereditForm() {
  return (
    <>
      <div className="editprofilepage">
        <EditProfile />
        <EditForm />
      </div>
    </>
  );
}
