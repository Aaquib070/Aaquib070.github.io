/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

import {
  Assets,
  Diary,
  Documents,
  Liability,
  Nominee,
  Portfolio,
  Sender,
  Slider2,
  Spend,
  Vault
  // Dark
} from 'export'

import './typewriter.css'

export const Features = (props) => {
  // const {
  //   asset,
  //   assetText,
  //   liability,
  //   liabilityText,
  //   vault,
  //   vaultText,
  //   nominees,
  //   nomineesText,
  //   spends,
  //   spendsText,
  //   documents,
  //   documentsText,
  //   diary,
  //   diaryText,
  //   portfolio,
  //   portfolioText
  // } = props

  // const managePort = [
  //   {
  //     id: 0,
  //     label: asset ? asset : 'Assets',
  //     description: assetText
  //       ? assetText
  //       : 'Bank Holdings, FD, RD, Insurance, Properties etc.',
  //     background: Assets,
  //     selected: false,
  //     path: '/assets/add'
  //   },
  //   {
  //     id: 1,
  //     label: liability ? liability : 'Liabilties',
  //     description: liabilityText
  //       ? liabilityText
  //       : 'Loan, EMI, Cash borrowed etc with collateral details',
  //     background: Liability,
  //     selected: false,
  //     path: '/liability/add'
  //   },
  //   {
  //     id: 4,
  //     label: nominees ? nominees : 'Nominees',
  //     description: nomineesText
  //       ? nomineesText
  //       : 'Manage your nominees for your assets & liabities',
  //     background: Nominee,
  //     selected: false,
  //     path: '/nominee/list'
  //   },
  //   {
  //     id: 7,
  //     label: portfolio ? portfolio : 'Portfolio',
  //     description: portfolioText
  //       ? portfolioText
  //       : 'View & analyze portfolio of saved assets and liabilties',
  //     background: Portfolio,
  //     selected: false,
  //     path: '/portfolio'
  //   }
  // ]

  // const manageStorage = [
  //   {
  //     id: 2,
  //     label: vault ? vault : 'Password Vault',
  //     description: vaultText
  //       ? vaultText
  //       : 'Save your passwords like cards, credentials in vault.',
  //     background: Vault,
  //     selected: false,
  //     path: '/vault/password'
  //   },
  //   {
  //     id: 5,
  //     label: documents ? documents : 'Documents',
  //     description: documentsText
  //       ? documentsText
  //       : 'Upload you documents, pics in your own secret vault',
  //     background: Documents,
  //     selected: false,
  //     path: '/vault/document'
  //   }
  // ]

  // const manageExp = [
  //   {
  //     id: 6,
  //     label: diary ? diary : 'Secret Diary',
  //     description: diaryText
  //       ? diaryText
  //       : 'Log your thoughts and secrets in a personal space',
  //     background: Diary,
  //     selected: false,
  //     path: '/diary'
  //   },
  //   {
  //     id: 3,
  //     label: spends ? spends : 'Daily Spends',
  //     description: spendsText
  //       ? spendsText
  //       : 'Log your thoughts and analyze your daily spends.',
  //     background: Spend,
  //     selected: false,
  //     path: '/spends'
  //   }
  // ]

  // const manageAfterLife = [
  //   {
  //     id: 8,
  //     label: props?.sender?.heading ? props?.sender?.heading : 'Postman',
  //     description: props?.sender?.subHeading
  //       ? props?.sender?.subHeading
  //       : 'Save, schedule, send text, audio, video messages',
  //     background: Sender,
  //     selected: false,
  //     path: '/postman'
  //   }
  // ]

  // const downshift = (id, type) => {
  //   const element = document.getElementById(`card ${id}`)
  //   if (element) {
  //     if (type === 'down') {
  //       element.classList.add('downshift', 'upshadow')
  //       element.classList.remove('common-shadow')
  //     } else {
  //       element.classList.remove('downshift', 'upshadow')
  //       element.classList.add('common-shadow')
  //     }
  //   }
  // }

  return (
    <section id="features-wrap" className=" p-t-b-80">
      <div className="container">
        <div className="row">
          <div className="col-md-12 section-header mb-5">
            <h2 className="font-weight-bold">Our Exciting Features</h2>
          </div>

          <div className="col-md-6 col-lg-7 col-sm-12 mb-4 mb-lg-0">
            <div className="row features_wrap">
              <div
                data-aos="fade-left"
                className="col-md-6 col-lg-4 col-sm-6 mb-4 aos-init aos-animate"
              >
                <div className="card">
                  <div className="card-body pt-4 pb-4 text-center">
                    <img src={Assets} className="card-img" alt="img" />
                    <h4 className="card-title pt-2 text-16">ASSETS</h4>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="col-md-6 col-lg-4 col-sm-6 mb-4 aos-init aos-animate"
              >
                <div className="card">
                  <div className="card-body pt-4 pb-4 text-center">
                    <img src={Liability} className="card-img" alt="img" />
                    <h4 className="card-title pt-2 text-16">LIABILTIES</h4>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-right"
                className="col-md-6 col-lg-4 col-sm-6 mb-4 aos-init aos-animate"
              >
                <div className="card">
                  <div className="card-body pt-4 pb-4 text-center">
                    <img src={Vault} className="card-img" alt="img" />
                    <h4 className="card-title pt-2 text-16">PASSWORD VAULT</h4>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-left"
                className="col-md-6 col-lg-4 col-sm-6 mb-4 aos-init aos-animate"
              >
                <div className="card">
                  <div className="card-body pt-4 pb-4 text-center">
                    <img src={Spend} className="card-img" alt="img" />
                    <h4 className="card-title pt-2 text-16">DAILY SPENDS</h4>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="col-md-6 col-lg-4 col-sm-6 mb-4 aos-init aos-animate"
              >
                <div className="card">
                  <div className="card-body pt-4 pb-4 text-center">
                    <img src={Nominee} className="card-img" alt="img" />
                    <h4 className="card-title pt-2 text-16">NOMINEES</h4>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-right"
                className="col-md-6 col-lg-4 col-sm-6 mb-4 aos-init aos-animate"
              >
                <div className="card">
                  <div className="card-body pt-4 pb-4 text-center">
                    <img src={Documents} className="card-img" alt="img" />
                    <h4 className="card-title pt-2 text-16">DOCUMENTS</h4>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-left"
                className="col-md-6 col-lg-4 col-sm-6 mb-4 mb-lg-0 aos-init aos-animate"
              >
                <div className="card">
                  <div className="card-body pt-4 pb-4 text-center">
                    <img src={Diary} className="card-img" alt="img" />
                    <h4 className="card-title pt-2 text-16">SECRET DAIRY</h4>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="col-md-6 col-lg-4 col-sm-6 mb-4 mb-lg-0 mb-md-0 aos-init aos-animate"
              >
                <div className="card">
                  <div className="card-body pt-4 pb-4 text-center">
                    <img src={Portfolio} className="card-img" alt="img" />
                    <h4 className="card-title pt-2 text-16">PORTFOLIO</h4>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-right"
                className="col-md-6 col-lg-4 col-sm-6 mb-4 mb-lg-0 mb-md-0 aos-init aos-animate"
              >
                <div className="card">
                  <div className="card-body pt-4 pb-4 text-center">
                    <img src={Sender} className="card-img" alt="img" />
                    <h4 className="card-title pt-2 text-16">POSTMAN</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="col-md-6 col-lg-5 col-sm-12 d-flex align-items-center aos-init aos-animate"
          >
            <div>
              <img src={Slider2} className="img-responsive w-100" alt="img" />
              <p className="mt-4">
                “A man is like a novel: until the very last page you don&aps;t
                know how it will end. Otherwise it wouldn&aps;t be worth
                reading.”{' '}
                <strong>
                  {' '}
                  <br />- Yevgeny Zamyatin
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <div id="feature" className="feature-menu-option">
    //   <div className="feature-main-title common-shadow">
    //     <div>Explore Our Features...</div>
    //   </div>
    //   <div className="first-feature mt-5">
    //     <div className="w-100 text-center feature-title">
    //       Portfolio Management and Nominee Care
    //     </div>
    //     <div className="d-flex justify-content-between">
    //       <div className="left-arrow"></div>
    //       <div className="scroll-content">
    //         <div className="first-content mt-3">
    //           {managePort?.map((item) => {
    //             return (
    //               <div
    //                 key={item.id}
    //                 id={`first ${item.id}`}
    //                 className="feature-container overflow-hide common-shadow"
    //               >
    //                 <div className="pseudo-card">something</div>
    //                 <div
    //                   className="feature-cross"
    //                   onClick={() => downshift(item.id, 'up')}
    //                 >
    //                   Cross
    //                 </div>
    //                 <div
    //                   className="feature-card"
    //                   id={`card ${item.id}`}
    //                   onClick={() => downshift(item.id, 'down')}
    //                 >
    //                   <div
    //                     className="card-image"
    //                     style={{ backgroundImage: `url(${item.background})` }}
    //                   ></div>
    //                   <div className="feature-card-title">{item.label}</div>
    //                 </div>
    //               </div>
    //             )
    //           })}
    //         </div>
    //       </div>
    //       <div className="right-arrow"></div>
    //     </div>
    //   </div>
    //   <div className="second-feature d-flex align-items-center">
    //     <div className="feature-title">For your Credentials and Documents</div>
    //     {manageStorage?.map((item) => {
    //       return (
    //         <div
    //           key={item.id}
    //           id={`first ${item.id}`}
    //           className="feature-container overflow-hide common-shadow"
    //         >
    //           <div className="pseudo-card">something</div>
    //           <div
    //             className="feature-cross"
    //             onClick={() => downshift(item.id, 'up')}
    //           >
    //             Cross
    //           </div>
    //           <div
    //             className="feature-card"
    //             id={`card ${item.id}`}
    //             onClick={() => downshift(item.id, 'down')}
    //           >
    //             <div
    //               className="card-image"
    //               style={{ backgroundImage: `url(${item.background})` }}
    //             ></div>
    //             <div className="feature-card-title">{item.label}</div>
    //           </div>
    //         </div>
    //       )
    //     })}
    //   </div>
    //   <div className="third-feature d-flex">
    //     {manageExp?.map((item) => {
    //       return (
    //         <div
    //           key={item.id}
    //           id={`first ${item.id}`}
    //           className="feature-container overflow-hide common-shadow"
    //         >
    //           <div className="pseudo-card">something</div>
    //           <div
    //             className="feature-cross"
    //             onClick={() => downshift(item.id, 'up')}
    //           >
    //             Cross
    //           </div>
    //           <div
    //             className="feature-card"
    //             id={`card ${item.id}`}
    //             onClick={() => downshift(item.id, 'down')}
    //           >
    //             <div
    //               className="card-image"
    //               style={{ backgroundImage: `url(${item.background})` }}
    //             ></div>
    //             <div className="feature-card-title">{item.label}</div>
    //           </div>
    //         </div>
    //       )
    //     })}
    //     <div className="feature-title d-flex align-items-center">
    //       Personalized Diary and Expense Tracker
    //     </div>
    //   </div>
    //   <div className="fourth-feature d-flex">
    //     <div className="feature-title mr-5 d-flex align-items-center">
    //       Our After Life Services
    //     </div>
    //     {manageAfterLife?.map((item) => {
    //       return (
    //         <div
    //           key={item.id}
    //           id={`first ${item.id}`}
    //           className="feature-container overflow-hide common-shadow"
    //         >
    //           <div className="pseudo-card">something</div>
    //           <div
    //             className="feature-cross"
    //             onClick={() => downshift(item.id, 'up')}
    //           >
    //             Cross
    //           </div>
    //           <div
    //             className="feature-card"
    //             id={`card ${item.id}`}
    //             onClick={() => downshift(item.id, 'down')}
    //           >
    //             <div
    //               className="card-image"
    //               style={{ backgroundImage: `url(${item.background})` }}
    //             ></div>
    //             <div className="feature-card-title">{item.label}</div>
    //           </div>
    //         </div>
    //       )
    //     })}
    //   </div>
    // </div>
  )
}
