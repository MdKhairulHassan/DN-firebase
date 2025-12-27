import React from 'react';
import swimmingImage from '../../assets/swimming.png';
import classImage from '../../assets/class.png';
import playGroundImage from '../../assets/playground.png';

const Qzone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="font-bold mb-5">Qzone</h2>
      <div>
        <img className="" src={swimmingImage} alt="" />
        <img className="pt-8" src={classImage} alt="" />
        <img className="pt-8" src={playGroundImage} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
