import React from 'react';
import './Header.css'

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import Avatar from "@material-ui/core/Avatar";
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from "@material-ui/core/IconButton";
import {useStateValue} from "../store/StateProvider/StateProvider";

const Header = () => {
    const [{user}] = useStateValue()
    return (
        <div className={'header'}>
            <div className="header_left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook Logo"/>
                <div className="header_input">
                    <SearchIcon/>
                    <input type="text" placeholder={'Search Facebook'}/>
                </div>
            </div>
            <div className="header_center">
                <div className="header_option header_option--active">
                    <HomeIcon fontSize={'large'}/>
                </div>
                <div className="header_option">
                    <FlagIcon fontSize={'large'}/>
                </div>
                <div className="header_option">
                    <SubscriptionsOutlinedIcon fontSize={'large'}/>
                </div>
                <div className="header_option">
                    <StorefrontOutlinedIcon fontSize={'large'}/>
                </div>
                <div className="header_option">
                    <SupervisedUserCircleIcon fontSize={'large'}/>
                </div>
            </div>
            <div className="header_right">
                <div className="header_info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>


            </div>
        </div>
    );
};

export default Header;