const Load = () => {
    return (
        <div className="bg-stone-200 shadow-lg rounded-lg my-4 p-4 w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-white rounded"></div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-white rounded col-span-2"></div>
                            <div className="h-2 bg-white rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-white rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Load