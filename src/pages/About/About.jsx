import React from 'react'
import Navbar from '../../components/shared/Navbar'

const About = (props) => {
    // console.log(props);
    var data1={
        myname:"hamza",
        myage:23
    }
    return (
        <div className='heading'>
            <Navbar />
            {props.name}
            {props.age}

            {/* {data1.myname}
            {data1.myage} */}
        </div>
    )
}

export default About