import Post from "./Post"

const posts = [

{
    id: '123',
    username: 'Raheem',
    userImg: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
    caption: "This is the caption",
    img: 'https://images.wallpaperscraft.com/image/single/astronaut_art_space_129529_1920x1080.jpg',
},
{
    id: '123',
    username: 'Raheem',
    userImg: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
    caption: "This is the caption",
    img: 'https://images.wallpaperscraft.com/image/single/astronaut_art_space_129529_1920x1080.jpg',
},

];


function Posts() {
    return (
        <div>
        {posts.map((post) => (
            <Post 
            key={post.id} 
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
            />
        ))} 
        </div>

    )
}

export default Posts;
