import React, { useEffect } from 'react'
import ViewHeader from '../components/ViewHeader'
import ViewSubHeader from '../components/ViewSubHeader'
import FieldWideRow from '../components/FieldRow'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div id='metriq-main-content'>
      <ViewHeader>
        The first <a target="_blank" href="https://metriq.info">Metriq</a> hackathon is on March 24 and 25, 2023!
      </ViewHeader>
      <br />
      <ViewSubHeader>
        Rules and Prizes
      </ViewSubHeader>
      <br />
      <FieldWideRow>
        You can win a Unitary Fund sticker pack by <a target="_blank" href="https://metriq.info/AddSubmission">submitting</a> a quantum-technology related journal article, preprint, or code repository URL on March 24 or 25, 2023, (or any URL can be a "submission" if it contains a "result" or announcement relevant to quantum technology).
      </FieldWideRow>
      <br />
      <FieldWideRow>
        You can also win a Unitary Fund sticker pack by making a code contribution to Metriq from the repository's <a target="_blank" href="https://github.com/unitaryfund/metriq-app/issues">issues list</a>. The first pull request addressing a specific issue that is accepted by the Metriq developement team will receive the prize, entirely at the Metriq development team's discretion.
      </FieldWideRow>
      <br />
      <FieldWideRow>
        Two participants who close the most issues, (or who are tied for most closed issues but lead in submission count made), will receive Unitary Fund swag packs!
      </FieldWideRow>
      <br />
      <FieldWideRow>
        To register for the event, you must <a target="_blank" href="https://metriq.info/Register">create an account on</a> the Metriq web app, but no other special registrations or actions are necessary. You can register at any time during the event, to be eligible for prizes.
      </FieldWideRow>
    </div>
  )
}

export default Home