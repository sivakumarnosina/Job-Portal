import React from 'react'
import './List.css';
import ListGroup from 'react-bootstrap/ListGroup';
import icon1 from './icon1.webp';
import icon2 from './icon2.webp';
import icon3 from './icon3.webp';
import icon4 from './icon4.webp';
import icon5 from './icon5.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';


function List() {
    return (
        <div style={{backgroundColor:'rgb(255, 250, 236)'}} className='container'>
            <h1 className='new' style={{position:'relative',top:'30px'}}>New Job Listing</h1>
            <div className='list'>
                <ListGroup horizontal className='custom-list-group'>
                    <ListGroup.Item className='custom-list-item1' style={{backgroundColor:'rgb(255, 250, 236)'}}>
                        <img src={icon1} className='icon' /><a href='' className='test'>Developer & expert in java</a>
                    </ListGroup.Item>
                    <ListGroup.Item className='custom-list-item'>
                        <a href='' className='test'>Full Time <br /> by Slack</a>
                    </ListGroup.Item>
                    <ListGroup.Item className='custom-list-item' >
                        <a href='' className='test'>Spain, Barcelona <br /> Developer, Coder</a>
                    </ListGroup.Item>
                    <ListGroup.Item className='custom-list-item'>
                        <FontAwesomeIcon icon={faBookmark} size="lg" />&nbsp;&nbsp;&nbsp;<a href='' className='test'>Apply</a>
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <div className='list1'>
                <ListGroup horizontal className='custom-list-group'>
                    <ListGroup.Item className='custom-list-item1' style={{backgroundColor:'rgb(255, 250, 236)'}}>
                        <img src={icon2} className='icon' /><a href='' className='test'>Animator & Expert in 3D</a>
                    </ListGroup.Item>
                    <ListGroup.Item className='custom-list-item'>
                        <a href='' className='test'>part time <br /> by Google</a>
                    </ListGroup.Item>
                    <ListGroup.Item className='custom-list-item'>
                        <a href='' className='test'>USA,Newyork<br/>Finance,Accounting</a>
                    </ListGroup.Item>
                    <ListGroup.Item className='custom-list-item'>
                        <FontAwesomeIcon icon={faBookmark} size="lg" />&nbsp;&nbsp;&nbsp;<a href='' className='test'>Apply</a>
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <div className='list1'>
                <ListGroup horizontal className='custom-list-group'>
                    <ListGroup.Item className='custom-list-item1' style={{backgroundColor:'rgb(255, 250, 236)'}}>
                        <img src={icon3} className='icon' /><a href='' className='test'>Marketing in SEO & SMM</a>
                    </ListGroup.Item>
                    <ListGroup.Item className='custom-list-item'>
                        <a href='' className='test'>Part Time <br /> by Slack</a>
                    </ListGroup.Item>
                    <ListGroup.Item className='custom-list-item'>
                        <a href='' className='test'>USA,Alaska & Design,Artist</a>
                    </ListGroup.Item>
                    <ListGroup.Item className='custom-list-item'>
                        <FontAwesomeIcon icon={faBookmark} size="lg" />&nbsp;&nbsp;&nbsp;<a href='' className='test'>Apply</a>
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <div className='list1'>
                <ListGroup horizontal className='custom-list-group'>
                    <ListGroup.Item className='custom-list-item1' style={{backgroundColor:'rgb(255, 250, 236)'}}>
                        <img src={icon4} className='icon' /><a href='' className='test'>Developer & expert in java</a>
                    </ListGroup.Item>
                    <ListGroup.Item className='custom-list-item'>
                        <a href='' className='test'>Full Time <br /> by Instagram</a>
                    </ListGroup.Item>
                    <ListGroup.Item className='custom-list-item'>
                        <a href='' className='test'>USA,California<br/>Application,Marketing</a>
                    </ListGroup.Item>
                    <ListGroup.Item className='custom-list-item'>
                        <FontAwesomeIcon icon={faBookmark} size="lg" />&nbsp;&nbsp;&nbsp;<a href='' className='test'>Apply</a>
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <div className='list1'>
                <ListGroup horizontal className='custom-list-group'>
                    <ListGroup.Item className='custom-list-item1' style={{backgroundColor:'rgb(255, 250, 236)'}}>
                        <img src={icon5} className='icon' /><a href='' className='test'>Lead & Product Designer</a>
                    </ListGroup.Item>
                    <ListGroup.Item className='custom-list-item'>
                        <a href='' className='test'>Full Time <br /> by Linkedin</a>
                    </ListGroup.Item>
                    <ListGroup.Item className='custom-list-item'>
                        <a href='' className='test'>UK,London<br/>Finance,Business</a>
                    </ListGroup.Item>
                    <ListGroup.Item className='custom-list-item'>
                        <FontAwesomeIcon icon={faBookmark} size="lg" />&nbsp;&nbsp;&nbsp;<a href='' className='test'>Apply</a>
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <div className='do'>
            <h6 className='you'>Do you want to post a job for your company ? We help <a href='' className='here'>Click here</a></h6>
            </div>
            
        </div>
    )
}

export default List
