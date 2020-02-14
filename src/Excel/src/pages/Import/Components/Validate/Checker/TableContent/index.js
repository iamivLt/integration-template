import React from 'react'
import { Table } from 'antd'

const columns = [
  {
    title: 'Column name',
    dataIndex: 'column',
    key: 'cname'
  },
  {
    title: 'Structure',
    dataIndex: 'structure',
    key: 'structure'
  },
  {
    title: 'Dependency',
    dataIndex: 'dependency',
    key: 'dependency'
  }
]

export const TableContent = props => {
  return (
    <>
      <Table columns={columns} dataSource={props.payload} />
    </>
  )
}
