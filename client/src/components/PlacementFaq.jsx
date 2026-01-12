import React from 'react'

const PlacementFaq = () => {
  return (
    <div>
        <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        <div className="faq-item">
          <input type="checkbox" id="faq1" className="faq-toggle" />
          <label htmlFor="faq1" className="faq-question">How does the placement process work?</label>
          <div className="faq-answer">The placement process typically involves pre-placement talks, aptitude tests, group discussions, technical and HR interviews, followed by final selection and offer letters.</div>
        </div>
        <div className="faq-item">
          <input type="checkbox" id="faq2" className="faq-toggle" />
          <label htmlFor="faq2" className="faq-question">Who is eligible for campus placements?</label>
          <div className="faq-answer">Eligibility criteria vary by company, but generally include minimum academic scores, no active backlogs, and good attendance records.</div>
        </div>
        <div className="faq-item">
          <input type="checkbox" id="faq3" className="faq-toggle" />
          <label htmlFor="faq3" className="faq-question">What documents are required for placements?</label>
          <div className="faq-answer">Students should keep updated resumes, academic transcripts, ID proofs, and passport-size photographs ready for the placement process.</div>
        </div>
        <div className="faq-item">
          <input type="checkbox" id="faq4" className="faq-toggle" />
          <label htmlFor="faq4" className="faq-question">How can I prepare for interviews?</label>
          <div className="faq-answer">Practice aptitude questions, review core subjects, participate in mock interviews, and research the companies visiting campus.</div>
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default PlacementFaq
