import React from 'react'
import { connect } from 'react-redux'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { TableSelector } from './Checker/TableSelector'

const Validate = props => {
  const GET_VALIDATION = gql`
    {
      query: excel {
        consumeExcel(excelVal: { model: "shipping", fileName: "${props.ctr}" }) {
          isValidated
          errMsg
          valStep
        }
      }
    }
  `
  const { loading, error, data } = useQuery(GET_VALIDATION)

  if (loading) return null
  if (error) return `Error ${error}`
  if (data) {
    console.log(data)
  }
  return (
    <div>
      <TableSelector />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ctr: state.control.filetovalidate
  }
}
export default connect(mapStateToProps, null)(Validate)
