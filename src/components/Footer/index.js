import React from "react";
import FooterLogo from '../../assets/images/footerLogo.png';
import fb from '../../assets/images/facebook.png';
import insta from '../../assets/images/instagram.png';
import linked from '../../assets/images/linkedin.png';
import twitter from '../../assets/images/twitter.png';
import whatsapp from '../../assets/images/whatsapp.png';
import youtube from '../../assets/images/youtube.png';
import pinterest from '../../assets/images/pinterest.png';
import app from '../../assets/images/apps.png';
import iApp from '../../assets/images/iApp.png';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import makeStyles from '@material-ui/core/styles/makeStyles';



export default function Footer() {

    const useStyles = makeStyles(() => ({
        selectMenu: {
            padding: '5px',
            width: '100%',
            paddingRight: '5px'
        },
        outlined: { borderRadius: '0px' }
    }));

    const classes = useStyles();

    return (<div className="footer-body">

        <div className="left-side">
            <div className="logo-div">
                <img src={FooterLogo} alt="FooterLogo" />
                <div className="social-logo-div">
                    <img src={fb} className="logo-img" alt="fb" />
                    <img src={insta} className="logo-img" alt="insta" />
                    <img src={linked} className="logo-img" alt="linked" />
                    <img src={twitter} className="logo-img" alt="twitter" />
                    <img src={whatsapp} className="logo-img" alt="whatsapp" />
                    <img src={youtube} className="logo-img" alt="youtube" />
                    <img src={pinterest} className="logo-img" alt="pinterest" />
                </div>
            </div>
            <div className="about-div">
                <div className="section">
                    <span className="title">General</span>
                    <span>about</span>
                    <span>Blog</span>
                    <span>sign up</span>
                    <span>help center</span>
                </div>
                <div className="section">
                    <span className="title">Qhuck links</span>
                    <span>about</span>
                    <span>from zero to hero</span>
                    <span>sign up</span>
                    <span>help center</span>
                </div>
                <div className="section">
                    <span className="title">Help</span>
                    <span>about</span>
                    <span>Blog</span>
                    <span>sign up</span>
                    <span>help center</span>
                </div>

            </div>
        </div>
        <div className="right-side">
            <span className="title">Download jobzella Mobile app</span>
            <span className="small-font">Jobzella mobile app for android and iphone</span>
            <div className="apps-div">
                <img src={app} className="app-img" alt="app" />
                <img src={iApp} className="i-app-img" alt="iApp" />
            </div>
            <span className="free">Downlaod free</span>

            <FormControl variant="outlined" fullWidth classes={{ root: classes.outlined }}>
                <Select
                    classes={{ selectMenu: classes.selectMenu }}
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={1}
                >
                    <MenuItem value={1}>English</MenuItem>
                    <MenuItem value={2}>Arabic</MenuItem>
                </Select>
            </FormControl>

        </div>
    </div>)
}