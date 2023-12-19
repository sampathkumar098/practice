import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onCaseStudiesTextClick = useCallback(() => {
    navigate("/case-studies");
  }, [navigate]);

  const onImpactTextClick = useCallback(() => {
    navigate("/impact-desktop");
  }, [navigate]);

  const onInsightsTextClick = useCallback(() => {
    navigate("/blog");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <div className={styles.blog}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <div className={styles.heading1}>
              <span className={styles.storiesAnd}>Stories and</span>
              <i className={styles.i}>{` `}</i>
              <i className={styles.insights}>insights</i>
              <span className={styles.span}>{` `}</span>
              <span className={styles.storiesAnd}>
                from building the future
              </span>
            </div>
            <div className={styles.button}>
              <div className={styles.viewMore}>View more</div>
            </div>
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
      </div>
      <div className={styles.caseStudies}>
        <div className={styles.carosuel}>
          <div className={styles.caseStudy3}>
            <img className={styles.imageIcon2} alt="" src="/image@2x.png" />
            <div className={styles.details2}>
              <div className={styles.wrapperAppIcon}>
                <img className={styles.appIcon} alt="" src="/app-icon@2x.png" />
              </div>
              <div className={styles.brickfitParent}>
                <div className={styles.brickfit}>BrickFit</div>
                <div className={styles.digitisingTheWorlds}>
                  Digitising the worlds most loved teacher planner.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.caseStudy1}>
            <div className={styles.image}>
              <img className={styles.imagesIcon} alt="" src="/images@2x.png" />
              <img
                className={styles.bgElementIcon}
                alt=""
                src="/bg-element@2x.png"
              />
              <div className={styles.signIn}>
                <div className={styles.matteGlass} />
                <div className={styles.sessionPlayer}>
                  <img
                    className={styles.backgroundIcon}
                    alt=""
                    src="/background@2x.png"
                  />
                  <img
                    className={styles.photoIcon}
                    alt=""
                    src="/photo@2x.png"
                  />
                  <div className={styles.text}>
                    <div className={styles.titleParent}>
                      <div className={styles.title}>
                        A Brief History Of Carpet
                      </div>
                      <div className={styles.description}>
                        Sometime known as 'floor towels' Ryan dives into the
                        rich history of how carpet exactly came about. It is
                        100% true, I promise - no need to cross check anything.
                      </div>
                      <div className={styles.narratorName}>
                        <div className={styles.title1}>Ryan Shelton</div>
                        <div className={styles.title2}>Narrator</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.wrapperSliderParent}>
                    <div className={styles.wrapperSlider}>
                      <img
                        className={styles.sliderIcon}
                        alt=""
                        src="/slider@2x.png"
                      />
                    </div>
                    <div className={styles.value}>
                      <div className={styles.div}>00:10</div>
                      <div className={styles.div1}>01:06</div>
                    </div>
                  </div>
                  <div className={styles.sessionPlayerInner}>
                    <div className={styles.fastForward2Parent}>
                      <div className={styles.fastForward2}>
                        <div className={styles.page1}>
                          <div className={styles.forward}>
                            <div className={styles.div2}>15</div>
                            <img
                              className={styles.forwardChild}
                              alt=""
                              src="/group-29@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                      <img
                        className={styles.bxStop2Icon}
                        alt=""
                        src="/bxstop-2@2x.png"
                      />
                      <div className={styles.fastForward2}>
                        <div className={styles.page1}>
                          <div className={styles.forward}>
                            <div className={styles.div2}>15</div>
                            <img
                              className={styles.forwardItem}
                              alt=""
                              src="/group-29@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.bxShare1Parent}>
                    <img
                      className={styles.bxShare1Icon}
                      alt=""
                      src="/bxshare-1@2x.png"
                    />
                    <div className={styles.title3}>
                      Share best bit to socials
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.arrow}>
                <div className={styles.giveItA}>Give it a listen!</div>
                <img className={styles.arrowIcon} alt="" src="/arrow@2x.png" />
              </div>
              <div className={styles.sleep}>
                <img
                  className={styles.backgroundIcon1}
                  alt=""
                  src="/background@2x.png"
                />
                <div className={styles.shadow} />
                <div className={styles.frameParent}>
                  <div className={styles.allWrapper}>
                    <div className={styles.all}>All</div>
                  </div>
                  <div className={styles.maleWrapper}>
                    <div className={styles.all}>Male</div>
                  </div>
                  <div className={styles.maleWrapper}>
                    <div className={styles.all}>Female</div>
                  </div>
                  <div className={styles.maleWrapper}>
                    <div className={styles.all}>Fictional</div>
                  </div>
                  <div className={styles.maleWrapper}>
                    <div className={styles.all}>Fictional</div>
                  </div>
                </div>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group@2x.png"
                />
                <img
                  className={styles.maskGroupIcon1}
                  alt=""
                  src="/mask-group@2x.png"
                />
                <img
                  className={styles.maskGroupIcon2}
                  alt=""
                  src="/mask-group@2x.png"
                />
                <img
                  className={styles.maskGroupIcon3}
                  alt=""
                  src="/mask-group@2x.png"
                />
                <img
                  className={styles.maskGroupIcon4}
                  alt=""
                  src="/mask-group@2x.png"
                />
                <div className={styles.bottomMenu}>
                  <div className={styles.rectangle} />
                  <div className={styles.componentmenuTabinactiveParent}>
                    <div className={styles.componentmenuTabinactive}>
                      <div className={styles.placeholder} />
                      <div className={styles.indicator} />
                      <img
                        className={styles.icons24pxnavPanelForYou}
                        alt=""
                        src="/icons24pxnav-panel-for-youinactive@2x.png"
                      />
                      <div className={styles.forWhatI}>For You</div>
                    </div>
                    <div className={styles.componentmenuTabactive}>
                      <div className={styles.placeholder} />
                      <div className={styles.forWhatI1}>Sleep</div>
                      <img
                        className={styles.icons24pxnavPanelForYou}
                        alt=""
                        src="/icons24pxnav-panel-sleepactive@2x.png"
                      />
                    </div>
                    <div className={styles.componentmenuTabinactive}>
                      <div className={styles.placeholder} />
                      <div className={styles.indicator} />
                      <img
                        className={styles.icons24pxnavPanelForYou}
                        alt=""
                        src="/icons24pxnav-panel-destresserinactive@2x.png"
                      />
                      <div className={styles.forWhatI2}>Destresser</div>
                    </div>
                    <div className={styles.componentmenuTabinactive}>
                      <div className={styles.placeholder} />
                      <div className={styles.indicator} />
                      <img
                        className={styles.icons24pxnavPanelForYou}
                        alt=""
                        src="/icons24pxnav-panel-moreactive@2x.png"
                      />
                      <div className={styles.forWhatI3}>More</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.destresser}>
                <img
                  className={styles.backgroundIcon2}
                  alt=""
                  src="/background@2x.png"
                />
                <img
                  className={styles.maskGroupIcon5}
                  alt=""
                  src="/mask-group@2x.png"
                />
                <img
                  className={styles.maskGroupIcon5}
                  alt=""
                  src="/mask-group@2x.png"
                />
                <div className={styles.blockTitleParent}>
                  <div className={styles.blockTitle}>Motivational</div>
                  <div className={styles.maskGroupParent}>
                    <img
                      className={styles.maskGroupIcon7}
                      alt=""
                      src="/mask-group@2x.png"
                    />
                    <img
                      className={styles.maskGroupIcon7}
                      alt=""
                      src="/mask-group@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.blockTitleGroup}>
                  <div className={styles.blockTitle1}>Work Stress</div>
                  <div className={styles.maskGroupGroup}>
                    <img
                      className={styles.maskGroupIcon7}
                      alt=""
                      src="/mask-group@2x.png"
                    />
                    <img
                      className={styles.maskGroupIcon7}
                      alt=""
                      src="/mask-group@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.bottomMenu1}>
                  <div className={styles.rectangle1} />
                  <div className={styles.componentmenuTabinactiveParent}>
                    <div className={styles.componentmenuTabinactive3}>
                      <div className={styles.placeholder} />
                      <div className={styles.indicator3} />
                      <img
                        className={styles.icons24pxnavPanelSleepin}
                        alt=""
                        src="/icons24pxnav-panel-for-youinactive@2x.png"
                      />
                      <div className={styles.forWhatI4}>For You</div>
                    </div>
                    <div className={styles.componentmenuTabinactive4}>
                      <div className={styles.placeholder} />
                      <div className={styles.indicator3} />
                      <img
                        className={styles.icons24pxnavPanelSleepin}
                        alt=""
                        src="/icons24pxnav-panel-sleepinactive@2x.png"
                      />
                      <div className={styles.forWhatI5}>Sleep</div>
                    </div>
                    <div className={styles.componentmenuTabactive1}>
                      <div className={styles.placeholder} />
                      <div className={styles.forWhatI6}>Destresser</div>
                      <img
                        className={styles.icons24pxnavPanelSleepin}
                        alt=""
                        src="/icons24pxnav-panel-destresseractive@2x.png"
                      />
                    </div>
                    <div className={styles.componentmenuTabinactive4}>
                      <div className={styles.placeholder} />
                      <div className={styles.indicator3} />
                      <img
                        className={styles.icons24pxnavPanelSleepin}
                        alt=""
                        src="/icons24pxnav-panel-moreactive@2x.png"
                      />
                      <div className={styles.forWhatI7}>More</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.details3}>
              <div className={styles.product}>
                <div className={styles.wrapperAppIcon1}>
                  <img
                    className={styles.appIcon1}
                    alt=""
                    src="/app-icon@2x.png"
                  />
                </div>
                <div className={styles.laughscape}>Laughscape</div>
              </div>
              <div className={styles.laughYourselfTo}>
                Laugh yourself to a better mental state.
              </div>
            </div>
          </div>
          <div className={styles.caseStudy2}>
            <div className={styles.image1}>
              <div className={styles.r7hHybm1Parent}>
                <img
                  className={styles.r7hHybm1Icon}
                  alt=""
                  src="/r7hhybm-1@2x.png"
                />
                <img
                  className={styles.uiv8yh8u1Icon}
                  alt=""
                  src="/uiv8yh8u-1@2x.png"
                />
                <div className={styles.childHomeSoloParent}>
                  <div className={styles.childHomeSolo}>
                    <div className={styles.childBuildsSoloZone6}>
                      <img
                        className={styles.dalxysaa1Icon}
                        alt=""
                        src="/dalxysaa-1@2x.png"
                      />
                      <img
                        className={styles.maskGroupIcon11}
                        alt=""
                        src="/mask-group@2x.png"
                      />
                      <img
                        className={styles.navchildBuildsIcon}
                        alt=""
                        src="/navchild-builds@2x.png"
                      />
                      <div className={styles.headerNavmyBuildsMe}>
                        <div className={styles.wrapperHeaderBg}>
                          <img
                            className={styles.headerBgIcon}
                            alt=""
                            src="/header-bg@2x.png"
                          />
                        </div>
                        <div className={styles.barsstatusBarlightStatusB}>
                          <img
                            className={styles.connectionsIcon}
                            alt=""
                            src="/connections@2x.png"
                          />
                          <div className={styles.time}>
                            <b className={styles.time1}>9:41</b>
                          </div>
                        </div>
                        <div className={styles.pairFitnessDevice}>
                          My Builds
                        </div>
                        <div className={styles.group}>
                          <img
                            className={styles.icongroupGrey}
                            alt=""
                            src="/icongroup-grey@2x.png"
                          />
                          <div className={styles.group1}>Group</div>
                        </div>
                        <div className={styles.special}>
                          <div className={styles.special1}>Special</div>
                          <img
                            className={styles.iconspecialGrey}
                            alt=""
                            src="/iconspecial-grey@2x.png"
                          />
                        </div>
                        <div className={styles.me}>
                          <img
                            className={styles.iconprofile}
                            alt=""
                            src="/iconprofile@2x.png"
                          />
                          <div className={styles.me1}>Me</div>
                          <img
                            className={styles.rectangleIcon}
                            alt=""
                            src="/rectangle@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.wrapperOval}>
                    <img
                      className={styles.ovalIcon}
                      alt=""
                      src="/oval@2x.png"
                    />
                  </div>
                  <div className={styles.wrapperOval1}>
                    <img
                      className={styles.ovalIcon}
                      alt=""
                      src="/oval@2x.png"
                    />
                  </div>
                  <div className={styles.wrapperOval2}>
                    <img
                      className={styles.ovalIcon}
                      alt=""
                      src="/oval@2x.png"
                    />
                  </div>
                  <img
                    className={styles.brickfitBiplaneModelNoShadIcon}
                    alt=""
                    src="/brickfit-biplane-model-no-shadow@2x.png"
                  />
                  <img
                    className={styles.brickfitCabinModelNoShadowIcon}
                    alt=""
                    src="/brickfit-cabin-model-no-shadow@2x.png"
                  />
                  <img
                    className={styles.brickfitCampsiteModelNoShaIcon}
                    alt=""
                    src="/brickfit-campsite-model-no-shadow@2x.png"
                  />
                </div>
              </div>
              <div className={styles.wrapperGreenBrick5}>
                <img
                  className={styles.greenBrick5}
                  alt=""
                  src="/green-brick-5@2x.png"
                />
              </div>
              <img
                className={styles.yellowBrick10}
                alt=""
                src="/yellow-brick-10@2x.png"
              />
              <img
                className={styles.orangeBrick3}
                alt=""
                src="/orange-brick-3@2x.png"
              />
              <img
                className={styles.image62Icon}
                alt=""
                src="/image-62@2x.png"
              />
              <img className={styles.trophyIcon} alt="" src="/trophy@2x.png" />
            </div>
            <div className={styles.details4}>
              <div className={styles.wrapperAppIcon}>
                <img className={styles.appIcon} alt="" src="/app-icon@2x.png" />
              </div>
              <div className={styles.brickfitParent}>
                <div className={styles.laughscape}>BrickFit</div>
                <div className={styles.improvingKidsHealth}>
                  Improving kids health outcomes with a LEGO® focused fitness
                  app.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heading4}>
          <span className={styles.storiesAnd}>Some of the products</span>
          <span className={styles.span}>{` `}</span>
          <span className={styles.storiesAnd}>we’ve</span>
          <span className={styles.span}>{` `}</span>
          <i className={styles.insights}>launched</i>
          <span className={styles.span}>{` `}</span>
          <span className={styles.storiesAnd}>so far</span>
        </div>
        <div className={styles.cursorButton}>
          <img
            className={styles.arrowUpRightIcon}
            alt=""
            src="/arrowupright@2x.png"
          />
          <div className={styles.view}>View</div>
        </div>
        <div className={styles.cursorButton1}>
          <img
            className={styles.arrowUpRightIcon1}
            alt=""
            src="/arrowupright@2x.png"
          />
          <div className={styles.view1}>view</div>
        </div>
      </div>
      <div className={styles.testimonials}>
        <div className={styles.testimonials1}>
          <div className={styles.testimonial2}>
            <div className={styles.bg} />
            <div className={styles.profile}>
              <img className={styles.imageIcon3} alt="" src="/image@2x.png" />
              <div className={styles.profileChild} />
            </div>
            <div className={styles.content1}>
              <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
              <div className={styles.copy4}>
                <div className={styles.quote}>
                  <i className={styles.theyFeelMore}>
                    “They feel more like a business partner than a service
                    provider”
                  </i>
                </div>
                <div className={styles.founder}>
                  <div className={styles.steveBanks}>Steve Banks</div>
                  <div className={styles.directorWhatzon}>
                    Director, WhatzOn
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.testimonial3}>
            <div className={styles.bg} />
            <div className={styles.profile1}>
              <img className={styles.imageIcon4} alt="" src="/image@2x.png" />
              <div className={styles.profileItem} />
            </div>
            <div className={styles.content2}>
              <img className={styles.logoIcon1} alt="" src="/logo@2x.png" />
              <div className={styles.copy4}>
                <div className={styles.quote}>
                  <i className={styles.launchpadHasBeen}>
                    “Launchpad has been really invested in our success from the
                    beginning”
                  </i>
                </div>
                <div className={styles.founder1}>
                  <div className={styles.steveBanks}>Marlon Platt</div>
                  <div className={styles.managingDirectorStir}>
                    Managing Director, Stir Crazy Kids
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.testimonial1}>
            <div className={styles.bg2} />
            <div className={styles.profile2}>
              <img className={styles.starIcon} alt="" src="/star@2x.png" />
              <img className={styles.imageIcon5} alt="" src="/image@2x.png" />
              <div className={styles.profileInner} />
            </div>
            <div className={styles.content3}>
              <img className={styles.logoIcon2} alt="" src="/logo@2x.png" />
              <div className={styles.card}>
                <div className={styles.quote}>
                  <i className={styles.eachOfTheir}>
                    “Each of their suggestions significantly improved the
                    product”
                  </i>
                </div>
                <div className={styles.founder}>
                  <div className={styles.steveBanks}>Donna Oehm</div>
                  <div
                    className={styles.founderDirector}
                  >{`Founder & Director, Tickt`}</div>
                </div>
              </div>
            </div>
          </div>
          <img className={styles.starIcon1} alt="" src="/star@2x.png" />
        </div>
        <div className={styles.cursorButton2}>
          <img
            className={styles.arrowUpRightIcon1}
            alt=""
            src="/arrowupright@2x.png"
          />
          <div className={styles.view1}>view</div>
        </div>
        <div className={styles.heading5}>
          <div className={styles.glowWithSarahContainer}>
            <span>·</span>
            <span className={styles.glowWithSarah}>{` GLOW WITH SARAH `}</span>
            <span>·</span>
            <span className={styles.glowWithSarah}>{` TRAIN WITH CASS `}</span>
            <span>·</span>
            <span className={styles.glowWithSarah}>{` MRS EDGAR `}</span>
            <span>·</span>
            <span className={styles.glowWithSarah}> LAUGHSCAPE</span>
            <span> ·</span>
            <span className={styles.glowWithSarah}> BOOKED.AI</span>
            <span> ·</span>
          </div>
          <div className={styles.someOfThe1}>
            Some of the companies we’ve launched
          </div>
          <img className={styles.headingChild} alt="" src="/star-2@2x.png" />
          <div className={styles.heading6}>
            <span className={styles.storiesAnd}>What our</span>
            <span className={styles.span4}>{` `}</span>
            <i className={styles.partners}>partners</i>
            <span className={styles.span}>{` `}</span>
            <span className={styles.storiesAnd}>say about us</span>
          </div>
          <img className={styles.headingItem} alt="" src="/star-2@2x.png" />
        </div>
        <div className={styles.testimonialsChild} />
      </div>
      <div className={styles.bcorp}>
        <img className={styles.gridIcon} alt="" src="/grid@2x.png" />
        <div className={styles.bg3}>
          <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
          <div className={styles.overlay} />
        </div>
        <div className={styles.initiatives}>
          <div className={styles.carbonfit}>
            <img className={styles.imageIcon6} alt="" src="/image@2x.png" />
            <img
              className={styles.carbonfitChild}
              alt=""
              src="/frame-1481@2x.png"
            />
          </div>
          <div className={styles.wit}>
            <div className={styles.womenInTechWrapper}>
              <div className={styles.womenInTech}>Women in Tech_</div>
            </div>
            <div className={styles.div4}>
              01100101 01100011 01101000 01110111 01101111 01101101 01100101
              01101110 00100000 01101001 01101110 00100000 01110100 01100101
              01100011 0110100001100101 01100011 01101000 01110111 01101111
              01101101 01100101 01101110 00100000 01101001 01101110 00100000
              01110100 01100101 01100011 0110100001100101 01100011 01101000
              01110111 01101111 01101101 01100101 01101110 00100000 01101001
              01101110 00100000 01110100 01100101 01100011 0110100001100101
              01100011 01101000 01110111 01101111 01101101 01100101 01101110
              00100000 01101001 01101110 00100000 01110100 01100101 01100011
              01101000
            </div>
          </div>
          <div className={styles.ctg}>
            <img className={styles.ctgChild} alt="" src="/frame-2377@2x.png" />
            <img className={styles.ctgItem} alt="" src="/frame-2378@2x.png" />
            <div className={styles.frameWrapper}>
              <img className={styles.frameIcon} alt="" src="/frame@2x.png" />
            </div>
          </div>
          <div className={styles.neuroverse}>
            <div className={styles.womenInTechWrapper}>
              <img className={styles.frameIcon1} alt="" src="/frame@2x.png" />
            </div>
            <img
              className={styles.neuroverseChild}
              alt=""
              src="/frame-2366@2x.png"
            />
            <img
              className={styles.neuroverseItem}
              alt=""
              src="/frame-2367@2x.png"
            />
          </div>
        </div>
        <img className={styles.arrowIcon1} alt="" src="/arrow@2x.png" />
        <i className={styles.ourImpactInitiatives}>Our impact initiatives</i>
        <img className={styles.starIcon2} alt="" src="/star@2x.png" />
        <div className={styles.content4}>
          <img
            className={styles.maskGroupIcon12}
            alt=""
            src="/mask-group@2x.png"
          />
          <div className={styles.copy7}>
            <div className={styles.heading7}>
              <p className={styles.wereHereTo}>{`We’re here to power `}</p>
              <p className={styles.profitWithPurpose}>
                <span className={styles.profitWith}>{`profit with `}</span>
                <i className={styles.purpose}>purpose</i>
              </p>
            </div>
            <div className={styles.body}>
              Our mission is more than words, it's a pledge to create meaningful
              impact with every step we take.
            </div>
          </div>
          <img className={styles.logoIcon3} alt="" src="/logo@2x.png" />
        </div>
        <img className={styles.starIcon3} alt="" src="/star@2x.png" />
        <div className={styles.cursorButton3}>
          <img
            className={styles.arrowUpRightIcon}
            alt=""
            src="/arrowupright@2x.png"
          />
          <div className={styles.view}>View</div>
        </div>
      </div>
      <div className={styles.awards}>
        <div className={styles.awards1}>
          <div className={styles.award1}>
            <div className={styles.image2}>
              <img
                className={styles.image63Icon}
                alt=""
                src="/image-63@2x.png"
              />
            </div>
            <div className={styles.copy8}>
              <div className={styles.w3Awards}>W3 Awards</div>
              <div className={styles.bestInShow}>Best in show</div>
            </div>
          </div>
          <div className={styles.award1}>
            <img className={styles.imageIcon7} alt="" src="/image@2x.png" />
            <div className={styles.founder}>
              <div className={styles.w3Awards}>Stevie Awards</div>
              <div className={styles.goldBusinessAward}>
                Gold Business Award
              </div>
            </div>
          </div>
          <div className={styles.award1}>
            <div className={styles.image2}>
              <img
                className={styles.image11Icon}
                alt=""
                src="/image-11@2x.png"
              />
              <div className={styles.imageChild} />
            </div>
            <div className={styles.founder}>
              <div className={styles.w3Awards}>GooglePlay</div>
              <div className={styles.goldBusinessAward}>Best Hidden Gem</div>
            </div>
          </div>
          <div className={styles.award1}>
            <div className={styles.image2}>
              <img
                className={styles.image12Icon}
                alt=""
                src="/image-12@2x.png"
              />
            </div>
            <div className={styles.founder}>
              <div className={styles.w3Awards}>Communicator Awards</div>
              <div className={styles.goldBusinessAward}>
                Award of Excellence
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heading8}>
          <span className={styles.storiesAnd}>We’ve launched multiple</span>
          <span className={styles.span}>{` `}</span>
          <span className={styles.awardWinning}>
            <i className={styles.awardWinning1}>award-winning</i>
            <span className={styles.span}>{` `}</span>
          </span>
          <span className={styles.storiesAnd}>{`products `}</span>
        </div>
        <img className={styles.awardsChild} alt="" src="/star-5@2x.png" />
        <img className={styles.starIcon4} alt="" src="/star@2x.png" />
      </div>
      <div className={styles.process}>
        <div className={styles.content5}>
          <div className={styles.animation}>
            <img
              className={styles.circleOutlineIcon}
              alt=""
              src="/circle-outline@2x.png"
            />
            <img
              className={styles.circleElementIcon}
              alt=""
              src="/circle-element@2x.png"
            />
            <img className={styles.starIcon5} alt="" src="/star@2x.png" />
            <div className={styles.bg4} />
            <div className={styles.bg21} />
            <img className={styles.icon} alt="" src="/@2x.png" />
            <div className={styles.client}>
              <div className={styles.youWrapper}>
                <div className={styles.you}>You</div>
              </div>
              <img
                className={styles.clientChild}
                alt=""
                src="/polygon-1@2x.png"
              />
            </div>
            <div className={styles.launchpad}>
              <div className={styles.launchpadWrapper}>
                <div className={styles.you}>Launchpad</div>
              </div>
              <img
                className={styles.launchpadChild}
                alt=""
                src="/polygon-4@2x.png"
              />
            </div>
          </div>
          <div className={styles.copy12}>
            <div className={styles.heading9}>
              <div className={styles.category2}>Stage 1</div>
              <div
                className={styles.researchStrategy}
              >{`Research & Strategy`}</div>
            </div>
            <div className={styles.copy13}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              libero et velit interdum, ac aliquet odio mattis. Class aptent
              taciti adipiscing.
            </div>
          </div>
        </div>
        <div className={styles.heading10}>
          <span className={styles.storiesAnd}>How we help founders bring</span>
          <span className={styles.span}>{` `}</span>
          <span className={styles.storiesAnd}>their</span>
          <span className={styles.span}>{` `}</span>
          <i className={styles.insights}>vision</i>
          <span className={styles.span}>{` `}</span>
          <span className={styles.storiesAnd}>to life</span>
        </div>
      </div>
      <div className={styles.clutch}>
        <img className={styles.mapIcon} alt="" src="/map@2x.png" />
        <div className={styles.badges}>
          <div className={styles.clutch1}>
            <img
              className={styles.clutchBadges1Icon}
              alt=""
              src="/clutchbadges-1@2x.png"
            />
            <div className={styles.content6}>
              <div className={styles.stOutOfContainer}>
                <span className={styles.profitWith}>1st</span>
                <span className={styles.outOf488}> out of 488</span>
              </div>
              <div className={styles.healthWellness}>{`Health & Wellness`}</div>
              <div className={styles.worldwide}>Worldwide</div>
            </div>
          </div>
          <div className={styles.clutch1}>
            <img
              className={styles.clutchBadges1Icon}
              alt=""
              src="/clutchbadges-2@2x.png"
            />
            <div className={styles.content6}>
              <div className={styles.stOutOfContainer}>
                <span className={styles.profitWith}>1st</span>
                <span className={styles.outOf488}> out of 934</span>
              </div>
              <div className={styles.healthWellness}>App Developers</div>
              <div className={styles.worldwide}>Australia</div>
            </div>
          </div>
          <div className={styles.clutch1}>
            <img
              className={styles.clutchBadges1Icon}
              alt=""
              src="/clutchbadges-2@2x.png"
            />
            <div className={styles.content6}>
              <div className={styles.stOutOfContainer}>
                <span className={styles.profitWith}>1st</span>
                <span className={styles.outOf488}> out of 324</span>
              </div>
              <div className={styles.healthWellness}>App Developers</div>
              <div className={styles.worldwide}>New York</div>
            </div>
          </div>
        </div>
        <div className={styles.heading11}>
          <span className={styles.storiesAnd}>We’re in the</span>
          <span className={styles.span}>{` `}</span>
          <i className={styles.insights}>top 0.1%</i>
          <span className={styles.span}>{` `}</span>
          <span className={styles.storiesAnd}>of app</span>
          <span className={styles.span}>{` `}</span>
          <span className={styles.storiesAnd}>
            developers in the entire world
          </span>
        </div>
      </div>
      <div className={styles.banners}>
        <img className={styles.banner2Icon} alt="" src="/banner-2@2x.png" />
        <img className={styles.banner1Icon} alt="" src="/banner-1@2x.png" />
      </div>
      <div className={styles.hero}>
        <img className={styles.videoIcon} alt="" src="/video@2x.png" />
        <div className={styles.scroll}>
          <div className={styles.scroll1}>{`Scroll `}</div>
          <img className={styles.arrowIcon2} alt="" src="/arrow@2x.png" />
        </div>
        <div className={styles.products1}>products</div>
        <img className={styles.starIcon6} alt="" src="/star@2x.png" />
        <div className={styles.tech}>tech</div>
        <i className={styles.successful}>successful</i>
        <img className={styles.lineIcon} alt="" src="/line@2x.png" />
        <div className={styles.ideasInto}>ideas into</div>
        <div className={styles.weTransformInnovativeContainer}>
          <span className={styles.profitWith}>We</span>
          <span className={styles.transform}>{` `}</span>
          <i className={styles.transform}>{`transform `}</i>
          <span className={styles.profitWith}>innovative</span>
        </div>
      </div>
      <div className={styles.topNav}>
        <img className={styles.lpLogoIcon} alt="" src="/lp-logo@2x.png" />
        <div className={styles.right}>
          <div className={styles.links}>
            <div className={styles.brickfit}>Home</div>
            <div className={styles.about} onClick={onAboutTextClick}>
              About
            </div>
            <div className={styles.about} onClick={onCaseStudiesTextClick}>
              Case Studies
            </div>
            <div className={styles.about} onClick={onImpactTextClick}>
              Impact
            </div>
            <div className={styles.about} onClick={onInsightsTextClick}>
              Insights
            </div>
          </div>
          <div className={styles.button1}>
            <div className={styles.workWithUs}>Work with us</div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.footer}>
          <img
            className={styles.socialLinkedin}
            alt=""
            src="/social--linkedin@2x.png"
          />
          <div className={styles.links1}>
            <div className={styles.button2}>
              <div className={styles.brickfit}>Home</div>
            </div>
            <div className={styles.button2}>
              <div className={styles.brickfit}>About</div>
            </div>
            <div className={styles.button2}>
              <div className={styles.brickfit}>Case Studies</div>
            </div>
            <div className={styles.button2}>
              <div className={styles.brickfit}>Impact</div>
            </div>
            <div className={styles.button2}>
              <div className={styles.brickfit}>Insights</div>
            </div>
            <div className={styles.button2}>
              <div className={styles.brickfit}>Careers</div>
            </div>
            <div className={styles.button2}>
              <div className={styles.brickfit}>Privacy Policy</div>
            </div>
          </div>
          <div className={styles.offices}>
            <img className={styles.dividerIcon} alt="" src="/divider@2x.png" />
            <div className={styles.offices1}>
              <div className={styles.aus}>
                <div className={styles.copy14}>
                  <div className={styles.melbourneAustralia}>
                    Melbourne, Australia
                  </div>
                  <div className={styles.level3534Container}>
                    <p className={styles.profitWithPurpose}>
                      Level 3, 534 Church Street
                    </p>
                    <p className={styles.profitWithPurpose}>Cremorne, 3121</p>
                    <p className={styles.profitWithPurpose}>
                      Victoria, Australia
                    </p>
                    <p className={styles.profitWithPurpose}>+61 1300 277 434</p>
                  </div>
                </div>
                <div className={styles.thu1154}>THU • 11:54 AM</div>
              </div>
              <div className={styles.aus}>
                <div className={styles.copy14}>
                  <div className={styles.melbourneAustralia}>New York, USA</div>
                  <div className={styles.level3534Container}>
                    <p className={styles.profitWithPurpose}>
                      Level 2, 234 Fifth Ave
                    </p>
                    <p className={styles.profitWithPurpose}>New York, 10001</p>
                    <p className={styles.profitWithPurpose}>
                      NY, United States
                    </p>
                    <p className={styles.profitWithPurpose}>
                      +1 (610) 999-7631
                    </p>
                  </div>
                </div>
                <div className={styles.thu1154}>THU • 11:54 AM</div>
              </div>
              <div className={styles.aus}>
                <div className={styles.copy14}>
                  <div className={styles.melbourneAustralia}>London, UK</div>
                  <div className={styles.level3534Container}>
                    <p className={styles.profitWithPurpose}>[Address 1]</p>
                    <p className={styles.profitWithPurpose}>[Address 2]</p>
                    <p className={styles.profitWithPurpose}>[Address 3]</p>
                    <p className={styles.profitWithPurpose}>[Phone number]</p>
                  </div>
                </div>
                <div className={styles.thu1154}>THU • 11:54 AM</div>
              </div>
              <div className={styles.aus}>
                <div className={styles.copy14}>
                  <div className={styles.melbourneAustralia}>
                    Bengaluru, India
                  </div>
                  <div className={styles.level3534Container}>
                    <p
                      className={styles.profitWithPurpose}
                    >{`Gopala Krishna Complex `}</p>
                    <p className={styles.profitWithPurpose}>
                      45/3 Mahatma Gandhi Rd
                    </p>
                    <p
                      className={styles.profitWithPurpose}
                    >{`Bengaluru, Karnataka `}</p>
                    <p className={styles.profitWithPurpose}>560025, India</p>
                  </div>
                </div>
                <div className={styles.thu11543}>THU • 11:54 AM</div>
              </div>
              <div className={styles.philippines}>
                <div className={styles.copy18}>
                  <div className={styles.manilaThePhilippines}>
                    Manila, The Philippines
                  </div>
                  <div className={styles.worldwide}>
                    <p className={styles.profitWithPurpose}>5F Phinma Plaza</p>
                    <p className={styles.profitWithPurpose}>
                      39 Plaza Drive, Rockwell Centre
                    </p>
                    <p className={styles.profitWithPurpose}>
                      Makati City, Metro Manila
                    </p>
                  </div>
                </div>
                <div className={styles.thu11544}>THU • 11:54 AM</div>
              </div>
            </div>
            <img className={styles.dividerIcon} alt="" src="/divider@2x.png" />
          </div>
          <div className={styles.badges1}>
            <div className={styles.launchpadAppDevelopment2022}>
              <img className={styles.forwardItem} alt="" src="/group@2x.png" />
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
            <img className={styles.logoIcon4} alt="" src="/logo@2x.png" />
            <div className={styles.launchpadAppDevelopment20221}>
              <img className={styles.forwardItem} alt="" src="/group@2x.png" />
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
            <div className={styles.badges2}>
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
            <div className={styles.copy19}>
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
                <p className={styles.profitWithPurpose}>All rights reserved.</p>
                <p className={styles.profitWithPurpose}>©️ Launchpad 2023</p>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.bg5} />
          <div className={styles.bg5}>
            <img className={styles.bgIcon1} alt="" src="/bg@2x.png" />
            <div className={styles.overlay1} />
          </div>
          <img className={styles.gridIcon1} alt="" src="/grid@2x.png" />
          <div className={styles.content9}>
            <div className={styles.copy8}>
              <div className={styles.heading12}>
                <span className={styles.storiesAnd}>Have an</span>
                <span className={styles.span}>{` `}</span>
                <i className={styles.insights}>idea?</i>
              </div>
            </div>
            <div className={styles.button9}>
              <div className={styles.letsChat}>Let’s chat</div>
            </div>
          </div>
        </div>
        <div className={styles.banners1}>
          <img className={styles.banner2Icon} alt="" src="/banner-2@2x.png" />
          <img className={styles.banner1Icon} alt="" src="/banner-1@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default Home;
