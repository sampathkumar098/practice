import { FunctionComponent } from "react";
import styles from "./CareerDesktop.module.css";

const CareerDesktop: FunctionComponent = () => {
  return (
    <div className={styles.careerDesktop}>
      <div className={styles.currentOpenings}>
        <div className={styles.jobs}>
          <div className={styles.tabs}>
            <div className={styles.allWrapper}>
              <div className={styles.all}>All</div>
            </div>
            <div className={styles.productWrapper}>
              <div className={styles.product}>Product</div>
            </div>
            <div className={styles.productWrapper}>
              <div className={styles.product}>Design</div>
            </div>
            <div className={styles.productWrapper}>
              <div className={styles.product}>Engineering</div>
            </div>
            <div className={styles.productWrapper}>
              <div className={styles.product}>Operation</div>
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.job1}>
              <div className={styles.container}>
                <div className={styles.content}>
                  <div className={styles.info}>
                    <div className={styles.seniorDevopsEngineer}>
                      Senior DevOps Engineer
                    </div>
                    <div className={styles.stepIntoThe}>
                      Step into the role of Senior DevOps Engineer at Launchpad
                      and drive innovation by automating development operations
                      and optimizing software deployment. Collaborate on
                      designing seamless integration pipelines and ensuring
                      system resilience with cutting-edge technologies.
                    </div>
                  </div>
                  <img
                    className={styles.arrowUpRightIcon}
                    alt=""
                    src="/arrowupright@2x.png"
                  />
                </div>
                <div className={styles.tags}>
                  <div className={styles.type}>
                    <div className={styles.fullTime}>Full time</div>
                  </div>
                  <div className={styles.type}>
                    <div className={styles.fullTime}>100% remote</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.job1}>
              <div className={styles.container}>
                <div className={styles.content}>
                  <div className={styles.info}>
                    <div className={styles.seniorDevopsEngineer}>
                      Sr Growth Marketer
                    </div>
                    <div className={styles.stepIntoThe}>
                      Unleash the power of data as our Senior Growth Analytics
                      Specialist, where your insights will drive strategic
                      decisions and fuel our mission to innovate and excel.
                    </div>
                  </div>
                  <img
                    className={styles.arrowUpRightIcon}
                    alt=""
                    src="/arrowupright@2x.png"
                  />
                </div>
                <div className={styles.tags}>
                  <div className={styles.type}>
                    <div className={styles.fullTime}>Full time</div>
                  </div>
                  <div className={styles.type}>
                    <div className={styles.fullTime}>100% remote</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.job1}>
              <div className={styles.container}>
                <div className={styles.content}>
                  <div className={styles.info}>
                    <div className={styles.seniorDevopsEngineer}>
                      Software QA Engineer - Lead
                    </div>
                    <div className={styles.stepIntoThe}>
                      As a Software QA Engineer - Lead, you'll be at the
                      forefront of enhancing software quality through
                      state-of-the-art automated testing. Forge robust testing
                      strategies and dissolve bottlenecks in collaboration with
                      diverse stakeholders.
                    </div>
                  </div>
                  <img
                    className={styles.arrowUpRightIcon}
                    alt=""
                    src="/arrowupright@2x.png"
                  />
                </div>
                <div className={styles.tags}>
                  <div className={styles.type}>
                    <div className={styles.fullTime}>Full time</div>
                  </div>
                  <div className={styles.type}>
                    <div className={styles.fullTime}>100% remote</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heading}>
          <div className={styles.current}>Current</div>
          <img className={styles.lpBadgeIcon} alt="" src="/lp-badge@2x.png" />
          <div className={styles.openings}>Openings</div>
        </div>
      </div>
      <div className={styles.benefitsCarbonfitNKitkat}>
        <div className={styles.carbonfitKitkat}>
          <div className={styles.carbonfit}>
            <div className={styles.card}>
              <div className={styles.cardChild} />
              <img className={styles.unionIcon} alt="" src="/union@2x.png" />
              <img
                className={styles.iphoneMockupIcon}
                alt=""
                src="/iphone-mockup@2x.png"
              />
              <div className={styles.stat1Parent}>
                <div className={styles.stat1}>
                  <div className={styles.div}>10,000</div>
                  <div className={styles.dailyStepsTarget}>
                    Daily steps target
                  </div>
                </div>
                <div className={styles.stat1}>
                  <div className={styles.div}>110</div>
                  <div className={styles.dailyStepsTarget}>
                    Number of trees planted
                  </div>
                </div>
              </div>
              <div className={styles.carbonfit1}>CarbonFit</div>
            </div>
          </div>
          <div className={styles.kitkat}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.rectangleGroup}>
                <div className={styles.groupChild} />
                <img
                  className={styles.maxHarlynkingZaitoB0afsUnsIcon}
                  alt=""
                  src="/maxharlynkingzaitob0afsunsplash-1@2x.png"
                />
                <div className={styles.groupItem} />
              </div>
              <img className={styles.pathIcon} alt="" src="/path@2x.png" />
              <img className={styles.starIcon} alt="" src="/star@2x.png" />
              <div className={styles.kitKatDays}>Kit-Kat Days</div>
              <div className={styles.daysParent}>
                <div className={styles.days}>
                  <span className={styles.daysTxt}>
                    <span>
                      <span className={styles.span}>96</span>
                    </span>
                    <span className={styles.days1}>
                      <span>{` `}</span>
                      <span>days</span>
                    </span>
                  </span>
                </div>
                <div className={styles.extraDaysOff}>
                  Extra days off enjoyed by the team since 2022
                </div>
              </div>
              <img
                className={styles.circleElementIcon}
                alt=""
                src="/circle-element@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.benefits}>
          <div className={styles.benefitsChild} />
          <div className={styles.carosuel}>
            <div className={styles.block}>
              <img className={styles.icon} alt="" src="/icon@2x.png" />
              <div className={styles.copy}>
                <div className={styles.teamMembersHave}>
                  Team members have equity
                </div>
                <div className={styles.weWantEveryone}>
                  We want everyone at Launchpad benefit from our growth and
                  success.
                </div>
              </div>
            </div>
            <div className={styles.block}>
              <img className={styles.icon} alt="" src="/icon@2x.png" />
              <div className={styles.copy}>
                <div className={styles.teamMembersHave}>Flexible working</div>
                <div className={styles.weWantEveryone}>
                  Want to work from the beach? We don’t mind! Work from wherever
                  you want
                </div>
              </div>
            </div>
          </div>
          <div className={styles.copyParent}>
            <div className={styles.copy2}>
              <div className={styles.benefitsAtLaunchpadContainer}>
                <p className={styles.benefitsAt}>Benefits at</p>
                <p className={styles.launchpad}>Launchpad</p>
              </div>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet consectetur. Amet massa sed lectus
                dictum faucibus quis. Cursus elit lorem elit vitae tincidunt
                vulputate senectus libero fringilla.
              </div>
            </div>
            <div className={styles.cursorButtonParent}>
              <img
                className={styles.cursorButtonIcon}
                alt=""
                src="/cursor-button@2x.png"
              />
              <div className={styles.cursorButton}>
                <img
                  className={styles.arrowUpRightIcon3}
                  alt=""
                  src="/arrowupright@2x.png"
                />
                <div className={styles.view}>view</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.impactfulProducts}>
        <div className={styles.itTakesGreatContainer}>
          <span
            className={styles.itTakes}
          >{`It takes      great people to create `}</span>
          <i className={styles.impactful}>impactful</i>
          <span className={styles.span1}>{` `}</span>
          <span className={styles.products}>products</span>
        </div>
        <div className={styles.ourProductsAreOnlyAsGoodParent}>
          <div className={styles.ourProductsAre}>
            Our products are only as good as the people that are making it
            happen. That’s why we hire the best talent no matter the location
            and invest in creating a happy environment where everyone thrives.
          </div>
          <div className={styles.logoParent}>
            <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
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
          </div>
        </div>
        <img className={styles.starIcon1} alt="" src="/star@2x.png" />
      </div>
      <div className={styles.lpLogoParent}>
        <img className={styles.lpLogoIcon} alt="" src="/lp-logo@2x.png" />
        <div className={styles.frameParent}>
          <div className={styles.homeParent}>
            <div className={styles.home}>Home</div>
            <div className={styles.home}>About</div>
            <div className={styles.home}>Process</div>
            <div className={styles.home}>Portfolio</div>
            <div className={styles.home}>Insights</div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.workWithUsWrapper}>
              <div className={styles.workWithUs}>Work with us</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ourPurpose}>
        <div className={styles.productsThatMakeParent}>
          <div className={styles.productsThatMake}>products that make</div>
          <div className={styles.productsThatMake}>positive impact</div>
        </div>
      </div>
      <div className={styles.joinUsBadge}>
        <div className={styles.j}>J</div>
        <div className={styles.o}>O</div>
        <div className={styles.i}>I</div>
        <div className={styles.n}>N</div>
        <div className={styles.text}>{` `}</div>
        <div className={styles.o1}>O</div>
        <div className={styles.u}>U</div>
        <div className={styles.r}>R</div>
        <div className={styles.text1}>{` `}</div>
        <div className={styles.m}>M</div>
        <div className={styles.i1}>I</div>
        <div className={styles.s}>S</div>
        <div className={styles.s1}>S</div>
        <div className={styles.i2}>I</div>
        <div className={styles.o2}>O</div>
        <div className={styles.n1}>N</div>
        <div className={styles.text2}>{` `}</div>
        <img className={styles.unionIcon1} alt="" src="/union@2x.png" />
      </div>
      <div className={styles.heading1}>
        <div className={styles.joinUsAnd}>Join us and build products</div>
        <div className={styles.thatCreateParent}>
          <div className={styles.current}>that create</div>
          <img className={styles.starIcon2} alt="" src="/star@2x.png" />
          <i className={styles.positiveImpact1}>positive impact</i>
        </div>
      </div>
      <div className={styles.doesPartneringWithContainer}>
        <span
          className={styles.doesPartneringWith}
        >{`Does partnering with influential founders and brands to create digital products that make a real impact in people's lives sound like your next challenge? `}</span>
        <span className={styles.applyBelow}>Apply Below</span>
      </div>
      <div className={styles.values}>
        <div className={styles.values1}>
          <div className={styles.frameGroup}>
            <div className={styles.number}>
              <div className={styles.div2}>01</div>
            </div>
            <div className={styles.loveWhatYouDoParent}>
              <div className={styles.loveWhatYou}>Generate impact</div>
              <div className={styles.body}>
                Building new tech companies takes grit. We make sure to have
                fun, celebrate our wins and have strong meaningful
                relationships.
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.number}>
              <div className={styles.div2}>02</div>
            </div>
            <div className={styles.loveWhatYouDoParent}>
              <div className={styles.loveWhatYou}>Challenge assumptions</div>
              <div className={styles.body}>
                You actively question every assumption you think you ‘know’
                about a given problem or scenario, and then create new knowledge
                and solutions from scratch.
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.number}>
              <div className={styles.div2}>03</div>
            </div>
            <div className={styles.loveWhatYouDoParent}>
              <div className={styles.loveWhatYou}>Never stop learning</div>
              <div className={styles.body}>
                We live by the 5 hour rule. You are a lifelong student. You
                respect the ideas of others and are always open to personal
                growth opportunities.
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.number}>
              <div className={styles.div2}>04</div>
            </div>
            <div className={styles.loveWhatYouDoParent}>
              <div className={styles.loveWhatYou}>Love what you do</div>
              <div className={styles.body}>
                Building new tech companies takes grit. We make sure to have
                fun, celebrate our wins and have strong meaningful
                relationships.
              </div>
            </div>
          </div>
        </div>
        <img className={styles.starIcon3} alt="" src="/star@2x.png" />
        <div className={styles.ourGuidingPrinciplesContainer}>
          <span className={styles.products}>Our guiding</span>
          <span className={styles.span1}>{` `}</span>
          <i className={styles.principles}>principles</i>
        </div>
      </div>
      <div className={styles.offices}>
        <img className={styles.mapIcon} alt="" src="/map@2x.png" />
        <div className={styles.ourOfficesAroundContainer}>
          <span className={styles.products}>Our</span>
          <span className={styles.span1}>{` `}</span>
          <i className={styles.principles}>offices</i>
          <span className={styles.span1}>{` `}</span>
          <span className={styles.products}>around the world</span>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.nyc1Wrapper}>
              <img className={styles.nyc1Icon} alt="" src="/nyc-1@2x.png" />
            </div>
            <div className={styles.newYorkUnited}>New York, United States</div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.nyc1Wrapper}>
              <img
                className={styles.creativecubes2Icon}
                alt=""
                src="/creativecubes-2@2x.png"
              />
            </div>
            <div className={styles.newYorkUnited}>Melbourne, Australia</div>
          </div>
          <div className={styles.frameDiv}>
            <img
              className={styles.coworkingsSpaceBerlinSchoenIcon}
              alt=""
              src="/coworkingsspaceberlinschoenebergkreuzbergsteglitzmittedistrictone-1@2x.png"
            />
            <div className={styles.newYorkUnited}>Berlin, Germany</div>
          </div>
        </div>
        <img className={styles.dotsIcon} alt="" src="/dots@2x.png" />
        <div className={styles.cursorButton1}>
          <img
            className={styles.arrowUpRightIcon4}
            alt=""
            src="/arrowupright@2x.png"
          />
          <div className={styles.view1}>view</div>
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
            <div className={styles.button}>
              <div className={styles.home}>Home</div>
            </div>
            <div className={styles.button}>
              <div className={styles.home}>About</div>
            </div>
            <div className={styles.button}>
              <div className={styles.home}>Case Studies</div>
            </div>
            <div className={styles.button}>
              <div className={styles.home}>Impact</div>
            </div>
            <div className={styles.button}>
              <div className={styles.home}>Insights</div>
            </div>
            <div className={styles.button}>
              <div className={styles.home}>Careers</div>
            </div>
            <div className={styles.button}>
              <div className={styles.home}>Privacy Policy</div>
            </div>
          </div>
          <div className={styles.offices2}>
            <img className={styles.dividerIcon} alt="" src="/divider@2x.png" />
            <div className={styles.offices3}>
              <div className={styles.aus}>
                <div className={styles.copy6}>
                  <div className={styles.newYorkUsa}>Melbourne, Australia</div>
                  <div className={styles.level3534Container}>
                    <p className={styles.benefitsAt}>
                      Level 3, 534 Church Street
                    </p>
                    <p className={styles.benefitsAt}>Cremorne, 3121</p>
                    <p className={styles.benefitsAt}>Victoria, Australia</p>
                    <p className={styles.benefitsAt}>+61 1300 277 434</p>
                  </div>
                </div>
                <div className={styles.thu1154}>THU • 11:54 AM</div>
              </div>
              <div className={styles.aus}>
                <div className={styles.copy6}>
                  <div className={styles.newYorkUsa}>New York, USA</div>
                  <div className={styles.level3534Container}>
                    <p className={styles.benefitsAt}>Level 2, 234 Fifth Ave</p>
                    <p className={styles.benefitsAt}>New York, 10001</p>
                    <p className={styles.benefitsAt}>NY, United States</p>
                    <p className={styles.benefitsAt}>+1 (610) 999-7631</p>
                  </div>
                </div>
                <div className={styles.thu1154}>THU • 11:54 AM</div>
              </div>
              <div className={styles.aus}>
                <div className={styles.copy6}>
                  <div className={styles.newYorkUsa}>London, UK</div>
                  <div className={styles.level3534Container}>
                    <p className={styles.benefitsAt}>[Address 1]</p>
                    <p className={styles.benefitsAt}>[Address 2]</p>
                    <p className={styles.benefitsAt}>[Address 3]</p>
                    <p className={styles.benefitsAt}>[Phone number]</p>
                  </div>
                </div>
                <div className={styles.thu1154}>THU • 11:54 AM</div>
              </div>
              <div className={styles.aus}>
                <div className={styles.copy6}>
                  <div className={styles.newYorkUsa}>Bengaluru, India</div>
                  <div className={styles.level3534Container}>
                    <p
                      className={styles.benefitsAt}
                    >{`Gopala Krishna Complex `}</p>
                    <p className={styles.benefitsAt}>45/3 Mahatma Gandhi Rd</p>
                    <p
                      className={styles.benefitsAt}
                    >{`Bengaluru, Karnataka `}</p>
                    <p className={styles.benefitsAt}>560025, India</p>
                  </div>
                </div>
                <div className={styles.thu11543}>THU • 11:54 AM</div>
              </div>
              <div className={styles.philippines}>
                <div className={styles.copy10}>
                  <div className={styles.manilaThePhilippines}>
                    Manila, The Philippines
                  </div>
                  <div className={styles.fPhinmaPlazaContainer}>
                    <p className={styles.benefitsAt}>5F Phinma Plaza</p>
                    <p className={styles.benefitsAt}>
                      39 Plaza Drive, Rockwell Centre
                    </p>
                    <p className={styles.benefitsAt}>
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
            <div className={styles.launchpadAppDevelopment20221}>
              <img className={styles.groupIcon} alt="" src="/group@2x.png" />
              <div className={styles.groupContainer}>
                <img className={styles.groupIcon5} alt="" src="/group@2x.png" />
                <div className={styles.groupParent1}>
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
            <img className={styles.logoIcon1} alt="" src="/logo@2x.png" />
            <div className={styles.launchpadAppDevelopment20222}>
              <img className={styles.groupIcon} alt="" src="/group@2x.png" />
              <div className={styles.groupParent2}>
                <img className={styles.groupIcon9} alt="" src="/group@2x.png" />
                <div className={styles.groupParent3}>
                  <img
                    className={styles.groupIcon10}
                    alt=""
                    src="/group@2x.png"
                  />
                  <img
                    className={styles.groupIcon11}
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
            <div className={styles.copy11}>
              <div className={styles.launchpadIsA}>
                Launchpad is a proudly inclusive organisation and an ally of the
                LGBTIQ+ and neurodiverse community.
              </div>
            </div>
          </div>
          <div className={styles.logo}>
            <img className={styles.lpLogoIcon} alt="" src="/lp-logo@2x.png" />
            <div className={styles.allRightsReservedContainer}>
              <span className={styles.daysTxt}>
                <p className={styles.benefitsAt}>All rights reserved.</p>
                <p className={styles.benefitsAt}>©️ Launchpad 2023</p>
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
          <img className={styles.gridIcon} alt="" src="/grid@2x.png" />
          <div className={styles.content3}>
            <div className={styles.copy12}>
              <div className={styles.cantFindParent}>
                <div className={styles.current}>Can’t find</div>
                <img className={styles.eyeIcon} alt="" src="/eye@2x.png" />
                <div className={styles.current}>what you’re</div>
              </div>
              <div className={styles.lookingForWrapper}>
                <div className={styles.current}>looking for?</div>
              </div>
            </div>
            <div className={styles.button7}>
              <div className={styles.getInTouch}>Get in touch</div>
            </div>
          </div>
        </div>
        <div className={styles.banners}>
          <img className={styles.banner2Icon} alt="" src="/banner-2@2x.png" />
          <img className={styles.banner1Icon} alt="" src="/banner-1@2x.png" />
        </div>
      </div>
      <img
        className={styles.d5ca4c79363923eb6ce5Image31Icon}
        alt=""
        src="/6319d5ca4c79363923eb6ce5-image3-1@2x.png"
      />
      <img
        className={styles.fa297a96d6e1be26ababTeamImagIcon}
        alt=""
        src="/6372fa297a96d6e1be26abab-teamimage2-1@2x.png"
      />
      <img
        className={styles.d5d6f8ea5f01c31e48dcImage61Icon}
        alt=""
        src="/6319d5d6f8ea5f01c31e48dc-image6-1@2x.png"
      />
      <img
        className={styles.fc1dc2ac772ffa729d40Play1Icon}
        alt=""
        src="/6372fc1dc2ac772ffa729d40-play-1@2x.png"
      />
    </div>
  );
};

export default CareerDesktop;
