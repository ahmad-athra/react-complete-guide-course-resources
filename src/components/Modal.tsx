export default function Modal({children, open, onClose}: {children: React.ReactNode, open: boolean, onClose: () => void}) {
    return (
        <>
        {open && <div onClick={onClose} className="fixed left-0 top-0 w-full h-screen z-1 bg-[rgba(0,0,0,0.2)]" />}

        <dialog open={open} 
        className="border-none rounded-6px shadow-[0_2px_8px_rgba(0,0,0,0.2)] p-0 overflow-hidden z-1 m-auto">
            {children}
        </dialog>
        </>
    )
}