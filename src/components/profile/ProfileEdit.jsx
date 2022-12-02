import { useState, useEffect } from "react";
import FormInput from "./formInput";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../features/auth/authSlice";
import Select from "react-select";
import { useRef } from "react";

const ProfileEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  // const [userdata, setUserdata] = useState();

  const [values, setValues] = useState({
    profilePicture: user.profilePicture,
  });

  const usernameRef = useRef(user.username);
  const addressRef = useRef(user.address);
  const bioRef = useRef(user.bio);
  const dobRef = useRef(user.dob);
  const emailRef = useRef(user.email);
  const genderRef = useRef(user.gender);

  const userToken = JSON.parse(localStorage.getItem("user"));
  //localhost:8080/api/users/
  console.log("user token is", userToken.token);

  console.log("value is", values);
  const inputs = [
    {
      id: 1,
      ref: usernameRef,
      name: "username",
      type: "text",
      placeholder: "username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[a-zA-Z0-9 ]{3,16}$",
      label: "Username",
      required: true,
    },
    {
      id: 2,
      ref: emailRef,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage: "It should be a vaild email address!",
      label: "email",
      required: true,
    },

    {
      id: 3,
      ref: bioRef,
      name: "bio",
      type: "text",
      placeholder: "Bio",
      label: "bio",
    },
    {
      id: 4,
      name: "dob",
      ref: dobRef,
      type: "date",
      placeholder: "Date of birth",
      label: "Birthday",
    },
    {
      id: 6,
      ref: addressRef,
      name: "address",
      type: "text",
      placeholder: "address",
      label: "address",
    },
  ];
  const onChangeImg = (e) => {
    e.preventDefault();
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.files,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //   const data = new FormData(e.target)
    //   console.log(Object.fromEntries(data.entries()))
  };

  //   const onChange = (e) => {
  //     setValues({ ...values, [e.target.name]: e.target.value });
  //   };

  const updateBtn = async (e) => {
    // e.preventDefault();
    const formData = new FormData();
    formData.append("id", user._id);
    formData.append("username", usernameRef.current.value);
    formData.append("email", emailRef.current.value);
    formData.append("bio", bioRef.current.value);
    formData.append("dob", dobRef.current.value);
    formData.append("gender", genderRef.current.value);
    formData.append("address", addressRef.current.value);
    formData.append("token", userToken.token);
    for (let i = 0; i < values.profilePicture.length; i++) {
      formData.append("files", values.profilePicture[i]);
      console.log(
        "input file wihtin after formdata is",
        values.profilePicture[i]
      );
    }
    // const resultData = Object.fromEntries(formData.entries(id));
    // console.log("form data transform is", resultData.id);

    dispatch(updateUser(formData)).then(() => navigate("/profile"));
  };

  return (
    <div className="editform">
      <h3 className="editTitle">Edit your profile</h3>
      <form onSubmit={handleSubmit}>
        <div className="formdiv">
          <div className="userimgdiv">
            {user.profilePicture === [] || user.profilePicture.length === 0 ? (
              <img
                className="userimage"
                src="./images/userprofile/defaultuserprofile.png"
                alt=""
              />
            ) : (
              <img
                className="userimage"
                src={user.profilePicture[0].filePath}
                // src={`https://desolate-hollows-16342.herokuapp.com/${user.profilePicture[0].filePath}`}
                // src={`http://localhost:8080/${user.profilePicture[0].filePath}`}
                alt=""
              />
            )}
          </div>
          <input
            className="formInput"
            name="profilePicture"
            type="file"
            onChange={onChangeImg}
          />
          {console.log("user ref dat is", usernameRef.current)}
        </div>
        {inputs.map((input) => (
          <div className="infoform">
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              ref={input.ref}
              //   onChange={onChange}
            />
          </div>
        ))}
        <div className="gendertitlediv">
          <span className="gendertitle">Gender</span>
        </div>
        <div className="choosediv">
          <label>Male : </label>
          <input type="radio" name="gender" value="male" ref={genderRef} />
          <label>Female : </label>
          <input name="gender" value="female" ref={genderRef} type="radio" />
          <label>Other : </label>
          <input type="radio" name="gender" value="other" ref={genderRef} />
        </div>

        <div className="editbuttondiv">
          <button className="editbutton" onClick={updateBtn}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;
