import { GPAM } from '@/interfaces/gpam.interface';
import { useState } from 'react';
import CustomButton from '../common/CustomButton';
import CustomInput from '../common/CustomInput';

interface GPAMItemProps {
    gpam: GPAM;
    onUpdate: (updatedGPAM: GPAM) => void;
    onDelete: (gpamId: string) => void;
    isExpanded: boolean;
    onToggleExpand: () => void;
}

const GPAMItem: React.FC<GPAMItemProps> = ({ gpam, onUpdate, onDelete, isExpanded, onToggleExpand }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedGPAM, setEditedGPAM] = useState(gpam);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onUpdate(editedGPAM);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditedGPAM(gpam);
        setIsEditing(false);
    };

    const handleDelete = () => {
        if (window.confirm('정말로 이 GPAM을 삭제하시겠습니까?')) {
            onDelete(gpam.id);
        }
    };

    const renderContent = () => {
        if (isEditing) {
            return (
                <div className="space-y-2">
                    <CustomInput
                        type="text"
                        value={editedGPAM.title}
                        onChange={(e) => setEditedGPAM({ ...editedGPAM, title: e.target.value })}
                    />
                    <div className="flex justify-end space-x-2">
                        <CustomButton onClick={handleSave} variant="primary">
                            저장
                        </CustomButton>
                        <CustomButton onClick={handleCancel} variant="secondary">
                            취소
                        </CustomButton>
                    </div>
                </div>
            );
        }

        return (
            <>
                <h3 className="text-xl font-semibold mb-2">{gpam.title}</h3>
                {isExpanded && (
                    <div className="space-y-2">
                        <p>
                            <strong>계획:</strong> {gpam.plan}
                        </p>
                        <p>
                            <strong>행동:</strong> {gpam.action}
                        </p>
                        <p>
                            <strong>측정:</strong> {gpam.measure}
                        </p>
                    </div>
                )}
                <div className="flex justify-between items-center">
                    <div className="space-x-2">
                        <CustomButton onClick={handleEdit} variant="secondary">
                            수정
                        </CustomButton>
                        <CustomButton onClick={handleDelete} variant="danger">
                            삭제
                        </CustomButton>
                    </div>
                </div>
            </>
        );
    };

    return (
        <div
            className={`border p-4 rounded shadow-sm transition duration-300 cursor-pointer ${
                isExpanded
                    ? 'shadow-md bg-gray-100 dark:bg-gray-700'
                    : 'hover:shadow-md hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            onClick={onToggleExpand}
        >
            {renderContent()}
        </div>
    );
};

export default GPAMItem;
