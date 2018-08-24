import React from 'react'
import {Card, Col, Row, Icon, Badge, message, List, Avatar, Dropdown, Menu, Progress} from 'antd';
import './analysis.css';
import {
    G2,
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
    View,
    Guide,
    Shape,
    Facet,
    Util
} from "bizcharts";

const data = [
    {
        year: "1951 年",
        sales: 38
    },
    {
        year: "1952 年",
        sales: 52
    },
    {
        year: "1956 年",
        sales: 61
    },
    {
        year: "1957 年",
        sales: 145
    },
    {
        year: "1958 年",
        sales: 48
    },
    {
        year: "1959 年",
        sales: 38
    },
    {
        year: "1960 年",
        sales: 38
    },
    {
        year: "1962 年",
        sales: 38
    },
    {
        year: "1962 年",
        sales: 38
    },
    {
        year: "1962 年",
        sales: 38
    },
    {
        year: "1962 年",
        sales: 38
    },
    {
        year: "1962 年",
        sales: 38
    }
];
const cols = {
    sales: {
        tickInterval: 20
    }
};


const SalesChart = () => (
    <Chart forceFit style={{width:'100%',marginTop:'20px'}}  height={330} data={data} scale={cols} >
        <Axis name="year"/>
        <Axis name="sales"/>
        <Tooltip
            crosshairs={{
                type: "y"
            }}
        />
        <Geom type="interval" position="year*sales"/>
    </Chart>
);

const cardDataSales =
    {
        number: '¥ 126,560',
        footerNumber: '￥12,423'
    };

const Sales = (props) => (
    <Card className='row-card' bordered={false}>
        <span className={{color: '#EFEFEF'}}>总销售额</span>
        <h1>{props.number}</h1>
        <p>周同比 12% <Icon type="caret-up" style={{color: '#E23C39', fontSize: '10px'}}/></p>
        <p>日环比 11% <Icon type="caret-down" style={{color: '#72C040', fontSize: '10px'}}/></p>
        <hr/>
        <p>日均销售额 {props.footerNumber}</p>
    </Card>
);



const cardDataVisit =
    {
        number: '8,848',
        footerNumber: '1,423'
    };

const Visit = (props) => (
    <Card className='row-card' bordered={false}>
        <span className={{color: '#EFEFEF'}}>总访问量</span>
        <h1>{props.number}</h1>
        <hr/>
        <p>日均访问量 {props.footerNumber}</p>
    </Card>
);

const cardDataPay =
    {
        number: '6,650',
        footerNumber: '60%'
    };

const Pay = (props) => (
    <Card className='row-card' bordered={false}>
        <span className={{color: '#EFEFEF'}}>支付笔数</span>
        <h1>{props.number}</h1>
        <hr/>
        <p>转化率 {props.footerNumber}</p>
    </Card>
);

const cardDataActivities =
    {
        number: '78',
    };

const Activities = (props) => (
    <Card className='row-card' bordered={false}>
        <span className={{color: '#EFEFEF'}}>运营活动效果</span>
        <h1>{props.number}</h1>
        <Progress percent={props.number}/>
        <hr/>
        <p>
            <span style={{float: 'left'}}>
                周同比 12% <Icon type="caret-up" style={{color: '#E23C39', fontSize: '10px'}}/>
            </span>

            <span style={{float: 'right'}}>
                日环比 11% <Icon type="caret-down" style={{color: '#72C040', fontSize: '10px'}}/>
            </span>
        </p>
    </Card>
);

const SalesCard = () => (
    <Row  gutter={16}>
        <Col span={16}>
            <p style={{color: '#000000'}}>销售额趋势</p>
            <SalesChart/>
        </Col>
        <Col span={8}>
            <p style={{color: '#000000'}}>门店销售额排名</p>
            <SalesPaiMingList/>
        </Col>
    </Row>
);

const VisitCard = () => (
    <Row gutter={16}>
        <Col span={16}>
            <p style={{color: '#000000'}}>访问量趋势</p>
            <SalesChart/>
        </Col>
        <Col span={8}>
            <p style={{color: '#000000'}}>门店访问量排名</p>
            <SalesPaiMingList/>
        </Col>
    </Row>
);


const dataForList = [
    {
        index: 1,
        name: ' 工专路 0 号店',
        money: '323,234'
    },
    {
        index: 2,
        name: ' 工专路 0 号店',
        money: '323,234'
    },
    {
        index: 3,
        name: ' 工专路 0 号店',
        money: '323,234'
    },
    {
        index: 4,
        name: ' 工专路 0 号店',
        money: '323,234'
    },
    {
        index: 5,
        name: ' 工专路 0 号店',
        money: '323,234'
    },
    {
        index: 6,
        name: ' 工专路 0 号店',
        money: '323,234'
    }
];

const SalesPaiMingList = () => (
    <List style={{marginTop:'20px',width:'100%'}}
          split={false}
        itemLayout="horizontal"
        dataSource={dataForList}
        renderItem={item => (
            <List.Item>
                <Badge count={item.index}
                       style={{backgroundColor: '#eee', color: '#000000', boxShadow: '0 0 0 1px #d9d9d9 inset'}}/>
                <span className='item-name'>
                    {item.name}
                </span>

                <span style={{float: 'right'}}>
                    {item.money}
                </span>
            </List.Item>
        )}
    />
);


const tabListNoTitle = [{
    key: 'article',
    tab: '销售额',
}, {
    key: 'app',
    tab: '访问量',
}];

const contentListNoTitle = {
    article: <SalesCard/>,
    app: <VisitCard/>,
};

class Analysis extends React.Component {
    state = {
        key: 'tab1',
        noTitleKey: 'article',
    };

    onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({[type]: key});
    };

    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col span={6}>
                        <Sales
                            number={cardDataSales.number}
                            footerNumber={cardDataSales.footerNumber}
                        />
                    </Col>
                    <Col span={6}>
                        <Visit
                            number={cardDataVisit.number}
                            footerNumber={cardDataVisit.footerNumber}
                        />
                    </Col>
                    <Col span={6}>
                        <Pay
                            number={cardDataPay.number}
                            footerNumber={cardDataPay.footerNumber}
                        />
                    </Col>
                    <Col span={6}>
                        <Activities
                            number={cardDataActivities.number}
                            footerNumber={cardDataActivities.footerNumber}
                        />
                    </Col>
                </Row>

                <Card
                    style={{width: '100%', marginTop: '20px'}}
                    tabList={tabListNoTitle}
                    activeTabKey={this.state.noTitleKey}
                    onTabChange={(key) => {
                        this.onTabChange(key, 'noTitleKey');
                    }}
                >
                    {contentListNoTitle[this.state.noTitleKey]}
                </Card>

            </div>
        )
    }
}

export default Analysis;