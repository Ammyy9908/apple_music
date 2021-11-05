import React from 'react'
import {MdOutlineClose,MdSmartphone,MdComputer} from "react-icons/md"
import { connect } from 'react-redux'
import { SetDeviceToggle } from '../redux/actions/_appAction'
import startDevice from '../utils/start-to-device'
import "./DeviceCard.css"

function DeviceList({name,id,SetDeviceToggle,type,is_active}){

    

    const start_to_device = ()=>{
        startDevice(id).then((feedback)=>{
            const {error} = feedback;
            if(!error){
                
                SetDeviceToggle(false);
            }
        })
    }
    return <div className="device-list" onClick={start_to_device}>
        <button className="device_play_btn">{type==="Smartphone"?<MdSmartphone/>:<MdComputer/>}</button>
        <span className={is_active&&"active_device"}>{name}</span>
    </div>
}

function DeviceCard({devices,SetDeviceToggle}) {
    return (
        <div className="device_card">
            <button className="device_card_close" onClick={()=>{
                SetDeviceToggle(false);
            }}>
                    <MdOutlineClose/>
            </button>
            <div className="device_card_lists">
                
                

                {
                    devices && devices.map((device,i)=>{
                        return <DeviceList name={device.name} key={i} id={device.id} SetDeviceToggle={SetDeviceToggle} type={device.type} is_active={device.is_active}/>
                    })
                }
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>({
    SetDeviceToggle:(device_toggle)=>dispatch(SetDeviceToggle(device_toggle))
})

export default connect(null,mapDispatchToProps)(DeviceCard)
