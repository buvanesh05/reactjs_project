import React from 'react'
import Privacy from '../../assests/svg/Privacy.svg';
import Policy from '../../assests/svg/Queryicon.svg';
import Query from '../../assests/svg/policy.svg';

const FooterBeforeLogin = () => {
  return (
      <div>
          <div className="flex justify-between p-custom flex-wrap gap-[15px]">
              <div className="flex gap-[8px] cursor-pointer">
                  <img src={Privacy} alt="Privacy" />
                  <p className="text-[14px] font-semibold text-Example hover:font-medium">Privacy Policy</p>
              </div>
              <div className="flex gap-[8px] cursor-pointer">
                  <img src={Policy} alt="Policy" />
                  <p className="text-[14px] font-semibold text-Remember hover:font-medium">All rights reserved</p>
              </div>
              <div className="flex gap-[8px] cursor-pointer">
                  <img src={Query} alt="Query" />
                  <p className="text-[14px] font-semibold text-Example hover:font-medium text-example">Having Trouble Logging In?</p>
              </div>
          </div>
      </div>
  );
};

export default FooterBeforeLogin;
