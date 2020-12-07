import React from 'react';
import { Card ,Row,Col,Button,Table} from 'antd';
import {ArrowRightOutlined,SearchOutlined} from '@ant-design/icons'
import Header from '../Header'
import './style.css';
class Home extends React.Component{
    render(){
        return(
            <>
                <Header tab="1"></Header>
                <div className="p-30 bg-grey">
                <Row gutter={32}>
                    <Col span={8}>
                        <Card style={{height:'30vh',marginBottom:'20px'}}>
                            <h1>Do you think you need help?</h1>
                            <p>Find therapists near you and get started now.</p>
                            <Button type="primary" size="large">Find Therapists <SearchOutlined /></Button>
                        </Card>
                        <Card style={{marginBottom:'20px'}}>
                            <h1>Upcoming Events</h1>
                            <h4>No upcoming events</h4>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card style={{height:'30vh',marginBottom:'20px'}}>
                            <h1>Not sure if whats troubling you?</h1>
                            <p>Just answer a few questions for us and find out</p>
                            <Button type="primary" size="large">Take test <ArrowRightOutlined /></Button>
                        </Card>
                        <Card style={{height:'60vh',marginBottom:'20px'}}>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card style={{ height:'30vh',marginBottom:'20px'}}>
                            <h1>Group Therapy</h1>
                            <p>Join our group therapy sessions and share your thoughts.</p>
                            <Button type="primary" size="large">Get Started</Button>
                        </Card>
                        <Card style={{marginBottom:'20px'}}>
                            <h1>Latest News</h1>
                            <p>news</p>
                            <p>news</p>
                            <p>news</p>
                        </Card>
                        <Card style={{height:'30vh',marginBottom:'20px'}}>
                            <h1>Frequently asked questions</h1>
                            <p>Questions</p>
                            <p>Questions</p>
                            <p>Questions</p>
                            <Button type="primary" size="large">Find more <ArrowRightOutlined /></Button>
                        </Card>
                    </Col>
                </Row>
            </div>
            </>
            
        )
    }
}
export default Home