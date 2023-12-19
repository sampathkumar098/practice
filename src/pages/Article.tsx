import { FunctionComponent } from "react";
import styles from "./Article.module.css";

const Article: FunctionComponent = () => {
  return (
    <div className={styles.article}>
      <div className={styles.moreArticles}>
        <div className={styles.bg} />
        <div className={styles.content}>
          <div className={styles.heading}>
            <div className={styles.heading1}>
              <span className={styles.continue}>{`Continue `}</span>
              <i className={styles.reading}>reading</i>
            </div>
            <img className={styles.pathIcon} alt="" src="/path@2x.png" />
          </div>
          <div className={styles.posts}>
            <div className={styles.card}>
              <img className={styles.imageIcon} alt="" src="/image@2x.png" />
              <div className={styles.details}>
                <div className={styles.copy}>
                  <div className={styles.category}>UX Design • 5 min read</div>
                  <div className={styles.heading2}>
                    Taking your product and design to the Metaverse
                  </div>
                </div>
                <div className={styles.cta}>
                  <div className={styles.copy1}>Read more</div>
                  <img
                    className={styles.buttonIcon}
                    alt=""
                    src="/button@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <img className={styles.imageIcon} alt="" src="/image@2x.png" />
              <div className={styles.details}>
                <div className={styles.copy}>
                  <div className={styles.category}>
                    Artificial Intelligence • 5 min read
                  </div>
                  <div className={styles.heading2}>
                    Taking your product and design to the Metaverse
                  </div>
                </div>
                <div className={styles.cta}>
                  <div className={styles.copy1}>Read more</div>
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
      </div>
      <div className={styles.content1}>
        <div className={styles.images}>
          <div className={styles.images1}>
            <img
              className={styles.pexelsFauxels31843391Icon}
              alt=""
              src="/pexelsfauxels3184339-1@2x.png"
            />
            <div className={styles.imagesChild} />
          </div>
          <div className={styles.images1}>
            <img
              className={styles.pexelsFauxels31843391Icon}
              alt=""
              src="/pexelsfauxels3184339-1@2x.png"
            />
            <div className={styles.imagesChild} />
            <img
              className={styles.image453Icon}
              alt=""
              src="/image-453@2x.png"
            />
          </div>
        </div>
        <div className={styles.copy11}>
          <div className={styles.content2}>
            <p className={styles.miTinciduntElit}>
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
              suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
              quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
              posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
              feugiat sapien varius id. 
            </p>
            <p
              className={styles.miTinciduntElit}
            >{`Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. `}</p>
          </div>
        </div>
        <div className={styles.copy21}>
          <div className={styles.heading4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className={styles.paragraph}>
            <p className={styles.miTinciduntElit}>
              Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
              nulla odio nisl vitae. In aliquet pellentesque aenean hac
              vestibulum turpis mi bibendum diam. Tempor integer aliquam in
              vitae malesuada fringilla.
            </p>
            <p className={styles.miTinciduntElit}>&nbsp;</p>
            <p
              className={styles.miTinciduntElit}
            >{`Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. `}</p>
            <p className={styles.miTinciduntElit}>&nbsp;</p>
            <p className={styles.miTinciduntElit}>
              Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
              mauris id. Non pellentesque congue eget consectetur turpis.
              Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
              aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue
              felis elit erat nam nibh orci.
            </p>
          </div>
        </div>
        <div className={styles.image}>
          <img className={styles.icon} alt="" src="/6689086-1@2x.png" />
        </div>
        <div className={styles.copy21}>
          <div className={styles.heading4}>
            Et harum quidem rerum facilis est et expedita distinctio.
          </div>
          <div className={styles.paragraph}>
            Pharetra morbi libero id aliquam elit massa integer tellus. Quis
            felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit
            dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac
            pellentesque ac.
          </div>
        </div>
        <div className={styles.copy21}>
          <div className={styles.heading4}>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit acilis est et expedita.
          </div>
          <div className={styles.paragraph}>
            Pharetra morbi libero id aliquam elit massa integer tellus. Quis
            felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit
            dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac
            pellentesque ac.
          </div>
        </div>
        <div className={styles.quote}>
          <img className={styles.icon1} alt="" src="/@2x.png" />
          <img className={styles.icon2} alt="" src="/@2x.png" />
          <i className={styles.sedCondimentumEnim}>
            Sed condimentum enim dignissim adipiscing, urna faucibus consequat
            ut eget.
          </i>
        </div>
        <div className={styles.copy21}>
          <div className={styles.heading4}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
            aut.
          </div>
          <div className={styles.paragraph}>
            Pharetra morbi libero id aliquam elit massa integer tellus. Quis
            felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit
            dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac
            pellentesque ac.
          </div>
        </div>
        <div className={styles.copy21}>
          <div className={styles.heading4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className={styles.paragraph}>
            <p className={styles.miTinciduntElit}>
              Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
              nulla odio nisl vitae. In aliquet pellentesque aenean hac
              vestibulum turpis mi bibendum diam. Tempor integer aliquam in
              vitae malesuada fringilla.
            </p>
            <p className={styles.miTinciduntElit}>&nbsp;</p>
            <p className={styles.miTinciduntElit}>
              Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
              commodo consectetur convallis risus. Sed condimentum enim
              dignissim adipiscing faucibus consequat, urna. Viverra purus et
              erat auctor aliquam. Risus, volutpat vulputate posuere purus sit
              congue convallis aliquet.
            </p>
            <p className={styles.miTinciduntElit}>&nbsp;</p>
            <p className={styles.miTinciduntElit}>
              Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
              mauris id. Non pellentesque congue eget consectetur turpis.
              Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
              aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue
              felis elit erat nam nibh orci.
            </p>
          </div>
        </div>
        <div className={styles.copy21}>
          <div className={styles.heading4}>
            Temporibus autem quibusdam et aut officiis debitis aut rerum
            necessitatibus saepe eveniet ut et.
          </div>
          <div className={styles.paragraph}>
            Pharetra morbi libero id aliquam elit massa integer tellus. Quis
            felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit
            dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac
            pellentesque ac.
          </div>
        </div>
        <div className={styles.share}>
          <div className={styles.paragraph6}>Share</div>
          <div className={styles.akarIconsyoutubeFillParent}>
            <img
              className={styles.akarIconsyoutubeFill}
              alt=""
              src="/akariconsyoutubefill@2x.png"
            />
            <img
              className={styles.akarIconsyoutubeFill}
              alt=""
              src="/akariconsyoutubefill@2x.png"
            />
            <img
              className={styles.akarIconsyoutubeFill}
              alt=""
              src="/akariconsinstagramfill@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.hero}>
        <img className={styles.imageIcon2} alt="" src="/image@2x.png" />
        <div className={styles.content3}>
          <div className={styles.categoryTime}>
            <div className={styles.uxDesign}>UX Design • 5 min read</div>
          </div>
          <div className={styles.heading10}>
            Animating passions: From Matisse cutouts to podcast clip
          </div>
        </div>
        <div className={styles.scroll}>
          <div className={styles.scroll1}>Scroll</div>
          <img className={styles.scrollChild} alt="" src="/arrow@2x.png" />
        </div>
      </div>
      <div className={styles.banners}>
        <img className={styles.banner2Icon} alt="" src="/banner-2@2x.png" />
        <img className={styles.banner1Icon} alt="" src="/banner-1@2x.png" />
      </div>
      <div className={styles.bottom}>
        <div className={styles.footer}>
          <img
            className={styles.socialLinkedin}
            alt=""
            src="/social--linkedin@2x.png"
          />
          <div className={styles.links}>
            <div className={styles.button}>
              <div className={styles.loremIpsum}>Home</div>
            </div>
            <div className={styles.button}>
              <div className={styles.loremIpsum}>About</div>
            </div>
            <div className={styles.button}>
              <div className={styles.loremIpsum}>Case Studies</div>
            </div>
            <div className={styles.button}>
              <div className={styles.loremIpsum}>Impact</div>
            </div>
            <div className={styles.button}>
              <div className={styles.loremIpsum}>Insights</div>
            </div>
            <div className={styles.button}>
              <div className={styles.loremIpsum}>Careers</div>
            </div>
            <div className={styles.button}>
              <div className={styles.loremIpsum}>Privacy Policy</div>
            </div>
          </div>
          <div className={styles.offices}>
            <img className={styles.dividerIcon} alt="" src="/divider@2x.png" />
            <div className={styles.offices1}>
              <div className={styles.aus}>
                <div className={styles.copy8}>
                  <div className={styles.melbourneAustralia}>
                    Melbourne, Australia
                  </div>
                  <div className={styles.level3534Container}>
                    <p className={styles.miTinciduntElit}>
                      Level 3, 534 Church Street
                    </p>
                    <p className={styles.miTinciduntElit}>Cremorne, 3121</p>
                    <p className={styles.miTinciduntElit}>
                      Victoria, Australia
                    </p>
                    <p className={styles.miTinciduntElit}>+61 1300 277 434</p>
                  </div>
                </div>
                <div className={styles.thu1154}>THU • 11:54 AM</div>
              </div>
              <div className={styles.aus}>
                <div className={styles.copy8}>
                  <div className={styles.melbourneAustralia}>New York, USA</div>
                  <div className={styles.level3534Container}>
                    <p className={styles.miTinciduntElit}>
                      Level 2, 234 Fifth Ave
                    </p>
                    <p className={styles.miTinciduntElit}>New York, 10001</p>
                    <p className={styles.miTinciduntElit}>NY, United States</p>
                    <p className={styles.miTinciduntElit}>+1 (610) 999-7631</p>
                  </div>
                </div>
                <div className={styles.thu1154}>THU • 11:54 AM</div>
              </div>
              <div className={styles.aus}>
                <div className={styles.copy8}>
                  <div className={styles.melbourneAustralia}>London, UK</div>
                  <div className={styles.level3534Container}>
                    <p className={styles.miTinciduntElit}>[Address 1]</p>
                    <p className={styles.miTinciduntElit}>[Address 2]</p>
                    <p className={styles.miTinciduntElit}>[Address 3]</p>
                    <p className={styles.miTinciduntElit}>[Phone number]</p>
                  </div>
                </div>
                <div className={styles.thu1154}>THU • 11:54 AM</div>
              </div>
              <div className={styles.aus}>
                <div className={styles.copy8}>
                  <div className={styles.melbourneAustralia}>
                    Bengaluru, India
                  </div>
                  <div className={styles.level3534Container}>
                    <p
                      className={styles.miTinciduntElit}
                    >{`Gopala Krishna Complex `}</p>
                    <p className={styles.miTinciduntElit}>
                      45/3 Mahatma Gandhi Rd
                    </p>
                    <p
                      className={styles.miTinciduntElit}
                    >{`Bengaluru, Karnataka `}</p>
                    <p className={styles.miTinciduntElit}>560025, India</p>
                  </div>
                </div>
                <div className={styles.thu11543}>THU • 11:54 AM</div>
              </div>
              <div className={styles.philippines}>
                <div className={styles.copy13}>
                  <div className={styles.manilaThePhilippines}>
                    Manila, The Philippines
                  </div>
                  <div className={styles.fPhinmaPlazaContainer}>
                    <p className={styles.miTinciduntElit}>5F Phinma Plaza</p>
                    <p className={styles.miTinciduntElit}>
                      39 Plaza Drive, Rockwell Centre
                    </p>
                    <p className={styles.miTinciduntElit}>
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
            <div className={styles.copy14}>
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
                <p className={styles.miTinciduntElit}>All rights reserved.</p>
                <p className={styles.miTinciduntElit}>©️ Launchpad 2023</p>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.bg1} />
          <div className={styles.bg1}>
            <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
            <div className={styles.overlay} />
          </div>
          <img className={styles.gridIcon} alt="" src="/grid@2x.png" />
          <div className={styles.content4}>
            <div className={styles.copy15}>
              <div className={styles.heading11}>
                <span className={styles.haveAn}>Have an</span>
                <span className={styles.span}>{` `}</span>
                <i className={styles.idea}>idea?</i>
              </div>
            </div>
            <div className={styles.button7}>
              <div className={styles.letsChat}>Let’s chat</div>
            </div>
          </div>
        </div>
        <div className={styles.banners1}>
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
          <div className={styles.button8}>
            <div className={styles.workWithUs}>Work with us</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
