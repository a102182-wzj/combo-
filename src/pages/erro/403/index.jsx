import { Result, Button } from 'antd';

ReactDOM.render(
  <Result
    status="403"
    title="403"
    subTitle="你没有此页面的访问权限"
    extra={<Button type="primary">Back Home</Button>}
  />,
  mountNode,
);