import { RefreshCcw } from 'lucide-react';
import React from 'react';

const InfoItem = ({ Icon, text, showUpdateIndicator }: { Icon: React.ElementType; text: string, showUpdateIndicator?: boolean }) => {
    return (
        <div className="flex items-center gap-2">
            <Icon className="w-4 h-4" />
            <span>{text}</span>
            {showUpdateIndicator && <RefreshCcw className="w-4 h-4 text-green-500" />}
        </div>
    );
};

export default InfoItem;