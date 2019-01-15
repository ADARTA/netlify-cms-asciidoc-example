import React from 'react'

export default props => (
  <React.Fragment>
    <style
      type="text/css"
      id={props.id}
      dangerouslySetInnerHTML={{ __html: props.innerStyles }}
    />
    <div
      dangerouslySetInnerHTML={{ __html: props.innerHTML }}
    />
  </React.Fragment>
)