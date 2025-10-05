type WorkStatusType = '1' | '2' | '3';

interface StatusConfig {
    label: string;
    color: string;
}

const statusConfig: Record<WorkStatusType, StatusConfig> = {
    '1': {
        label: 'Open for work',
        color: 'bg-green-400',
    },
    '2': {
        label: 'A bit busy',
        color: 'bg-orange-400',
    },
    '3': {
        label: 'Fully booked',
        color: 'bg-red-400',
    },
};

const WorkStatus = () => {
    const workStatus = process.env.NEXT_PUBLIC_WORK_STATUS as WorkStatusType;
    const status = statusConfig[workStatus];

    if (!status) return null;

    return (
        <div className="flex items-center gap-8">
            <span className="text-body-md">{status.label}</span>
            <span className={`w-8 h-8 ${status.color} rounded-full animate-pulse`}></span>
        </div>
    );
};

export default WorkStatus;