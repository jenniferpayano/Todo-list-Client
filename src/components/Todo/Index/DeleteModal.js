import React from 'react'

const onClickDelete = (props) => {
  console.log(props)
  // const { msgAlert } = this.props
  confirmAlert({
    title: 'Confirm to Delete',
    message: 'Are you sure to do this?',
    buttons: [
      {
        label: 'Yes',
        onClick: (this.onClick)
      },
      {
        label: 'No'
        // onClick: () => alert('Click No')
      }
    ]
  })
}
