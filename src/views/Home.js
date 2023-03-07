import React, { useEffect } from 'react'
import ViewHeader from '../components/ViewHeader'
import ViewSubHeader from '../components/ViewSubHeader'
import FieldWideRow from '../components/FieldRow'
import logo from '../images/metriq_logo_primary_blue_inverted.png'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div id='metriq-main-content'>
      <ViewHeader>
        The first <a target='_blank' href='https://metriq.info' rel='noreferrer'>Metriq</a> hackathon is on March 24 and 25, 2023!
      </ViewHeader>
      <div className='text-center'>
        <img src={logo} className={'logo-home'} alt='Metriq logo' />
      </div>
      <br />
      <ViewSubHeader>
        Rules and Prizes
      </ViewSubHeader>
      <br />
      <FieldWideRow className={'text-left'}>
        You can win a Unitary Fund sticker pack by <a target='_blank' href='https://metriq.info/AddSubmission' rel='noreferrer'>submitting</a> a quantum-technology-related journal article, preprint, or code repository URL on March 24 or 25, 2023, (or any URL can be a "submission" if it contains a "result" or announcement relevant to quantum technology).
      </FieldWideRow>
      <br />
      <FieldWideRow className={'text-left'}>
        You can also win a Unitary Fund sticker pack by making a code contribution to Metriq from the repository's <a target='_blank' href='https://github.com/unitaryfund/metriq-app/issues' rel='noreferrer'>issues list</a>, (inluding the Metriq Python client <a target='_blank' href='https://github.com/unitaryfund/metriq-client/issues' rel='noreferrer'>issues list</a>). The first pull request addressing a specific issue that is accepted by the Metriq developement team will receive the prize, entirely at the Metriq development team's discretion.
      </FieldWideRow>
      <br />
      <FieldWideRow className={'text-left'}>
        Two participants who close the most issues, (or who are tied for most closed issues but lead in submission count made), will receive Unitary Fund swag packs!
      </FieldWideRow>
      <br />
      <FieldWideRow className={'text-left'}>
        To register for the event, you must <a target='_blank' href='https://metriq.info/Register' rel='noreferrer'>create an account</a> on the Metriq web app, but no other special event registration is necessary. You can register at any time before or during the event, to be eligible for prizes.
      </FieldWideRow>
      <br />
      <FieldWideRow className={'text-left'}>
        Hackathon participants agree to abide by Unitary Fund's <a target='_blank' href='https://github.com/unitaryfund/unitary-fund/blob/master/CODE_OF_CONDUCT.md' rel='noreferrer'>Contributor Covenant Code of Conduct</a>. (Violating the code of conduct, as ruled by the Metriq development team, may result in loss of eligibility for prizes.)
      </FieldWideRow>
      <br />
      <ViewSubHeader>
        Agenda and Timeline
      </ViewSubHeader>
      <br />
      <FieldWideRow className={'text-left'}>
        There will be a kick-off streaming event on March 24 and a closing event on March 25. Please plan to have your pull requests <i>accepted and closed</i> by end-of-day on March 25, in your own local timezone, (but the Metriq development team can, entirely at its discretion, likely make exceptions for extenuating circumstances that cause participants to miss the deadline, also since the Metriq team is local to Eastern time zone and might not be able to respond to all pull requests in before the technical deadline on March 25).
      </FieldWideRow>
    </div>
  )
}

export default Home
