import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../assets/css/callforpaper.css"

export default function CallForPaper() {
  return (
    <div>
      <Navbar />
      <h1 className="callforpaper-heading">Call for Papers</h1>
      <div className="text-container">
        <p><b>Abstract submission guidelines:</b></p>
        <p>The abstract of the paper should concisely articulate the contextual framework and purpose of the study, provide a succinct overview of the methodology employed, present preliminary findings, and emphasize noteworthy aspects of the research. The abstract should be constrained to a maximum of 500 words. </p>
        <p><b>Paper Submission guidelines:</b></p>
        <p>The abstract and full article may be submitted to the email address <a href="mailto:itcoges@pdpu.ac.in">itcoges@pdpu.ac.in. </a>The conference website <a href="www.icoges2024.com">www.icoges2024.com</a>will provide the author with submission details and requirements for abstract and complete paper preparation. The papers that have been submitted will undergo evaluation by the technical committee. All papers that are deemed acceptable will be incorporated into the electronic proceedings of the conference.  </p>
        {/* <img src="ijhe.jpeg" alt="ijhe" />
        <p className="callforpaper-text">
          The selected papers will be published in <br />
          <a href="https://www.journals.elsevier.com/international-journal-of-hydrogen-energy/call-for-papers/1st-international-conference-on-green-hydrogen-for-global-de-carbonization">
            {" "}
            "International Journal of Hydrogen Energy."
          </a>{" "}
          <br />
          (Impact Factor: 7.1)
        </p> */}
      </div>
      <p className="">
       <h1 className="callforpaper-heading">Important Dates</h1> 
       <div className="imp-dates">
       <p>Call for Abstracts deadline: 10 Jan 2024</p>
      <p>Acceptance notification: 15 Jan 2024</p>
      <p>Early registration deadline: 20 Jan 2024</p>
      <p>Regular registration deadline: 30 Jan 2024</p>
      <p>Conference dates:  16 and 17 Feb 2024</p>
       </div>
       





        
      </p>
      <div className="button-container">
        {/* <button className="callforpaper-button">
          <a href="https://hpurl.ga/abstract">Download the abstract template</a>
        </button> */}
      </div>

      <p className="mail-text">
        {/* Please submit your abstracts to <a href="https://forms.gle/a7g4aAtJZuepZmNdA"> Google Form</a> */}
      </p>
      <Footer />
    </div>
  )
}
