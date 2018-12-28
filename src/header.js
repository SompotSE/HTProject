import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class header extends Component {

    render() {
        return (

            <header role="banner" className="probootstrap-header">
                <a href="/" className="probootstrap-logo">LOGO<span>.</span></a>

                {/* ---------------------------------------------------------------------------------------------------- */}
                {/*                     
                   <div className="mobile-menu-overlay1"></div>
                   <a href="#" className="probootstrap-burger-menu1" ><i></i></a>
                    <nav role="navigation" className="probootstrap-nav1">
                        <ul className="probootstrap-main-nav1">
                            <li><NavLink to="/howto">วิธีการใช้งาน</NavLink></li>
                            <li><NavLink to="/infor">ข้อมูลอุปกรณ์</NavLink></li>
                            <li><NavLink to="/contact">ติดต่อ</NavLink></li>
                            <li><NavLink to="/test">ทดสอบ</NavLink></li>
                        </ul>
                        
                        
                        
                    </nav> */}

                {/* ---------------------------------------------------------------------------------------------------- */}
                <a href="#" className="probootstrap-burger-menu visible-xs" ><i>เมนู</i></a>
                <div className="mobile-menu-overlay"></div>
                <nav role="navigation" className="probootstrap-nav hidden-xs">
                    <ul className="probootstrap-main-nav">
                        <li>

                            <a href="/">หน้าหลัก</a></li>
                        <li><NavLink to="/howto">วิธีการใช้งาน</NavLink></li>
                        <li><NavLink to="/infor">ข้อมูลอุปกรณ์</NavLink></li>
                        <li><NavLink to="/contact">ติดต่อ</NavLink></li>
                        <li><NavLink to="/test">ทดสอบ</NavLink></li>

                    </ul>
                    <ul className="probootstrap-header-social hidden-xs">
                        <li><a target="_blank" href="https://www.facebook.com"><i className="icon-facebook2"></i></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/"><i className="icon-instagram2"></i></a></li>
                    </ul>
                    <div className="extra-text visible-xs">
                        <a href="#" className="probootstrap-burger-menu"><i>เมนู</i></a>
                    </div>
                </nav>



            </header >
        );

    }

}
export default header;