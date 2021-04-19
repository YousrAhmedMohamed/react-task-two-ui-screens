import React from "react";
import house from '../../assets/images/house.png';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';

export default function SingleCard() {
    const useStyles = makeStyles(() => ({
        label: {
            color: 'white'
        }
    }));

    const classes = useStyles();

    return (<div className="card-body bigger">
        <div className="card-header">
            <div className="titles">
                <strong>cercacor laboratories, Inc</strong>
                <span className="card-span">Maadi, Cairo</span>
            </div>
            <div className="btns">
                <div className="contact">
                    <div className="btn-class"><BookmarkIcon color={'disabled'} /> Save</div>
                    <div className="btn-class"><ShareIcon color={'disabled'} /> Share</div>
                </div>
                <Button variant="contained" color="secondary" classes={{ label: classes.label }}>
                    Rent
            </Button>
            </div>
        </div>
        <div className="single-contanier">
            <img src={house} className="card-img" alt="house" />
            <div className="text-container">
                <p>
                    About us. At Cercacor, we believe discovery never ends.
                    This relentless drive to do better, think better, perform better,
                    and to make the impossible, possible, is the basis of our innovative products and technology.
                    We are problem-solvers and relentless discoverers.
                </p>
                <p>
                    About us. At Cercacor, we believe discovery never ends.
                    This relentless drive to do better, think better, perform better,
                    and to make the impossible, possible, is the basis of our innovative products and technology.
                    We are problem-solvers and relentless discoverers.
                </p>
                <p>
                    About us. At Cercacor, we believe discovery never ends.
                    This relentless drive to do better, think better, perform better,
                    and to make the impossible, possible, is the basis of our innovative products and technology.
                    We are problem-solvers and relentless discoverers.
                </p>
                <p className="section2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    </div>)

}