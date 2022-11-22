import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

export default function SavePost(props) {
  // const API_URL = "http://localhost:8080/api/";
  const API_URL = "https://desolate-hollows-16342.herokuapp.com/api/";
  const { user: User } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [saved, setSaved] = useState(false);
  const [favNumber, setfavNumber] = useState(0);

  useEffect(() => {
    if (!User) {
      navigate("/login");
    }
  }, [User, navigate]);

  const config = {
    headers: {
      Authorization: `Bearer ${User.token}`,
    },
  };

  const variable = {
    _id: props.getCateData._id,
    user: User._id,
    title: props.getCateData.title,
    cateId: props.getCateData.cateId,
    cateName: props.getCateData.cateName,
    files: props.getCateData.files[0].filePath,
  };

  //fav posts length
  const Favlength = async () => {
    await axios
      .post(API_URL + "favoriteNumber", variable, config)
      .then((result) => {
        if (result.data.success) {
          return setfavNumber(result.data.FavNumber);
        } else {
          alert("Failed to get favoriteNumber");
        }
      });
  };

  //checking i already saved or not
  const CheckMySave = async () => {
    await axios.post(API_URL + "checked", variable, config).then((result) => {
      if (result.data.success) {
        return setSaved(result.data.favorited);
      } else {
        alert("Failed to get saved or not");
      }
    });
  };

  useEffect(() => {
    Favlength();
    CheckMySave();
  }, [props.getCateData, User.token]);

  //creating add to favorite
  const CreateFav = async () => {
    await axios.post(API_URL + "addFav", variable, config).then((result) => {
      if (result.data.success) {
        return setSaved(!saved), setfavNumber(favNumber + 1);
      } else {
        alert("Failed to add favorite");
      }
    });
  };

  //removing from favorite db
  const RemoveFav = () => {
    axios.post(API_URL + "removeFav", variable, config).then((result) => {
      if (result.data.success) {
        return setSaved(!saved), setfavNumber(favNumber - 1);
      } else {
        alert("Failed to remove from favorite");
      }
    });
  };

  const addFav = () => {
    if (saved) {
      //when already added
      RemoveFav();
    } else {
      //when not already added
      CreateFav();
    }
  };

  return (
    <>
      <div className="saveItem" onClick={addFav}>
        {saved ? (
          <>
            <i className="uil uil-bookmark filled">Remove from save</i>
            <p>{favNumber} people saved this post</p>
          </>
        ) : (
          <>
            <i className="uil uil-bookmark unfilled">Add to save</i>
            <p>{favNumber} people saved this post</p>
          </>
        )}
      </div>
    </>
  );
}
