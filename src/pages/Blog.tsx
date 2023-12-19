import { FunctionComponent } from "react";
import styles from "./Blog.module.css";

const Blog: FunctionComponent = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.button}>
        <div className={styles.loadMoreWrapper}>
          <div className={styles.loadMore}>Load more</div>
        </div>
      </div>
      <div className={styles.articles}>
        <div className={styles.column1}>
          <div className={styles.card}>
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            <div className={styles.details}>
              <div className={styles.copy}>
                <div className={styles.category}>UX Design • 5 min read</div>
                <div className={styles.heading}>
                  Taking your product and design to the Metaverse
                </div>
              </div>
              <div className={styles.cta}>
                <div className={styles.melbourneAustralia}>Read more</div>
                <img
                  className={styles.buttonIcon}
                  alt=""
                  src="/button@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img
              className={styles.cardChild}
              alt=""
              src="/rectangle-4845@2x.png"
            />
            <div className={styles.details}>
              <div className={styles.copy}>
                <div className={styles.category}>UX Design • 5 min read</div>
                <div className={styles.heading}>
                  Taking your product and design to the Metaverse
                </div>
              </div>
              <div className={styles.cta}>
                <div className={styles.melbourneAustralia}>Read more</div>
                <img
                  className={styles.buttonIcon}
                  alt=""
                  src="/button@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img
              className={styles.cardChild}
              alt=""
              src="/rectangle-4846@2x.png"
            />
            <div className={styles.details}>
              <div className={styles.copy}>
                <div className={styles.category}>UX Design • 5 min read</div>
                <div className={styles.heading}>
                  Taking your product and design to the Metaverse
                </div>
              </div>
              <div className={styles.cta}>
                <div className={styles.melbourneAustralia}>Read more</div>
                <img
                  className={styles.buttonIcon}
                  alt=""
                  src="/button@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.column1}>
          <div className={styles.card}>
            <img
              className={styles.cardChild}
              alt=""
              src="/rectangle-4844@2x.png"
            />
            <div className={styles.details}>
              <div className={styles.copy}>
                <div className={styles.category}>UX Design • 5 min read</div>
                <div className={styles.heading}>
                  Taking your product and design to the Metaverse
                </div>
              </div>
              <div className={styles.cta}>
                <div className={styles.melbourneAustralia}>Read more</div>
                <img
                  className={styles.buttonIcon}
                  alt=""
                  src="/button@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle-4844@2x.png"
            />
            <div className={styles.details}>
              <div className={styles.copy}>
                <div className={styles.category}>UX Design • 5 min read</div>
                <div className={styles.heading}>
                  Taking your product and design to the Metaverse
                </div>
              </div>
              <div className={styles.cta}>
                <div className={styles.melbourneAustralia}>Read more</div>
                <img
                  className={styles.buttonIcon}
                  alt=""
                  src="/button@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img
              className={styles.cardChild1}
              alt=""
              src="/rectangle-4845@2x.png"
            />
            <div className={styles.details}>
              <div className={styles.copy}>
                <div className={styles.category}>UX Design • 5 min read</div>
                <div className={styles.heading}>
                  Taking your product and design to the Metaverse
                </div>
              </div>
              <div className={styles.cta}>
                <div className={styles.melbourneAustralia}>Read more</div>
                <img
                  className={styles.buttonIcon}
                  alt=""
                  src="/button@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hero}>
        <img className={styles.gridIcon} alt="" src="/grid@2x.png" />
        <div className={styles.gradient} />
        <img className={styles.arrowsIcon} alt="" src="/arrows@2x.png" />
        <img className={styles.circlesIcon} alt="" src="/circles@2x.png" />
        <div className={styles.heading6}>
          <span className={styles.storiesAnd}>Stories and</span>
          <i className={styles.i}>{` `}</i>
          <i className={styles.insights}>insights</i>
          <span className={styles.span}>{` `}</span>
          <span className={styles.storiesAnd}>from building the future</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.footer}>
          <img
            className={styles.socialLinkedin}
            alt=""
            src="/social--linkedin@2x.png"
          />
          <div className={styles.links}>
            <div className={styles.button1}>
              <div className={styles.loremIpsum}>Home</div>
            </div>
            <div className={styles.button1}>
              <div className={styles.loremIpsum}>About</div>
            </div>
            <div className={styles.button1}>
              <div className={styles.loremIpsum}>Case Studies</div>
            </div>
            <div className={styles.button1}>
              <div className={styles.loremIpsum}>Impact</div>
            </div>
            <div className={styles.button1}>
              <div className={styles.loremIpsum}>Insights</div>
            </div>
            <div className={styles.button1}>
              <div className={styles.loremIpsum}>Careers</div>
            </div>
            <div className={styles.button1}>
              <div className={styles.loremIpsum}>Privacy Policy</div>
            </div>
          </div>
          <div className={styles.offices}>
            <img className={styles.dividerIcon} alt="" src="/divider@2x.png" />
            <div className={styles.offices1}>
              <div className={styles.aus}>
                <div className={styles.copy12}>
                  <div className={styles.melbourneAustralia}>
                    Melbourne, Australia
                  </div>
                  <div className={styles.level3534Container}>
                    <p className={styles.victoriaAustralia}>
                      Level 3, 534 Church Street
                    </p>
                    <p className={styles.victoriaAustralia}>Cremorne, 3121</p>
                    <p className={styles.victoriaAustralia}>
                      Victoria, Australia
                    </p>
                    <p className={styles.victoriaAustralia}>+61 1300 277 434</p>
                  </div>
                </div>
                <div className={styles.thu1154}>THU • 11:54 AM</div>
              </div>
              <div className={styles.aus}>
                <div className={styles.copy12}>
                  <div className={styles.melbourneAustralia}>New York, USA</div>
                  <div className={styles.level3534Container}>
                    <p className={styles.victoriaAustralia}>
                      Level 2, 234 Fifth Ave
                    </p>
                    <p className={styles.victoriaAustralia}>New York, 10001</p>
                    <p className={styles.victoriaAustralia}>
                      NY, United States
                    </p>
                    <p className={styles.victoriaAustralia}>
                      +1 (610) 999-7631
                    </p>
                  </div>
                </div>
                <div className={styles.thu1154}>THU • 11:54 AM</div>
              </div>
              <div className={styles.aus}>
                <div className={styles.copy12}>
                  <div className={styles.melbourneAustralia}>London, UK</div>
                  <div className={styles.level3534Container}>
                    <p className={styles.victoriaAustralia}>[Address 1]</p>
                    <p className={styles.victoriaAustralia}>[Address 2]</p>
                    <p className={styles.victoriaAustralia}>[Address 3]</p>
                    <p className={styles.victoriaAustralia}>[Phone number]</p>
                  </div>
                </div>
                <div className={styles.thu1154}>THU • 11:54 AM</div>
              </div>
              <div className={styles.aus}>
                <div className={styles.copy12}>
                  <div className={styles.melbourneAustralia}>
                    Bengaluru, India
                  </div>
                  <div className={styles.level3534Container}>
                    <p
                      className={styles.victoriaAustralia}
                    >{`Gopala Krishna Complex `}</p>
                    <p className={styles.victoriaAustralia}>
                      45/3 Mahatma Gandhi Rd
                    </p>
                    <p
                      className={styles.victoriaAustralia}
                    >{`Bengaluru, Karnataka `}</p>
                    <p className={styles.victoriaAustralia}>560025, India</p>
                  </div>
                </div>
                <div className={styles.thu11543}>THU • 11:54 AM</div>
              </div>
              <div className={styles.philippines}>
                <div className={styles.copy16}>
                  <div className={styles.manilaThePhilippines}>
                    Manila, The Philippines
                  </div>
                  <div className={styles.fPhinmaPlazaContainer}>
                    <p className={styles.victoriaAustralia}>5F Phinma Plaza</p>
                    <p className={styles.victoriaAustralia}>
                      39 Plaza Drive, Rockwell Centre
                    </p>
                    <p className={styles.victoriaAustralia}>
                      Makati City, Metro Manila
                    </p>
                  </div>
                </div>
                <div className={styles.thu11544}>THU • 11:54 AM</div>
              </div>
            </div>
            <img className={styles.dividerIcon} alt="" src="/divider@2x.png" />
          </div>
          <div className={styles.badges}>
            <div className={styles.launchpadAppDevelopment2022}>
              <img className={styles.groupIcon} alt="" src="/group@2x.png" />
              <div className={styles.groupParent}>
                <img className={styles.groupIcon1} alt="" src="/group@2x.png" />
                <div className={styles.groupGroup}>
                  <img
                    className={styles.groupIcon2}
                    alt=""
                    src="/group@2x.png"
                  />
                  <img
                    className={styles.groupIcon3}
                    alt=""
                    src="/group@2x.png"
                  />
                </div>
              </div>
            </div>
            <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
            <div className={styles.launchpadAppDevelopment20221}>
              <img className={styles.groupIcon} alt="" src="/group@2x.png" />
              <div className={styles.groupContainer}>
                <img className={styles.groupIcon5} alt="" src="/group@2x.png" />
                <div className={styles.frameDiv}>
                  <img
                    className={styles.groupIcon6}
                    alt=""
                    src="/group@2x.png"
                  />
                  <img
                    className={styles.groupIcon7}
                    alt=""
                    src="/group@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.aboriginal}>
            <div className={styles.aboriginalTorresFlag}>
              <img
                className={styles.australianAboriginalFlag1Icon}
                alt=""
                src="/australian-aboriginal-flag-1@2x.png"
              />
              <img
                className={styles.someImagewidth16001Icon}
                alt=""
                src="/some-imagewidth1600-1@2x.png"
              />
            </div>
            <div className={styles.weAcknowledgeThe}>
              We acknowledge the traditional custodians of the land on which we
              live and work and pay respects to elders past, present and to
              emerging leaders.
            </div>
          </div>
          <div className={styles.inclusive}>
            <div className={styles.badges1}>
              <img
                className={styles.pxLgbtqRainbowFlagQuasarIcon}
                alt=""
                src="/1280pxlgbtq-rainbow-flag-quasar--progress--variant-1@2x.png"
              />
              <img
                className={styles.neurodiversitySymbol1Icon}
                alt=""
                src="/neurodiversity-symbol-1@2x.png"
              />
            </div>
            <div className={styles.copy17}>
              <div className={styles.launchpadIsA}>
                Launchpad is a proudly inclusive organisation and an ally of the
                LGBTIQ+ and neurodiverse community.
              </div>
            </div>
          </div>
          <div className={styles.logo}>
            <img className={styles.lpLogoIcon} alt="" src="/lp-logo@2x.png" />
            <div className={styles.allRightsReservedContainer}>
              <span className={styles.allRightsReservedContainer1}>
                <p className={styles.victoriaAustralia}>All rights reserved.</p>
                <p className={styles.victoriaAustralia}>©️ Launchpad 2023</p>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.bg} />
          <div className={styles.bg}>
            <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
            <div className={styles.overlay} />
          </div>
          <img className={styles.gridIcon1} alt="" src="/grid@2x.png" />
          <div className={styles.content}>
            <div className={styles.copy18}>
              <div className={styles.heading7}>
                <span className={styles.storiesAnd}>Have an</span>
                <span className={styles.span}>{` `}</span>
                <i className={styles.insights}>idea?</i>
              </div>
            </div>
            <div className={styles.button8}>
              <div className={styles.letsChat}>Let’s chat</div>
            </div>
          </div>
        </div>
        <div className={styles.banners}>
          <img className={styles.banner2Icon} alt="" src="/banner-2@2x.png" />
          <img className={styles.banner1Icon} alt="" src="/banner-1@2x.png" />
        </div>
      </div>
      <div className={styles.topNav}>
        <img className={styles.lpLogoIcon1} alt="" src="/lp-logo@2x.png" />
        <div className={styles.right}>
          <div className={styles.links1}>
            <div className={styles.loremIpsum}>Home</div>
            <div className={styles.loremIpsum}>About</div>
            <div className={styles.loremIpsum}>Case Studies</div>
            <div className={styles.loremIpsum}>Impact</div>
            <div className={styles.loremIpsum}>Insights</div>
          </div>
          <div className={styles.button9}>
            <div className={styles.loadMore}>Work with us</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
