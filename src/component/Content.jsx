import React from 'react';
import { Layout, Row, Col} from 'antd';
import { Button, Upload, Form, Input, Select, Table, Pagination } from 'element-react';
import 'element-theme-default';
let { Content } = Layout;


class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            columns: [
                {
                    label: "日期",
                    prop: "date",
                    width: 180
                },
                {
                    label: "姓名",
                    prop: "name",
                    width: 180
                },
                {
                    label: "地址",
                    prop: "address"
                }, {
                    label: '操作',
                    prop: 'make',
                    render() {
                        return (<span><Button size='small' type='primary'>编辑</Button><Button size='small' type='danger'>删除</Button></span>)
                    }
                }
            ],
            data: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }]
        }
    }
    render() {
        return (
            <div>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div style={{ padding: 24, background: '#fff' }}>
                        <Form inline={true} className="demo-form-inline">
                                    <Form.Item>
                                        <Input placeholder="审批人" ></Input>
                                    </Form.Item>
                            <Form.Item>
                                <Select placeholder="活动区域">
                                    <Select.Option label="区域一" value="shanghai"></Select.Option>
                                    <Select.Option label="区域二" value="beijing"></Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item>
                                <Input placeholder="审批人" ></Input>
                            </Form.Item>
                            <Form.Item>
                                <Input placeholder="审批人" ></Input>
                            </Form.Item>
                            <Form.Item>
                                <Select placeholder="活动区域">
                                    <Select.Option label="区域一" value="shanghai"></Select.Option>
                                    <Select.Option label="区域二" value="beijing"></Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item>
                                <Button nativeType="submit" type="primary">查询</Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <Table
                        // style={{ width: '100%' }}
                        columns={this.state.columns}
                        // maxHeight={500}
                        data={this.state.data}
                    />
                    {/* <div className="block"> */}
                    <Pagination style={{ textAlign: 'center', margin: '20px' }} layout="total, sizes, prev, pager, next, jumper" total={4000} pageSizes={[100, 200, 300, 400]} pageSize={100} />
                    {/* </div> */}

                </Content>
            </div>
        )
    }

}



export default Main;