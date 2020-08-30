import React, {useEffect, useState} from 'react';
import './Feed.css'
import StoryReel from "../StoryReel/StoryReel";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../Post/Post";
import db from '../config/firebase'

const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => (
            setPosts(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
        ))
    }, [])
    return (
        <div className={'feed'}>
            <StoryReel/>
            <MessageSender/>

            {posts.map(post => (
                <Post
                    key={post.id}
                    username={post.data.username}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    image={post.data.image}
                    timestamp={post.data.timestamp}
                />
            ))}

            {/*<Post profilePic={'https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg'} message={'This is the message'} timestamp={'This is a timestamp...'} username={'daveyEvans'} image={'https://miro.medium.com/max/12032/0*__5nhm_2qHSrTVoZ'}/>*/}

        </div>
    );
};

export default Feed;