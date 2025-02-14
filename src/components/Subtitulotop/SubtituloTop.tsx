export const SubtituloTop = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={`subtitulo inline-flex gap-2  items-center ${className}`}>
            <div className='circle w-3 h-3 bg-gradient-principal rounded-full'></div>
            <p className='inline-block text-base text-azul-acinzentado'>
                {children}
            </p>
        </div>
    );
};
