import { useState } from "react";
import FormInput from "./formInput";
import Select from "react-select";

const EditForm = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    bio: "",
    dob: "",
    gender: "",
    address: "",
  });

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
      id: 5,
      name: "address",
      type: "text",
      placeholder: "address",
      label: "address",
    },
    // {
    //   id: 6,
    //   name: "Boy",
    //   type: "radio",

    //   placeholder: "Boy",
    //   label: "Gender",
    // },
  ];
  // const options = [
  //   {
  //     label: "Boy",
  //     value: "boy",
  //   },
  //   {

  //     label: "Girl",
  //     value: "girl",
  //   },
  //   {

  //     label: "Other",
  //     value: "other",
  //   },
  // ];

  console.log("re-rendered");

  const handleSubmit = (e) => {
    e.preventDefault();
    //   const data = new FormData(e.target)
    //   console.log(Object.fromEntries(data.entries()))
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <div className="editform">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <div className="infoform">
            {/* <div className="firstcol"> */}
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
            {/* <FormInput
              className="smallinput"
              name="username"
              placeholder="username"
              onChange={onChange}
              errorMessage="Username should be 3-16 characters and shouldn't
            include any special character!"
            />

            <FormInput
              className="smallinput"
              name="address"
              placeholder="address"
              onChange={onChange}
            />
            <FormInput
              className="smallinput"
              name="bio"
              placeholder="bio"
              onChange={onChange}
            /> */}
            {/* </div> */}
            {/* <div className="seccol"> */}
            {/* <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              /> */}
            {/* <FormInput
              className="smallinput"
              name="dob"
              placeholder="date of birth"
              onChange={onChange}
              type="date"
            />
            <FormInput
              className="smallinput"
              name="gender"
              placeholder="gender"
              onChange={onChange}
            />
            <FormInput
              className="smallinput"
              name="email"
              placeholder="email"
              onChange={onChange}
            /> */}
            {/* </div> */}
          </div>
        ))}
        {/* <div className="genderchoose">
          <div>
            <span className="gendertitle">Gender</span>
          </div>
          <div className="genderbox">
            <Select
              className="innerboxgender"
              name="Gender"
              placeholder="Gender"
              onChange={onChangeGender}
              options={options}
            />
          </div>
        </div> */}
        <div className="gendertitlediv">
          <span className="gendertitle">Gender</span>
        </div>
        <div className="choosediv">
          <label>Male : </label>
          <input type="radio" name="gender" value="male" onChange={onChange} />
          <label>Female : </label>
          <input
            name="gender"
            value="female"
            onChange={onChange}
            type="radio"
          />
          <label>Other : </label>
          <input type="radio" name="gender" value="other" onChange={onChange} />
        </div>

        <div className="editbuttondiv">
          <button className="editbutton">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
