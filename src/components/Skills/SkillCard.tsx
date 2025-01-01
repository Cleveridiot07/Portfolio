import "./index.css";

const SkillCard = ({
  oddEven = true,
  skillName = "Hover Me",
  iconPath = "./Skills/ReactJS.png",
  skillLevel="Beginner",
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
                    fill-rule="nonzero"
                    height="15px"
                    width="15px"
                    viewBox="0,0,256,256"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      text-anchor="none"
                      font-size="none"
                      font-weight="none"
                      font-family="none"
                      stroke-dashoffset="0"
                      stroke-dasharray=""
                      stroke-miterlimit="10"
                      stroke-linejoin="miter"
                      stroke-linecap="butt"
                      stroke-width="1"
                      stroke="none"
                      fill-rule="nonzero"
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
