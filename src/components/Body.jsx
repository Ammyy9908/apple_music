import React from 'react'
import "./Body.css"
import Container from './Container'
import Player from './Player'
import PickCard from './PickCard'
function Body() {

    const [leftBlur,setLeftBlur] = React.useState(false);
    const [rightBlur,setRightBlur] = React.useState(false);

    const pick_data = [
        {
            id:1,
            title:"Featuring Mankirt Aulakh",
            cover:{
                type:"image",
                source:"https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/d9/bc/fc/d9bcfcfe-4ef1-dfb5-8140-e2d74504b90b/8902633306851.jpg/300x300AM.RSMAAF01.webp?imgRightAlbum=Music125%2Fv4%2F7a%2F26%2Fcf%2F7a26cf63-0867-e5b3-8013-63137e9d9790%2F8902633323407.jpg&imgLeft=Features115%2Fv4%2Fce%2F21%2F13%2Fce211315-dc6b-7d78-7c3c-0d8c4b90556f%2Fmza_7354487753015500845.png"
            },
            isStation:true,
            meta:{
                name:"Mankirt Aulakh & Similar Artists",
                artists:null,
                year:null
            }
        },
        
        {
            id:2,
            title:"Featuring LSD",
            cover:{
                type:"image",
                source:"https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/cd/b1/7d/cdb17dc5-53f9-8f39-3b7e-92e632482663/mzl.tubuoqip.jpg/300x300SC.FPESS02.webp?l=en-GB"
            },
            isStation:false,
            meta:{
                name:"LSD Essentials",
                artists:["Three 21st-Century electro masters"],
                year:"2021"
            }
        },
        {
            id:3,
            title:"Featuring Arijit Singh",
            cover:{
                type:"image",
                source:"https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/e1/e9/56/e1e956fc-919e-b2c9-924d-a8b54be35d3c/pr_source.png/300x300SC.FPESS02.webp?l=en-GB"
            },
            isStation:false,
            meta:{
                name:"Arijit Singh Essentials",
                artists:["Bollywood's latest playback star seduces a new generation with his husky voice."],
                year:null
            }
        },

        {
            id:4,
            title:"Made for You",
            cover:{
                type:"image",
                source:"https://is5-ssl.mzstatic.com/image/thumb/Features124/v4/7b/1d/f0/7b1df048-0017-8ac0-98c9-735f14849606/mza_7507996640781423701.png/300x300cc.webp"
            },
            isStation:true,
            meta:{
                name:"Sumit Kumar's Station",
                artists:null,
                year:null
            }
        },

        {
            id:5,
            title:"Featuring Amrinder Gill",
            cover:{
                type:"image",
                source:"https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/4e/92/b8/4e92b86f-9a94-8eee-6486-84ebaff45c48/mzl.tylsawxb.jpg/300x300AM.RSMA01.webp?imgLeft=Features115%2Fv4%2F56%2F53%2F11%2F56531190-e520-5035-6a9a-e1104d9785d1%2Fpr_source.png&imgRight=Features125%2Fv4%2F00%2Fc9%2Faa%2F00c9aad8-fd87-4541-42c8-38c708fb7cfe%2Fpr_source.png"
            },
            isStation:true,
            meta:{
                name:"Amrinder Gill & Similar Artists",
                artists:null,
                year:null
            }
        },

    ]

    const handleScroll = (e)=>{
        console.log(e.target.scrollLeft)
        const scroll = e.target.scrollLeft;
        if(scroll>0){
            setLeftBlur(true);
            setRightBlur(true);
        }
        else{
            setLeftBlur(false);
            setRightBlur(false);
        }
    }
    return (
        <div className="body">
            <Player/>
            <Container>
                <div className="body_header">
                    <h2>Listen Now</h2>
                    <div className="user__avatar">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50" alt="" />
                    </div>
                </div>
               
                   <div className="top-pick-section">
                       <h4>Top Picks</h4>
                       {leftBlur && <div className="blur_left"></div>}
                       <div className="top-pick-cards" onScroll={handleScroll}>
                           
                           {
                               pick_data.map((pick_card,i)=><PickCard title={pick_card.title} cover={pick_card.cover} name={pick_card.meta.name} artists={pick_card.meta.artists} year={pick_card.meta.year} key={i} is_station={pick_card.isStation}/>)
                           }
                       </div>
                       {rightBlur && <div className="blur_right"></div>}
                   </div>
            </Container>
        </div>
    )
}

export default Body
