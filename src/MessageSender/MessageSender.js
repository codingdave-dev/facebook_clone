import React, {useState} from "react";
import "./MessageSender.css";
import Avatar from "@material-ui/core/Avatar";
import {InsertEmoticon, PhotoLibrary, Videocam} from "@material-ui/icons";
import {useStateValue} from "../store/StateProvider/StateProvider";

import firebase from "firebase";
import db from '../config/firebase'

const MessageSender = () => {
    const [{user}] = useStateValue()
    const [input, setInput] = useState('')
    const [imageURL, setImageURL] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageURL
        })

        setInput('')
        setImageURL('')
    }
  return (
    <div className={"messageSender"}>
      <div className="messageSender_top">
        <Avatar src={user.photoURL} />
          <form action="">
              <input className={'messageSender_input'} placeholder={`What's on your mind, ${user.displayName}?`} value={input} onChange={e => setInput(e.target.value)}/>
              <input placeholder={'image URL (Optional)'} value={imageURL} onChange={e => setImageURL(e.target.value)}/>
              <button onClick={handleSubmit} type={'submit'}>Hidden Submit</button>
          </form>
      </div>
      <div className="messageSender_bottom">
          <div className="messageSender_option">
              <Videocam style={{color: 'red'}}/>
              <h3>Live Video</h3>
          </div>
          <div className="messageSender_option">
              <PhotoLibrary style={{color: 'green'}}/>
              <h3>Photo/Video</h3>
          </div>
          <div className="messageSender_option">
              <InsertEmoticon style={{color: 'orange'}}/>
              <h3>Feeling/Activity</h3>
          </div>
      </div>
    </div>
  );
};

export default MessageSender;
