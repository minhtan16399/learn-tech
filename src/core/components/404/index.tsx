interface NotFoundProps {
    error: Error | null
}
export const NotFoundPage = ({error}: NotFoundProps) => (
    !error ? null : <div className='h-dvh w-full flex items-center justify-center font-bold text-xl'>
        404: Not found!
    </div>
)