import React from 'react'
import "./Body.css"
import Container from './Container'
import Player from './Player'
import PickCard from './PickCard'
import MusicCard from './MusicCard'
import MoodCard from './MoodCard'
import { connect } from 'react-redux'
import {Link} from "react-router-dom"
function Body({recentPlayed,user,setLyrics,is_lyric,setLyric,new_releases}) {


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


   

    const made_for_you = [
        {
            id:1,
            cover:"https://is3-ssl.mzstatic.com/image/thumb/Video114/v4/ce/29/03/ce29031d-112d-f099-c1ef-4550e65871c6/Jobcfe7d6fb-b86e-49f3-851f-20bb5d99b8a6-107559482-PreviewImage_preview_image_nonvideo_sdr-Time1601338643510.png/600x600cc-60.jpg",
            artists:["KR$NA", "AFKAP", "Ritviz", "The Local Train", "Akhil", "Prateek Kuhad", "Sumit Goswami", "Prem Dhillon", "Ammy Virk", "Arijit Singh", "Shankar-Ehsaan-Loy", "Ankur Tewari"]
        },
        {
            id:2,
            cover:"https://is4-ssl.mzstatic.com/image/thumb/Video124/v4/48/97/9d/48979da3-59bd-395f-dc16-886e874f1fb6/Job28cc60e1-03f4-4a27-8f92-a83335bbeb34-107559151-PreviewImage_preview_image_nonvideo_sdr-Time1601334227455.png/600x600cc-60.jpg",
            artists:["Jass Manak", "Maninder Buttar", "Gulzaar Chhaniwala", "Millind Gaba", "Simar Doraha", "Ranveer Singh", "Diljit Dosanjh", "Masoom Sharma", "Bilal Saeed", "Bass Yogi", "Kabir Cafe", "G. Sidhu"]
        },
        {
            id:3,
            cover:"https://is5-ssl.mzstatic.com/image/thumb/Video114/v4/18/d3/b1/18d3b126-0a91-b112-e2fd-e8b6dcb9c238/Jobdefb94c2-6e80-4206-a226-29765632d1af-107559236-PreviewImage_preview_image_nonvideo_sdr-Time1601334010442.png/600x600cc-60.jpg",
            artists:["Piyush Bhisekar", "Lights Out", "Kaavish", "Dhruv Kapoor", "Bharat Chauhan", "Mrytyunjay Sarkar", "Raj Barman","Ali Sethi", "Mohit Chauhan", "Raghav Chaitanya", "Osho Jain", "Ashu Shukla"]
        },
        {
            id:4,
            cover:"https://is1-ssl.mzstatic.com/image/thumb/Video114/v4/48/ab/91/48ab91be-9749-3fef-4e7e-5c4b4cc518ae/Jobe1cdcb32-b7f3-43c2-b614-19d75392ce1c-107544037-PreviewImage_preview_image_nonvideo_sdr-Time1601075070432.png/600x600cc-60.jpg",
            artists:["Pritam", "Karan Aujla", "Sidhu Moose Wala", "Badshah", "Guru Randhawa", "Arijit Singh", "KR$NA", "Karan Randhawa", "Armaan Malik", "Sachin-Jigar", "Kaka", "Akhil Sachdeva"]
        }
    ]

    const handleScroll = (e)=>{
        const target = e.target;
        const scroll = e.target.scrollLeft;
        const left_blur = target.parentElement.children[1];
        const right_blur = target.parentElement.children[3]
        if(scroll>0){
            left_blur.style.visibility="visible";
            right_blur.style.visibility="visible";
        }
        else{
            left_blur.style.visibility="hidden";
            right_blur.style.visibility="hidden";
        }
    }
    return (
        <div className="body">
            {user && !user.error && <Player setLyrics={setLyrics} setLyric={setLyric} is_lyric={is_lyric}/>}
            <Container>
                <div className="body_header">
                    <h2>Listen Now</h2>
                    <Link to={`/user/sumit`}>{user && !user.error && <div className="user__avatar">
                        <img src={user.images[0].url} alt="" />
                    </div>}</Link>
                </div>
               
                   <div className="top-pick-section">
                       <h4>Top Picks</h4>
                      <div className="blur_left"></div>
                       <div className="top-pick-cards" onScroll={handleScroll}>
                           
                           {
                               pick_data.map((pick_card,i)=><PickCard key={i} title={pick_card.title} cover={pick_card.cover} name={pick_card.meta.name} artists={pick_card.meta.artists} year={pick_card.meta.year} key={i} is_station={pick_card.isStation}/>)
                           }
                       </div>
                       <div className="blur_right"></div>
                   </div>
                   <div className="recent-played-section">
                       <h4>Recent Played</h4>
                       <div className="recent-play-cards">
                          
                           {
                               recentPlayed && recentPlayed.filter((v,i,a)=>a.findIndex(t=>(t.track.id === v.track.id))===i).map((recent)=><MusicCard key={recent.track.id} cover={recent.track.album.images[0].url} artist={recent.track.album.artists[0].name} name={recent.track.name} id={recent.track.id} artist_id={recent.track.album.artists[0].id} uri={recent.track.uri} type={"track"}/>)
                           }
                       </div>
                   </div>
                   <div className="made-for-you-section">
                       <h4>Made for You</h4>
                       <div className="recent-play-cards" >
                          
                        
                           {
                               made_for_you.map((mood,i)=><MoodCard cover={mood.cover} artists={mood.artists} key={i}/>)
                           }
                       </div>
                   </div>

                   <div className="new_relases_section">
                       <h4>New Release</h4>
                       <div className="new_release_cards">
                           {
                               new_releases && new_releases.map((new_release,i)=>{
                                    return <MusicCard key={i} cover={new_release.images[0].url} artist={new_release.artists[0].name} name={new_release.name} id={new_release.id} artist_id={new_release.artists[0].id} uri={new_release.uri} type={new_release.type}/>
                               })
                           }
                       </div>
                   </div>
            </Container>
        </div>
    )
}


const mapStateToProps = (state)=>({
    recentPlayed:state.appReducer.recentPlayed,
    user:state.appReducer.user,
    new_releases:state.appReducer.new_releases
})
export default connect(mapStateToProps,null)(Body)
