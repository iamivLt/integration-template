import React, { useState } from 'react'
import { Layout, Steps, Button, message } from 'antd'
import DragAndDrop from './Components/DragAndDrop'
import { Download } from './Components/Download'
import Validate from './Components/Validate'
import './styles.css'

const { Content, Header, Footer } = Layout

const { Step } = Steps

const steps = [
  {
    title: 'Download Template',
    content: <Download />
  },
  {
    title: 'Upload Template',
    content: <DragAndDrop />
  },
  {
    title: 'Validate',
    content: <Validate />
  }
]

export const Import = props => {
  const [current, setCurrent] = useState(0)

  const move = page => {
    setCurrent(current + page)
  }

  return (
    <Layout className='import'>
      <Header>Header</Header>
      <Content className='import-content'>
        <Steps className='import-steps' current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className='import-steps-content'>{steps[current].content}</div>
        <div className='import-steps-action'>
          {current < steps.length - 1 && (
            <Button type='primary' onClick={() => move(1)}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type='primary'
              onClick={() => message.success('Processing complete!')}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => move(-1)}>
              Previous
            </Button>
          )}
        </div>
      </Content>
      <Footer></Footer>
    </Layout>
  )
}
