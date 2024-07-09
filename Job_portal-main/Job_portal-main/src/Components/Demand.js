import React from 'react'
import './Demand.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen,faCode,faPhone,faSuitcase,faSliders,faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Demand() {
    return (
        <div>
            <div className='container'>
                <h2 className='most'>Most Demanding Categories.</h2>
                <div className='col'>
                        <a href='#' className='ui12'>
                         Explore More &nbsp;&nbsp;&nbsp; <FontAwesomeIcon icon={faArrowRight} size="lg" />
                        </a>
                    </div>
            </div>
            <div className='container1'>
                <div className='row'>
                    <div className='col'>
                        <a href='#' className='ui1'>
                            <FontAwesomeIcon icon={faPen} size="lg" />&nbsp;&nbsp;&nbsp; UI/UX Design
                        </a>
                    </div>
                    <div className='col'>
                        <a href='#' className='ui2'>
                        <FontAwesomeIcon icon={faCode} size="lg" />&nbsp;&nbsp;&nbsp; Development
                        </a>
                    </div>
                    <div className='col'>
                        <a href='#' className='ui3'>
                        <FontAwesomeIcon icon={faPhone} size="lg" />&nbsp;&nbsp;&nbsp; Telemarketing
                        </a>
                    </div>
                    <div className='col'>
                        <a href='#' className='ui4'>
                        <FontAwesomeIcon icon={faSuitcase} size="lg" />&nbsp;&nbsp;&nbsp; Marketing
                        </a>
                    </div>
                    <div className='col'>
                        <a href='#' className='ui5'>
                        <FontAwesomeIcon icon={faSliders} size="lg" />&nbsp;&nbsp;&nbsp; Editing
                        </a>
                    </div>
                </div>
            </div>
          
        </div>
       
    )
}

export default Demand
