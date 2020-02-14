import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Upload, Icon, message } from 'antd'

const { Dragger } = Upload

const DragAndDrop = props => {
  const propes = {
    name: 'excel',
    action: 'http://localhost:8080/upload/uploadexcelfile',
    method: 'post',
    customRequest: options => {
      const data = new FormData()
      data.append('excel', options.file)
      const config = {
        headers: {
          'content-type':
            'multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s'
        },
        content: {}
      }
      axios
        .post(options.action, data, config)
        .then(res => {
          options.onSuccess(res.data, options.file)
          let filetovalid = res.data.filename
          props.onUploaded(filetovalid)
        })
        .catch(err => {
          console.log(err)
        })
    },
    onChange(info) {
      const { status } = info.file
      if (status !== 'uploading') {
      }
      if (status === 'done') {
        console.log(props.ctr)
        message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    }
  }

  return (
    <>
      <Dragger {...propes}>
        <p className='ant-upload-drag-icon'>
          <Icon type='inbox' />
        </p>
        <p className='ant-upload-text'>
          Click or drag file to this area to upload
        </p>
        <p className='ant-upload-hint'>
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>
      <button
        onClick={e => {
          console.log('hola')
        }}
      >
        ASD
      </button>
    </>
  )
}

const mapStateToProps = state => {
  return {
    ctr: state.control.filetovalidate
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUploaded: upfiled => {
      dispatch({ type: 'CHECK', payload: { filename: upfiled } })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragAndDrop)
