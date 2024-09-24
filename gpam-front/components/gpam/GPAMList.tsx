import { GPAM } from '@/interfaces/gpam.interface';
import { useState } from 'react';
import GPAMItem from './GPAMItem';

interface GPAMListProps {
    gpams: GPAM[];
    onUpdateGPAM: (updatedGPAM: GPAM) => void;
    onDeleteGPAM: (gpamId: string) => void;
}

const GPAMList: React.FC<GPAMListProps> = ({ gpams, onUpdateGPAM, onDeleteGPAM }) => {
    const [expandedGPAMId, setExpandedGPAMId] = useState<string | null>(null);

    const handleToggleExpand = (gpamId: string) => {
        setExpandedGPAMId(expandedGPAMId === gpamId ? null : gpamId);
    };

    return (
        <div className="space-y-4">
            {gpams.map((gpam) => (
                <GPAMItem
                    key={gpam.id}
                    gpam={gpam}
                    onUpdate={onUpdateGPAM}
                    onDelete={onDeleteGPAM}
                    isExpanded={expandedGPAMId === gpam.id}
                    onToggleExpand={() => handleToggleExpand(gpam.id)}
                />
            ))}
        </div>
    );
};

export default GPAMList;
