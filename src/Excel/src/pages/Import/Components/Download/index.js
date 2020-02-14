import React from 'react'
import axios from 'axios'
import { Button } from 'antd'
import './styles.css'

const fetchFile = async () => {
  const response = await axios({
    method: 'get',
    responseType: 'blob',
    url: 'http://localhost:8080/upload/downloadexceltemplate?model=shipping'
  }).then(response => {
    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'R&D_test.xmls') //or any other extension
    document.body.appendChild(link)
    link.click()
  })
  console.log(response)
}

export const Download = () => {
  return (
    <div className='center'>
      <Button
        type='primary'
        shape='round'
        icon='download'
        size='large'
        onClick={e => {
          fetchFile()
        }}
      >
        Download
      </Button>
    </div>
  )
}
