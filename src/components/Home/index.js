import React from 'react';
import { Card ,Row,Col} from 'antd';
import './style.css';
class Home extends React.Component{
    render(){
        return(
            <div className="p-30 bg-grey">
                <Row gutter={32}>
                    <Col span={8}>
                        <Card style={{height:'30vh',marginBottom:'20px'}}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                        <Card style={{height:'30vh',marginBottom:'20px'}}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                        <Card style={{height:'30vh',marginBottom:'20px'}}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card style={{height:'30vh',marginBottom:'20px'}}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                        <Card style={{height:'60vh',marginBottom:'20px'}}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card style={{ height:'30vh',marginBottom:'20px'}}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                        <Card style={{height:'30vh',marginBottom:'20px'}}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                        <Card style={{height:'30vh',marginBottom:'20px'}}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Home