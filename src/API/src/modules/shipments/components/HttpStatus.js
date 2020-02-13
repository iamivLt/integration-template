import React, { Component } from 'react'
import { Table, Tag, Icon } from 'antd'
import '../styles/HttpStatus.css'

let resShipments = {};

export class HttpStatus extends Component {
    constructor(props) {
        super(props)
        this.state = { columns: [], data: [] }
        resShipments = Object.assign(this.props.dataShipments);
    }

    componentDidMount = () => {
        this.setState({
            columns: [
                {
                    title: 'Type', dataIndex: 'type', key: 'type', render: type => (
                        <span>
                            {
                                <Tag color={this.renderColorTypeHttp(type)} key={type}>
                                    {type.toUpperCase()}
                                </Tag>
                            }
                        </span>
                    )
                },
                { title: 'Url', dataIndex: 'url', key: 'url' },
                {
                    title: 'Status', dataIndex: 'status', key: 'status', render: status => (
                        <span>
                            {
                                status === true ?
                                    (<Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" className={"statusIcon"} />)
                                    : (<Icon type="close-circle" theme="twoTone" twoToneColor="#F44336" className={"statusIcon"} />)
                            }
                        </span>
                    )
                }
            ], data: this.setData()
        })
    }

    setData = () => {
        let data = []
        let count = 0;

        Object.keys(resShipments.starkcore['testStarkcoreLtlAuth']).map(result => {
            if (count < 3) {
                data.push({
                    key: count,
                    type: resShipments.starkcore.testStarkcoreLtlAuth[result].method,
                    url: resShipments.starkcore.testStarkcoreLtlAuth[result].urlTested,
                    status: resShipments.starkcore.testStarkcoreLtlAuth[result].status,
                    docs: resShipments.starkcore.testStarkcoreLtlAuth[result].docs
                })
            }
            ++count
        });
        return data
    }

    renderColorTypeHttp = (types) => {
        let typeColor = {
            'GET': 'blue',
            'POST': 'green',
            'DELETE': 'red',
            'PATCH': 'gold'
        }
        return typeColor[types]
    }

    render() {
        return (
            <div className='contentStatus'>
                <Table
                    className="components-table-httpStatus"
                    columns={this.state.columns}
                    dataSource={this.state.data}
                    expandedRowRender={record => <p style={{ margin: 0 }}>{record.docs}</p>}
                />
            </div>
        )
    }
}

export default HttpStatus
