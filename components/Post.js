import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, collectionGroup, getDocs} from "@firebase/firestore";

import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
    DotsHorizontalIcon,
    ChatIcon,
    BookmarkIcon,
    EmojiHappyIcon,
} from "@heroicons/react/outline";

import {HeartIcon as HeartIconFilled} from "@heroicons/react/solid"
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { db } from "../firebase";


function Post({ id, username, userImg, img, caption }) {
    const {data: session } = useSession();
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    
    // useEffect(async () => {
    //     const allPosts = collectionGroup(db, "posts", id, "comments")
    //     const collection_query = query(allPosts, orderBy("timestamp", "desc"));
    //     // setComments(collection.docs)
    //     console.log(allPosts);
    // }, []);
    
    useEffect(() => {
        db.collection("posts")
          .orderBy("text", "asc")
          .onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => doc.data()))
          );
      }, []);
    const sendComment = async (e) => {
        e.preventDefault();

        const commentToSend = comment; 
        setComment("");

        await addDoc(collection(db, 'posts', id, 'comments'), {
        comment: commentToSend,
        username: session.user.username,
        userImage: session.user.image,
        Timestamp: serverTimestamp(),
    });

};

    return (
        <div className="bg-white my-7 border-rounded-sm">
            <div className="flex items-center p-5">
                <img className="rounded-full h-12 w-12 object-contain-border p-1 mr-3" 
                src={userImg} alt="" />
                <p className="flex-1 font-bold">{username}</p>
                <DotsHorizontalIcon className="h-5"/>
            </div>

            <img src={img} className="object-cover w-full" alt=""/>

                {session && (


                    <div className="flex justify-between px-4 pt-4 pb-4">
                    <div className="flex space-x-4">
                    <HeartIcon className="btn"/>
                    <ChatIcon className="btn" />
                    <PaperAirplaneIcon className="btn"/>
                    </div>
    
                    <BookmarkIcon className="btn"/>
                    </div>

                )}
                

            <p className="p-5 truncate">
                <span className="font-bold mr-1">{username}</span>
                {caption}
            </p>


            {comments.length > 0 && (
                <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
                    {comments.map((comment) => (
                        <div key={comment.id} className="flex items-center space-x-2 mb-3">
                            <img className="h-7 rounded-full" src={comment.data().userImage} alt="" />
                            
                        </div>
                        
                    ))}
                    <p>Good</p>
                </div>
                
            )}


                        {session && (

            <form className="flex items-center p-4">
                <EmojiHappyIcon className="h-7"/>
                <input 
                type="text"
                value={comment}
                onChange={e => setComment(e.target.value)}
                placeholder="Add A Comment..."
                className="border-none flex-1 focus:ring-0 outline-none"/>
                <button type ='submit' 
                disabled={!comment.trim()} 
                onClick={sendComment}
                className="font-semibold text-blue-400">
                    Post
                    </button>
            </form>

                        )}



        </div>
    )

}
export default Post
