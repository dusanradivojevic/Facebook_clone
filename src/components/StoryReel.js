import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
        profileSrc="https://www.novosti.rs/data/images/2020-09-02/17687_stanojevic-09-2020-9482-01_f.jpg"
        title="Nikola"
      />
      <Story
        image="https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753"
        profileSrc="https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg"
        title="Ana"
      />
      <Story
        image="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"
        profileSrc="https://avatars2.githubusercontent.com/u/36774184?s=60&v=4"
        title="Dusan"
      />
      <Story
        image="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        profileSrc="https://avatars1.githubusercontent.com/u/36932507?s=460&u=b613fd8d8aaf29b373e9b1353d23faa2c30509d2&v=4"
        title="Milena"
      />
      <Story
        image="https://images.unsplash.com/photo-1535332371349-a5d229f49cb5?ixlib=rb-1.2.1&w=1000&q=80"
        profileSrc="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Nemanja"
      />
    </div>
  );
}

export default StoryReel;
