import React, { ReactNode, useState, useEffect } from 'react';
import { Typography, Tooltip } from 'antd';
import { ParagraphProps } from 'antd/lib/typography/Paragraph';
import MyIcon from '../iconfont/index';
export interface ILabelValueProps {
  label?: ReactNode;
  value: ReactNode;
  valueConfig?: ParagraphProps;
  colon?: boolean;
  tooltip?: boolean;
  rows?: number;
}
type Props = ILabelValueProps;

const { Paragraph } = Typography;

export function LabelValue(props: Readonly<Props>) {
  const {  value,  tooltip, valueConfig, rows = 2 } = props;
  const [key, setKey] = useState(0);
  const [fold, setFold] = useState(true);
  const onExpand = () => {
    setFold(false);
  };
  const onCollapse = () => {
    setFold(true);
    setKey(key + 1);
  };

  return (
    <>
      <div key={key}>
        <Paragraph
          ellipsis={{
            rows,
            expandable: !tooltip,
            onExpand: onExpand,
            symbol: <>更多<MyIcon type='iconmlamp-sidebar-jiantouyou' style={{color:'#3388FF',fontSize:'12px',transform:'rotate(90deg)'}}></MyIcon></>
          }}
          {...valueConfig}
        >
          {value}
          {!fold && (
            <span style={{color:'#3388FF'}} onClick={onCollapse}>
              收起
              <MyIcon type='iconmlamp-sidebar-jiantouyou' style={{color:'#3388FF',fontSize:'12px',transform:'rotate(-90deg)'}}></MyIcon>
            </span>
          )}
        </Paragraph>
      </div>
    </>
  );
}

export default LabelValue;