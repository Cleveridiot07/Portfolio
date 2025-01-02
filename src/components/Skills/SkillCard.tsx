import "./index.css";

interface SkillCardProps {
  oddEven?: boolean;
  skillName?: string;
  iconPath?: string;
  skillLevel?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  oddEven,
  skillName,
  iconPath,
  skillLevel,
}) => {
  return (
    <>
    <div>
      <div className={`${oddEven ? "card1" : "card2"}`}>
        <div className={`${oddEven?"content1":"content2"}`}>
          <div className={`${oddEven?"back1":"back2"}`}>
            <div className={`${oddEven ? "back-content1" : "back-content2"}`}>
              <img src={iconPath} className="w-24 h-24" alt="" />
              <strong>{skillName}</strong>
            </div>
          </div>
          <div className={`${oddEven?"front1":"front2"}`}>
            <div className={`${oddEven?"img1":"img2"}`}>
              <div className={`${oddEven?"circle1":"circle2"}`}></div>
              <div className={`${oddEven?"circle1":"circle2"}`} id="right"></div>
              <div className={`${oddEven?"circle1":"circle2"}`} id="bottom"></div>
            </div>

            <div className={`${oddEven?"front-content1":"front-content2"}`}>
              <div className={`${oddEven?"description1":"description2"}`}>
                <div className={`${oddEven?"title1":"title2"}`}>
                  <p className={`${oddEven?"title1":"title2"}`}>
                    <strong>{skillLevel}</strong>
                  </p>
                  <svg
                    fillRule="nonzero"
                    height="15px"
                    width="15px"
                    viewBox="0,0,256,256"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      textAnchor="none"
                      fontSize="none"
                      fontWeight="none"
                      fontFamily="none"
                      strokeDashoffset="0"
                      strokeDasharray=""
                      strokeMiterlimit="10"
                      strokeLinejoin="miter"
                      strokeLinecap="butt"
                      strokeWidth="1"
                      stroke="none"
                      fillRule="nonzero"
                      fill="#20c997"
                    >
                      <g transform="scale(8,8)">
                        <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SkillCard;
