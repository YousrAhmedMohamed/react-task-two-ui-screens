import React from "react";
import house from '../../assets/images/house.png';
import Divider from '@material-ui/core/Divider';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Link } from "react-router-dom";

export default function Card({ width }) {
    const useStyles = makeStyles(() => ({
        label: {
            color: 'white'
        }
    }));

    const classes = useStyles();

    return (<div className="card-body" style={{ width: width || '100%' }}>
        <Link className="link" to="/details">
            <img className="card-img" src={house} alt="house" />
            <div className="text-container">
                <strong>cercacor laboratories, Inc</strong>
                <span className="card-span">Maadi, Cairo</span>
                <p>
                    About us. At Cercacor, we believe discovery never ends.
                    This relentless drive to do better, think better, perform better,
                    and to make the impossible, possible, is the basis of our innovative products and technology.
                    We are problem-solvers and relentless discoverers.
            </p>
            </div>
            <Divider style={{ width: '100%' }} />
            <div className="card-footer">
                <div className="contact">
                    <div className="btn-class"><BookmarkIcon color={'disabled'} /> Save</div>
                    <div className="btn-class"><ShareIcon color={'disabled'} /> Share</div>
                </div>
                <Button variant="contained" color="secondary" classes={{ label: classes.label }}>
                    Rent
            </Button>
            </div></Link>
    </div >)

}