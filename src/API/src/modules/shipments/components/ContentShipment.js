import React, { Component } from 'react';
import { Layout, Spin, Result } from 'antd';
import HttpParameters from './HttpParameters';
import HttpStatus from './HttpStatus';
import { starkcore } from '../../GraphQL/Starkcore.json';
import { Query } from '@apollo/react-components';
import { gql } from 'apollo-boost';
import '../styles/ContentShipment.css';

const { Content } = Layout;

//** Object that receives every other json imported object from all the providers json files.*/
const importsObject = { starkcore };

let gqlQuery = '';
let coun = 0;
export class ContentShipment extends Component {
    constructor(props) {
        super(props);
        this.state = { forms: {}, show: false };
    }

    componentDidUpdate = () => {
        console.log('refresh...')
    }

    responseForms = data => {
        ++coun
        console.log('count...', coun)
        let { username, password, options } = data;

        //** Variable that recieves the DocumentNode object for the GraphQL query. Every provider has its own json file with all the required queries*/
        gqlQuery = gql`
      ${importsObject[options].apiTest.replace('$username', username).replace('$password', password)}
    `;

        this.setState({
            forms: data,
            show: true
        });

        console.log('state show1...', this.state.show)
    };

    render() {
        return (
            <Layout>
                <Content style={{ padding: '0 50px 50px', marginTop: 50 }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 550 }}>
                        <div>
                            <HttpParameters onHandleSubmit={this.responseForms} />
                        </div>
                        <div>
                            {this.state.show ? (
                                <Query query={gqlQuery}>
                                    {({ loading, error, data }) => {
                                        if (loading) return (
                                            <div className="loading">
                                                <Spin size='large' />
                                            </div>
                                        )
                                        if (error) return (
                                            <Result
                                                status="404"
                                                title="404"
                                                subTitle="Sorry, the server is wrong."
                                            />
                                        )

                                        return (<HttpStatus dataShipments={data} />)
                                    }}
                                </Query>
                            ) : null}
                        </div>
                    </div>
                </Content>
            </Layout>
        );
    }
}

export default ContentShipment;