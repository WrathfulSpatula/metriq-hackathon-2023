import React, { useEffect } from 'react'
import ViewHeader from '../components/ViewHeader'

const Register = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div id='metriq-main-content' className='container'>
      <ViewHeader>
        Top Submissions {props.match ? 'for "' + props.match.params.tag + '"' : ''}
      </ViewHeader>
      <br />
    </div>
  )
}

export default Register
