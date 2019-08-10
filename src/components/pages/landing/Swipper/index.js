import React, { useState } from 'react';
import * as styles from './styles'
import SwipperBox from './components/SwipperBox'
import swipper1 from 'images/swipper/swipper1.png';
import swipper2 from 'images/swipper/swipper2.jpg';

const SwipperSection = ({ title, button, right, left }) => {
    const images = [{ src: swipper1, right: true }, { src: swipper2, left: true }];

    const [selectedImage, setSelected] = useState(0)

    const swipImage = (value) => {
        let index = selectedImage + value;
        index = index == images.length ? 0
            : index < 0 ? (images.length - 1) : index;
        setSelected(index)
    }
    return (
        <styles.Wrap>
            <styles.Img src={images[selectedImage].src} alt="" />
            <styles.LeftButton leftButton icon="fa-angle-left" onClick={() => { swipImage(-1) }} />
            <styles.RightButton rightButton icon="fa-angle-right" onClick={() => { swipImage(+1) }} />
            {/* if `right` attribute is true, the component will be placed on the right, same thing for `left` */}
            <SwipperBox title={title} button={button} left={images[selectedImage].left} right={images[selectedImage].right} />
        </styles.Wrap>
    );
};

export default SwipperSection;