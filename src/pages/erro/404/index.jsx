import { Result, Button } from 'antd';

ReactDOM.render(
  <Result
    status="404"
    title="404"
    subTitle="目标未找到."
    extra={<Button type="primary">Back Home</Button>}
  />,
  mountNode,
);