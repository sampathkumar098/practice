import { FunctionComponent } from "react";
import styles from "./AboutMobile.module.css";

const AboutMobile: FunctionComponent = () => {
  return (
    <div className={styles.aboutMobile}>
      <div className={styles.gradient} />
      <div className={styles.awards}>
        <div className={styles.theAwardsThatContainer}>
          <span className={styles.the}>{`The `}</span>
          <i className={styles.awards1}>{`awards `}</i>
          <span className={styles.the}>that we’ve won</span>
        </div>
        <div className={styles.awards2}>
          <div className={styles.frameParent}>
            <div className={styles.image63Wrapper}>
              <img
                className={styles.image63Icon}
                alt=""
                src="/image-63@2x.png"
              />
            </div>
            <div className={styles.w3AwardsParent}>
              <div className={styles.w3Awards}>W3 Awards</div>
              <div className={styles.bestInShow}>Best in show</div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/frame-1549@2x.png"
            />
            <div className={styles.stevieAwardsParent}>
              <div className={styles.w3Awards}>Stevie Awards</div>
              <div className={styles.goldBusinessAward}>
                Gold Business Award
              </div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.image63Wrapper}>
              <img
                className={styles.image11Icon}
                alt=""
                src="/image-11@2x.png"
              />
              <div className={styles.frameItem} />
            </div>
            <div className={styles.stevieAwardsParent}>
              <div className={styles.w3Awards}>GooglePlay</div>
              <div className={styles.goldBusinessAward}>Best Hidden Gem</div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.image63Wrapper}>
              <img
                className={styles.image12Icon}
                alt=""
                src="/image-12@2x.png"
              />
            </div>
            <div className={styles.stevieAwardsParent}>
              <div className={styles.w3Awards}>Communicator Awards</div>
              <div className={styles.goldBusinessAward}>
                Award of Excellence
              </div>
            </div>
          </div>
        </div>
        <div className={styles.additionalAwards}>
          <div className={styles.award1}>
            <div className={styles.container}>
              <img
                className={styles.clutchLogo1Icon}
                alt=""
                src="/clutchlogo-1@2x.png"
              />
              <div className={styles.copy}>
                <div className={styles.bestExperimentalAnd}>
                  Best Experimental and Innovative
                </div>
                <div className={styles.brickfitKids}>Brickfit Kids</div>
                <div className={styles.brickfitKids}>2022</div>
              </div>
            </div>
            <div className={styles.divider} />
          </div>
          <div className={styles.award1}>
            <div className={styles.container}>
              <img
                className={styles.clutchLogo1Icon}
                alt=""
                src="/clutchlogo-1@2x.png"
              />
              <div className={styles.copy}>
                <div
                  className={styles.bestExperimentalAnd}
                >{`General Health & Wellbeing (Gold)`}</div>
                <div className={styles.brickfitKids}>Liminal Wellbeing</div>
                <div className={styles.brickfitKids}>2022</div>
              </div>
            </div>
            <div className={styles.divider} />
          </div>
          <div className={styles.award1}>
            <div className={styles.container}>
              <img
                className={styles.clutchLogo1Icon}
                alt=""
                src="/clutchlogo-1@2x.png"
              />
              <div className={styles.copy}>
                <div className={styles.bestExperimentalAnd}>
                  Victorian Training Awards Finalist
                </div>
                <div className={styles.brickfitKids}>OzTruck</div>
                <div className={styles.brickfitKids}>2021</div>
              </div>
            </div>
            <div className={styles.divider} />
          </div>
          <div className={styles.award1}>
            <div className={styles.container}>
              <img
                className={styles.clutchLogo1Icon}
                alt=""
                src="/clutchlogo-1@2x.png"
              />
              <div className={styles.copy}>
                <div className={styles.bestExperimentalAnd}>
                  Top Mobile App Developers
                </div>
                <div className={styles.brickfitKids}>Launchpad</div>
                <div className={styles.brickfitKids}>2022</div>
              </div>
            </div>
            <div className={styles.divider} />
          </div>
        </div>
      </div>
      <div className={styles.topNav}>
        <img className={styles.lpLogoIcon} alt="" src="/lp-logo@2x.png" />
        <img className={styles.menuIcon} alt="" src="/menu@2x.png" />
      </div>
      <div className={styles.weHelpVisionariesContainer}>
        <span className={styles.weHelp}>
          <span className={styles.buildTechProducts}>We help</span>
          <span className={styles.span}>{` `}</span>
        </span>
        <i className={styles.span}>
          <span className={styles.visionaries1}>visionaries</span>
        </i>
        <span className={styles.weHelp}>
          <i className={styles.span}>{` `}</i>
          <span
            className={styles.buildTechProducts}
          >{`build tech products that `}</span>
        </span>
        <i className={styles.benefit}>benefit</i>
        <span className={styles.usAll}> us all</span>
      </div>
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
      <div className={styles.testimonials}>
        <div className={styles.testimonial3}>
          <div className={styles.bg} />
          <div className={styles.profile}>
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            <div className={styles.profileChild} />
          </div>
          <div className={styles.content}>
            <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
            <div className={styles.copy4}>
              <div className={styles.quote}>
                <i className={styles.launchpadHasBeen}>
                  “Launchpad has been really invested in our success from the
                  beginning”
                </i>
              </div>
              <div className={styles.founder}>
                <div className={styles.marlonPlatt}>Marlon Platt</div>
                <div className={styles.managingDirectorStir}>
                  Managing Director, Stir Crazy Kids
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.testimonial2}>
          <div className={styles.bg1} />
          <div className={styles.profile}>
            <img className={styles.imageIcon1} alt="" src="/image@2x.png" />
            <div className={styles.profileItem} />
          </div>
          <div className={styles.content}>
            <img className={styles.logoIcon1} alt="" src="/logo@2x.png" />
            <div className={styles.copy4}>
              <div className={styles.quote}>
                <i className={styles.theyFeelMore}>
                  “They feel more like a business partner than a service
                  provider”
                </i>
              </div>
              <div className={styles.founder}>
                <div className={styles.marlonPlatt}>Steve Banks</div>
                <div className={styles.directorWhatzon}>Director, WhatzOn</div>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.starIcon} alt="" src="/star@2x.png" />
      </div>
      <div className={styles.bcorp}>
        <img className={styles.gridIcon} alt="" src="/grid@2x.png" />
        <div className={styles.bg2}>
          <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
          <div className={styles.overlay} />
        </div>
        <div className={styles.initiatives}>
          <div className={styles.carbonfit}>
            <img className={styles.imageIcon2} alt="" src="/image@2x.png" />
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
        <img className={styles.arrowIcon} alt="" src="/arrow@2x.png" />
        <i className={styles.ourImpactInitiatives}>Our impact initiatives</i>
        <div className={styles.content2}>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
          <div className={styles.copy6}>
            <div className={styles.heading}>
              <p className={styles.wereHereTo}>{`We’re here to power `}</p>
              <p className={styles.profitWithPurpose}>
                <span className={styles.the}>{`profit with `}</span>
                <i className={styles.purpose}>purpose</i>
              </p>
            </div>
            <div className={styles.body}>
              Our mission is more than words, it's a pledge to create meaningful
              impact with every step we take.
            </div>
          </div>
          <img className={styles.logoIcon2} alt="" src="/logo@2x.png" />
        </div>
      </div>
      <div className={styles.whatOurPartnersSayAboutUsParent}>
        <div className={styles.whatOurPartnersContainer}>
          <span className={styles.the}>{`What our `}</span>
          <i className={styles.purpose}>partners</i>
          <span className={styles.the}> say about us</span>
        </div>
        <div className={styles.someOfThe}>
          Some of the companies we’ve launched
        </div>
        <div className={styles.glowWithSarahContainer1}>
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
        <div className={styles.bgParent}>
          <div className={styles.bg3} />
          <div className={styles.bg4} />
          <div className={styles.bgGroup}>
            <div className={styles.bg5} />
            <img className={styles.imageIcon3} alt="" src="/image@2x.png" />
            <div className={styles.frameInner} />
            <div className={styles.content3}>
              <img className={styles.logoIcon3} alt="" src="/logo@2x.png" />
              <div className={styles.copy7}>
                <div className={styles.quote}>
                  <i className={styles.eachOfTheir}>
                    “Each of their suggestions significantly improved the
                    product”
                  </i>
                </div>
                <div className={styles.founder2}>
                  <div className={styles.donnaOehm}>Donna Oehm</div>
                  <div
                    className={styles.founderDirector}
                  >{`Founder & Director, Tickt`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.frameChild1} alt="" src="/star-2@2x.png" />
        <img className={styles.frameChild2} alt="" src="/star-2@2x.png" />
      </div>
      <div className={styles.bottom}>
        <div className={styles.footer}>
          <img className={styles.lpLogoIcon1} alt="" src="/lp-logo@2x.png" />
          <div className={styles.inclusive}>
            <div className={styles.pxLgbtqRainbowFlagQuasarParent}>
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
            <div className={styles.launchpadIsAProudlyInclusiWrapper}>
              <div className={styles.launchpadIsA}>
                Launchpad is a proudly inclusive organisation and an ally of the
                LGBTIQ+ and neurodiverse community.
              </div>
            </div>
          </div>
          <div className={styles.inclusive}>
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
            <div className={styles.launchpadIsA}>
              We acknowledge the traditional custodians of the land on which we
              live and work and pay respects to elders past, present and to
              emerging leaders.
            </div>
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
            <img className={styles.logoIcon4} alt="" src="/logo@2x.png" />
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
          </div>
          <div className={styles.offices}>
            <div className={styles.melbourneAustraliaParent}>
              <div className={styles.melbourneAustralia}>
                Melbourne, Australia
              </div>
              <div className={styles.level3534Container}>
                <p className={styles.profitWithPurpose}>
                  Level 3, 534 Church Street
                </p>
                <p className={styles.profitWithPurpose}>Cremorne, 3121</p>
                <p className={styles.profitWithPurpose}>Victoria, Australia</p>
                <p className={styles.profitWithPurpose}>+61 1300 277 434</p>
              </div>
              <div className={styles.thu1154}>THU • 11:54 AM</div>
            </div>
            <div className={styles.melbourneAustraliaParent}>
              <div className={styles.melbourneAustralia}>New York, USA</div>
              <div className={styles.level3534Container}>
                <p className={styles.profitWithPurpose}>
                  Level 2, 234 Fifth Ave
                </p>
                <p className={styles.profitWithPurpose}>New York, 10001</p>
                <p className={styles.profitWithPurpose}>NY, United States</p>
                <p className={styles.profitWithPurpose}>+1 (610) 999-7631</p>
              </div>
              <div className={styles.thu1154}>THU • 11:54 AM</div>
            </div>
            <div className={styles.melbourneAustraliaParent}>
              <div className={styles.melbourneAustralia}>London, UK</div>
              <div className={styles.level3534Container}>
                <p className={styles.profitWithPurpose}>[Address 1]</p>
                <p className={styles.profitWithPurpose}>[Address 2]</p>
                <p className={styles.profitWithPurpose}>[Address 3]</p>
                <p className={styles.profitWithPurpose}>[Phone number]</p>
              </div>
              <div className={styles.thu1154}>THU • 11:54 AM</div>
            </div>
            <div className={styles.melbourneAustraliaParent}>
              <div className={styles.melbourneAustralia}>Bengaluru, India</div>
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
              <div className={styles.thu11543}>THU • 11:54 AM</div>
            </div>
            <div className={styles.melbourneAustraliaParent}>
              <div className={styles.melbourneAustralia}>
                Manila, The Philippines
              </div>
              <div className={styles.level3534Container}>
                <p className={styles.profitWithPurpose}>5F Phinma Plaza</p>
                <p className={styles.profitWithPurpose}>
                  39 Plaza Drive, Rockwell Centre
                </p>
                <p className={styles.profitWithPurpose}>
                  Makati City, Metro Manila
                </p>
              </div>
              <div className={styles.thu1154}>THU • 11:54 AM</div>
            </div>
          </div>
          <img className={styles.dividerIcon} alt="" src="/divider@2x.png" />
          <div className={styles.links}>
            <div className={styles.links1}>
              <div className={styles.button}>
                <div className={styles.brickfitKids}>Home</div>
              </div>
              <div className={styles.button}>
                <div className={styles.brickfitKids}>About</div>
              </div>
              <div className={styles.button}>
                <div className={styles.brickfitKids}>Case Studies</div>
              </div>
            </div>
            <div className={styles.links1}>
              <div className={styles.button}>
                <div className={styles.brickfitKids}>Insights</div>
              </div>
              <div className={styles.button}>
                <div className={styles.brickfitKids}>Careers</div>
              </div>
              <div className={styles.button}>
                <div className={styles.brickfitKids}>Privacy Policy</div>
              </div>
            </div>
          </div>
          <div className={styles.copyrightSocial}>
            <img className={styles.dividerIcon} alt="" src="/divider@2x.png" />
            <div className={styles.content4}>
              <div className={styles.allRightsReserved}>
                All rights reserved. ©️ Launchpad 2023
              </div>
              <img
                className={styles.socialLinkedin}
                alt=""
                src="/social--linkedin@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <img className={styles.bgIcon1} alt="" src="/bg@2x.png" />
          <img className={styles.gridIcon1} alt="" src="/grid@2x.png" />
          <div className={styles.content5}>
            <div className={styles.copy8}>
              <div className={styles.heading1}>
                <span className={styles.haveAnIdea}>
                  <span className={styles.buildTechProducts}>Have an</span>
                  <span className={styles.span1}>{` `}</span>
                  <i className={styles.purpose}>idea?</i>
                </span>
              </div>
            </div>
            <div className={styles.button6}>
              <div className={styles.letsChat}>Let’s chat</div>
            </div>
          </div>
        </div>
        <div className={styles.banners}>
          <img className={styles.banner2Icon} alt="" src="/banner-2@2x.png" />
          <img className={styles.banner1Icon} alt="" src="/banner-1@2x.png" />
        </div>
      </div>
      <div className={styles.ourOffices}>
        <img className={styles.mapIcon} alt="" src="/map@2x.png" />
        <div className={styles.offices1}>
          <div className={styles.frameParent1}>
            <div className={styles.creativecubes2Wrapper}>
              <img
                className={styles.creativecubes2Icon}
                alt=""
                src="/creativecubes-2@2x.png"
              />
            </div>
            <div className={styles.berlinGermany}>Melbourne, Australia</div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.creativecubes2Wrapper}>
              <img
                className={styles.creativecubes2Icon}
                alt=""
                src="/creativecubes-2@2x.png"
              />
            </div>
            <div className={styles.donnaOehm}>Melbourne, Australia</div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.creativecubes2Wrapper}>
              <img
                className={styles.creativecubes2Icon}
                alt=""
                src="/creativecubes-2@2x.png"
              />
            </div>
            <div className={styles.berlinGermany}>Berlin, Germany</div>
          </div>
        </div>
        <div className={styles.header}>
          <div className={styles.ourOfficesAroundContainer}>
            <span className={styles.the}>{`Our `}</span>
            <i className={styles.purpose}>{`offices `}</i>
            <span className={styles.the}>around the world</span>
          </div>
        </div>
      </div>
      <div className={styles.weAreAContainer}>
        <p className={styles.profitWithPurpose}>
          <span
            className={styles.glowWithSarah}
          >{`We are a team of builders, dreamers `}</span>
          <span>and venture architects ourselves.</span>
        </p>
        <p className={styles.profitWithPurpose}>&nbsp;</p>
        <p className={styles.profitWithPurpose}>
          We want each product we launch to have a positive impact on the world.
        </p>
        <p className={styles.profitWithPurpose}>&nbsp;</p>
        <p
          className={styles.profitWithPurpose}
        >{`We’re not just another agency, we’re partners on your mission. `}</p>
        <p className={styles.profitWithPurpose}>&nbsp;</p>
        <p className={styles.profitWithPurpose}>We are Launchpad.</p>
      </div>
      <img className={styles.gridIcon2} alt="" src="/grid@2x.png" />
      <div className={styles.banners1}>
        <img className={styles.banner2Icon1} alt="" src="/banner-2@2x.png" />
        <img className={styles.banner1Icon1} alt="" src="/banner-1@2x.png" />
      </div>
      <img className={styles.eyeIcon} alt="" src="/eye@2x.png" />
      <i className={styles.whatWeDo}>What we do</i>
      <img className={styles.arrowIcon1} alt="" src="/arrow@2x.png" />
      <div className={styles.numberStats}>
        <div className={styles.yearsInBusinessParent}>
          <div className={styles.donnaOehm}>Years in business</div>
          <div className={styles.div5}>8</div>
        </div>
        <div className={styles.productsLaunchedParent}>
          <div className={styles.donnaOehm}>Products launched</div>
          <div className={styles.div5}>58</div>
        </div>
        <div className={styles.productsLaunchedParent}>
          <div className={styles.donnaOehm}>Awards won</div>
          <div className={styles.div5}>18</div>
        </div>
      </div>
      <div className={styles.ourGuidingPrinciplesParent}>
        <div className={styles.ourGuidingPrinciplesContainer}>
          <span className={styles.buildTechProducts}>Our guiding</span>
          <span className={styles.span1}>{` `}</span>
          <i className={styles.benefit}>principles</i>
        </div>
        <div className={styles.values}>
          <div className={styles.value1}>
            <div className={styles.number}>
              <div className={styles.div8}>01</div>
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
          <div className={styles.value1}>
            <div className={styles.number}>
              <div className={styles.div8}>02</div>
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
          <div className={styles.value1}>
            <div className={styles.number}>
              <div className={styles.div8}>03</div>
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
          <div className={styles.value1}>
            <div className={styles.number}>
              <div className={styles.div8}>04</div>
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
        <img className={styles.starIcon1} alt="" src="/star@2x.png" />
      </div>
      <div className={styles.ourTeam}>
        <div className={styles.header1}>
          <div className={styles.ourTeamOfContainer}>
            <span className={styles.the}>Our team of</span>
            <i className={styles.purpose}> problem solvers</i>
          </div>
        </div>
        <div className={styles.images}>
          <div className={styles.row2}>
            <img className={styles.imageIcon4} alt="" src="/image@2x.png" />
            <img className={styles.imageIcon4} alt="" src="/image@2x.png" />
            <img className={styles.imageIcon4} alt="" src="/image@2x.png" />
            <img className={styles.imageIcon4} alt="" src="/image@2x.png" />
            <img className={styles.imageIcon4} alt="" src="/image@2x.png" />
            <img className={styles.imageIcon4} alt="" src="/image@2x.png" />
            <img className={styles.imageIcon4} alt="" src="/image@2x.png" />
          </div>
          <div className={styles.row1}>
            <img className={styles.imageIcon11} alt="" src="/image@2x.png" />
            <img className={styles.imageIcon11} alt="" src="/image@2x.png" />
            <img className={styles.imageIcon11} alt="" src="/image@2x.png" />
            <img className={styles.imageIcon11} alt="" src="/image@2x.png" />
            <img className={styles.imageIcon11} alt="" src="/image@2x.png" />
            <img className={styles.imageIcon11} alt="" src="/image@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMobile;
