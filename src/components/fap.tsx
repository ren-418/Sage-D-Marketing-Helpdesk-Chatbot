import { useState } from 'react';
interface FapProps {
    title: string;
    description: string;
}

const Fap = (props: FapProps) => {

    const [isOpenedDetail, setIsOpenedDetail] = useState(false);
    return (
        <div className='flex flex-col items-center justify-center gap-5 border-b border-gray cursor-pointer pb-5' onClick={() => setIsOpenedDetail(!isOpenedDetail)}>
            <div className='flex flex-col items-start justify-center gap-5'>
                <div className='text-black lg:text-2xl text-lg '>{props.title}</div>
                {isOpenedDetail && (
                    <div className='text-black text-base'>{props.description}</div>
                )}
            </div>
        </div>
    )
}

export default Fap
