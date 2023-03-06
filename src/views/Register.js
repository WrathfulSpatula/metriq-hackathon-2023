import React, { useEffect } from 'react'
import ViewHeader from '../components/ViewHeader'
import FieldWideRow from '../components/FieldWideRow'

const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div id='metriq-main-content' className='container'>
      <ViewHeader>
        Registration
      </ViewHeader>
      <br />
      <FieldWideRow>
        To register for the event, you must <a target='_blank' href='https://metriq.info/Register' rel='noreferrer'>create an account on</a> the Metriq web app, but no other special event registration is necessary. You can register at any time during the event, to be eligible for prizes.
      </FieldWideRow>
    </div>
  )
}

export default Register
