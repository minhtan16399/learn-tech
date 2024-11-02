export const NotFoundPage = ({error}:{error:Error | null}) => (
    !error ? null : <div className='h-full w-full flex items-center justify-center font-bold text-xl'>
        404 not found!
    </div>
)