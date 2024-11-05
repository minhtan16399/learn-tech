import {Spin} from "antd";

const content = <div className='p-[50px] bg-[rgba(0,0,0,0.05)] rounded'/>;

export const LoadingPage = ({loading}:{loading:boolean}) => (
    !loading ? null : <div className='h-dvh w-full flex justify-center items-center bg-[rgba(0,0,0,0.05)]'>
        <Spin tip="Loading..." size="large">
            {content}
        </Spin>
    </div>
)