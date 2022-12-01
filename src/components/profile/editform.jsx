import { useState, useEffect } from "react";
import FormInput from "./formInput";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../features/auth/authSlice";
import Select from "react-select";

const EditForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  // const [userdata, setUserdata] = useState();

  const [values, setValues] = useState({
    username: user.username,
    address: user.address,
    bio: user.bio,
    dob: user.dob,
    gender: user.gender,
    email: user.email,
    profilePicture: user.profilePicture,
  });

  const userToken = JSON.parse(localStorage.getItem("user"));
  //localhost:8080/api/users/
  console.log("user token is", userToken.token);

  // useEffect(() => {
  //   const details = async () => {
  //     const reqdata = await fetch(
  //       `http://localhost:8080/api/users/detail/${user._id}`
  //     );
  //     const res = await reqdata.json(); // JSON.parse(json);
  //     console.log("user data  res is ", res);
  //     return res;
  //   };
  //   details().then((data) => {
  //     setUserdata(data);
  //     setValues({
  //       username: data.username,
  //       address: data.address,
  //       bio: data.bio,
  //       dob: data.dob,
  //       gender: data.gender,
  //       email: data.email,
  //       profilePicture: data.profilePicture,
  //     });
  //   });
  // }, [user._id]);

  console.log("value is", values);
  const inputs = [
    {
      id: 1,
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
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage: "It should be a vaild email address!",
      label: "email",
      required: true,
    },

    {
      id: 3,
      name: "bio",
      type: "text",
      placeholder: "Bio",
      label: "bio",
    },
    {
      id: 4,
      name: "dob",
      type: "date",
      placeholder: "Date of birth",
      label: "Birthday",
    },
    {
      id: 6,
      name: "address",
      type: "text",
      placeholder: "address",
      label: "address",
    },
    // {
    //   id: 7,
    //   name: "profilePicture",
    //   type: "file",
    //   placeholder: "profileImg",
    //   errorMessage: "please fill profile image",
    //   label: "Profile img",
    // },
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

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const updateBtn = async (e) => {
    // e.preventDefault();
    const formData = new FormData();
    formData.append("id", user._id);
    formData.append("username", values.username);
    formData.append("email", values.email);
    formData.append("bio", values.bio);
    formData.append("dob", values.dob);
    formData.append("gender", values.gender);
    formData.append("address", values.address);
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
      <form onSubmit={handleSubmit} className="formedit">
        <div className="formdiv">
          <div className=" userimgdiv">
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
        </div>
        {inputs.map((input) => (
          <div className="infoform">
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          </div>
        ))}
        <div className="gendertitlediv">
          <span className="gendertitle">Gender</span>
        </div>
        <div className="choosediv">
          <label>Male : </label>
          <input
            type="radio"
            name="gender"
            checked={values.gender === "male" ? true : false}
            value="male"
            onChange={onChange}
          />
          <label>Female : </label>
          <input
            name="gender"
            value="female"
            checked={values.gender === "female" ? true : false}
            onChange={onChange}
            type="radio"
          />
          <label>Other : </label>
          <input
            type="radio"
            name="gender"
            checked={values.gender === "other" ? true : false}
            value="other"
            onChange={onChange}
          />
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

export default EditForm;
