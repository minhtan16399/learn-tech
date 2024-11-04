import {Spin} from "antd";
import React from "react";

const contentStyle: React.CSSProperties = {
    padding: 50,
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 4,
};

const content = <div style={contentStyle} />;

export const LoadingPage = ({loading}:{loading:boolean}) => (
    !loading ? null : <div className='h-dvh w-full flex justify-center items-center bg-[rgba(0,0,0,0.05)]'>
        <Spin tip="Loading..." size="large">
            {content}
        </Spin>
    </div>
)