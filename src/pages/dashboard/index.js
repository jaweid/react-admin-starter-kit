import React from 'react'
import {Card, Col, Row, Icon, message, List, Avatar, Dropdown, Menu} from 'antd';
import DataSet from "@antv/data-set";
import './dashboard.css';
import {Chart, Axis, Geom, Tooltip, Legend} from 'bizcharts';

const {Meta} = Card;

const DashboardCard = (props) => (

    <Card bordered={false} className='dashboard-card' style={{backgroundColor: props.bg}}>
        <h1>{props.number}</h1>
        <p>{props.label}</p>
    </Card>
);

const dataForRecentPostCard = [
    {year: '1951 年', sales: 38},
    {year: '1952 年', sales: 52},
    {year: '1956 年', sales: 61},
    {year: '1957 年', sales: 145},
    {year: '1958 年', sales: 48},
    {year: '1959 年', sales: 38},
    {year: '1960 年', sales: 38},
    {year: '1962 年', sales: 38},
];
const colsForRecentPostCard = {
    'sales': {tickInterval: 20},
};

const RecentPostCard = () => (
    <Card title="Recent Posts Venenatis portauam Inceptos ameteiam" bordered={false}>
        <Chart height={300} data={dataForRecentPostCard} scale={colsForRecentPostCard} forceFit>
            <Axis name="year"/>
            <Axis name="sales"/>
            <Tooltip crosshairs={{type: "y"}}/>
            <Geom type="interval" position="year*sales"/>
        </Chart>
    </Card>
);
const dataForRecentPostTrendsCard = [
    {month: 'Jan', Tokyo: 7.0, London: 3.9},
    {month: 'Feb', Tokyo: 6.9, London: 4.2},
    {month: 'Mar', Tokyo: 9.5, London: 5.7},
    {month: 'Apr', Tokyo: 14.5, London: 8.5},
    {month: 'May', Tokyo: 18.4, London: 11.9},
    {month: 'Jun', Tokyo: 21.5, London: 15.2},
    {month: 'Jul', Tokyo: 25.2, London: 17.0},
    {month: 'Aug', Tokyo: 26.5, London: 16.6},
    {month: 'Sep', Tokyo: 23.3, London: 14.2},
    {month: 'Oct', Tokyo: 18.3, London: 10.3},
    {month: 'Nov', Tokyo: 13.9, London: 6.6},
    {month: 'Dec', Tokyo: 9.6, London: 4.8}
];
const ds = new DataSet();
const dv = ds.createView().source(dataForRecentPostTrendsCard);
dv.transform({
    type: 'fold',
    fields: ['Tokyo', 'London'], // 展开字段集
    key: 'city', // key字段
    value: 'temperature', // value字段
});
const colsForRecentPostTrendsCard = {
    month: {
        range: [0, 1]
    }
};
const RecentPostTrendsCard = () => (
    <Card title="Recent Posts Venenatis portauam Inceptos ameteiam" bordered={false}>
        <Chart height={300} data={dv} scale={colsForRecentPostTrendsCard} forceFit>
            <Legend/>
            <Axis name="month"/>
            <Axis name="temperature" label={{formatter: val => `${val}°C`}}/>
            <Tooltip crosshairs={{type: "y"}}/>
            <Geom type="line" position="month*temperature" size={2} color={'city'} shape={'smooth'}/>
            <Geom type='point' position="month*temperature" size={4} shape={'circle'} color={'city'}
                  style={{stroke: '#fff', lineWidth: 1}}/>
        </Chart>
    </Card>
);

const dataForImgTextCard = {
    imgSrc: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cc1f82f635206f99e3132d9ebd24db6c&auto=format&fit=crop&w=1951&q=80',
    title: '生命中陌生的美好',
    description: '知乎',
    content: '         欲买桂花同载酒，终不似，少年游。\n' +
    '和世界交手的这许多年，你是否光彩依旧，兴致盎然。\n' +
    '几年前踏上火车那一刻都还没有意识到，从此故乡只有冬夏，再无春秋。\n' +
    '醉后不知天在水，满船清梦压星河。\n' +
    '愿你梦里有喝不完的酒，醒来后能酩酊大醉地过完这一生。你要照顾好你黑色的头发，挑剔的胃和爱笑的眼睛。\n' +
    '后来我终于知道 ， 它并不是我的花 ，我只是恰好途径了它的盛放。\n' +
    '是谁来自山川湖海，却囿于昼夜、厨房与爱。'
};

