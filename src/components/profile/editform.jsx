import { useState } from "react";
import FormInput from "./formInput";

const EditForm = () => {
  const [values, setValues] = useState({
    username: "",
    address: "",
    bio: "",
    dob: "",
    phone: "",
    email: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      errorMessage:
      "Username should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
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
      name: "phone",
      type: "number",
      placeholder: "phone",
      label: "phone",
    },
    {
      id: 6,
      name: "address",
      type: "text",
      placeholder: "address",
      label: "address",
    },
  ];

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
        <div className="editbuttondiv">
          <button className="editbutton">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
