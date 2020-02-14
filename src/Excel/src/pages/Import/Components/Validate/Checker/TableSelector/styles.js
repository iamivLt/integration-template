import styled from 'styled-components'
import { Tabs as ADTabs, Col as ADCol } from 'antd'

export const Tabs = styled(ADTabs)`
  width: 100%;
  height: 100%;
`

export const TabPane = styled(ADTabs.TabPane)`
  margin: 1rem 0 0 1rem;
  position: absolute;
  width: 80%;
`

export const Col = styled(ADCol)`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 80%;
  bottom: 3rem;
`
