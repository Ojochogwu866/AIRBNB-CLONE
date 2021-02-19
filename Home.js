import React from 'react';
import './Home.css';
import Banner from "./Banner";
import Card from "./Card";

function Home() {
    return (
        <div className="home">
            <Banner />  

            <div className="home__section">
            <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family." 
                />
                
                </div>

             
             <div className="home__section">
               <Card 
               src="https://a0.muscache.com/im/pictures/cf34d900-4cf5-4d63-8d31-39ea0cc04d19.jpg?im_w=1200"
               title="Jay Beach Camp" 
               description="Entire Cabin Hosted by Jay Beach" price="$800/night" />
               <Card src="https://a0.muscache.com/im/pictures/6eb013ae-e8e3-49d8-87f9-6b9d8f07cfd2.jpg?im_w=1200"
               title="Seatle Residence in a luxury hotel in Victoria Ireland Lagos"
                description="Entire Charlet Hosted By Your Rentals" price="$1230/night"/>
               <Card src="https://a0.muscache.com/im/pictures/cf6281b6-a44c-47bc-97d3-317c5e4227b8.jpg?im_w=960"
               title="Luxury pent house Unique Architecture Special Home"
               description="Castle Hosted By Fredrick" price="$1200/night"/>    
             </div> 
             <div className="home__section">
               <Card src="https://a0.muscache.com/im/pictures/8646880c-78e2-44ba-a88c-4a50c4ebca5c.jpg?im_w=960"
               title="Arriendo el olmuexe" description="Entire Cottage Hosted By Martin" price="$1000/night"/>
               <Card src="https://a0.muscache.com/im/pictures/b5fb01f5-0daa-4f28-aa12-03d56115b27f.jpg?im_w=720"
               title="Verrels Court"
               description="Entire Charlet In Aburi" price="$670/night"/>
               <Card src="https://a0.muscache.com/im/pictures/59029983/6886c42c_original.jpg?im_w=720"
               title="Entire Apartments hoted in Yaz" description="Cozy room in Beatiful resorts" price="$760/night" />    
             </div> 

        </div>
    )
}

export default Home