const ImgTextCard = (props) => (
    <Card
        hoverable
        cover={<img alt="example" src={props.imgTextCard.imgSrc}/>} >
        <Meta style={{marginBottom: '10px'}}
              title={props.imgTextCard.title}
              description={props.imgTextCard.description}
        />
        <div>
            {props.imgTextCard.content}
        </div>
    </Card>
);


const dataForList = [
    {
        avatar: 'https://cipchk.github.io/ng-alain/assets/tmp/img/1.png',
        title: '王小波',
        content: '我把我整个灵魂都给你，连同它的怪癖，耍小脾气，忽明忽暗，一千八百种坏毛病。它真讨厌，只有一点 好，爱你。'
    },
    {
        avatar: 'https://cipchk.github.io/ng-alain/assets/tmp/img/6.png',
        title: 'はなさき',
        content: 'ハルカソラトキヘダツヒカリ'
    },
    {
        avatar: 'https://cipchk.github.io/ng-alain/assets/tmp/img/2.png',
        title: 'cipchk',
        content: 'this world was never meant for one as beautiful as you.'
    },
    {
        avatar: 'https://cipchk.github.io/ng-alain/assets/tmp/img/3.png',
        title: 'Are you',
        content: 'They always said that I love beautiful girl than my friends'
    },
];


const RecentPostList = () => (
    <List
        split={false}
        itemLayout="horizontal"
        dataSource={dataForList}
        renderItem={item => (
            <List.Item>
                <List.Item.Meta
                    avatar={<Avatar src={item.avatar}/>}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description={item.content}
                />
            </List.Item>
        )}
    />
);
const success = () => {
    message.success('This is a message of success');
};

const menu = (
    <Menu>
        <Menu.Item onClick={success} key="1">删除</Menu.Item>
        <Menu.Item onClick={success} key="2">编辑</Menu.Item>
    </Menu>
);


const TodoList = () => (
    <List
        split={false}
        itemLayout="horizontal"
        dataSource={dataForList}
        renderItem={item => (
            <List.Item actions={[<Dropdown overlay={menu}>
                <Icon type="ellipsis"/>
            </Dropdown>]}>
                <List.Item.Meta
                    avatar={<Avatar src={item.avatar}/>}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description={item.content}
                />
            </List.Item>
        )}
    />
);

const dashboardRows=[
    {
        bg:'#3c91f7',
        number:'123,456',
        label:'Website Traffics'
    },
    {
        bg:'#72c040',
        number:'234,567K',
        label:'Website Impressions'
    },
    {
        bg:'#ed903a',
        number:'$458,778',
        label:'Total Sales'
    },
    {
        bg:'#D94594',
        number:'456',
        label:'Support Tickets'
    }
];

class Dashboard extends React.Component {

    render() {
        return (
            <div>
                <Row gutter={16}>
                    {dashboardRows.map((row) =>
                        <Col span={6}>
                            <DashboardCard bg={row.bg}
                                           number={row.number} label={row.label}
                            />
                        </Col>

                    )}
                </Row>

                <Row gutter={16} className={'cardRecentPosts'}>
                    <Col span={12}>
                        <RecentPostCard/>
                    </Col>
                    <Col span={12}>
                        <RecentPostTrendsCard/>
                    </Col>
                </Row>

                <Row gutter={16} style={{marginTop: '20px'}}>
                    <Col span={12}>
                        <ImgTextCard imgTextCard={dataForImgTextCard}/>
                    </Col>
                    <Col span={12}>
                        <Card title="Recent Posts Venenatis portauam Inceptos ameteiam" bordered={false}>
                            <RecentPostList/>
                        </Card>

                        <Card style={{marginTop: '20px'}} title="ToDo List"
                              bordered={false}>
                            <TodoList/>
                        </Card>

                    </Col>
                </Row>
            </div>
        )
    }
}

export default Dashboard;