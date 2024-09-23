import { GPAM } from '@/interfaces/gpam.interface';
import { useState } from 'react';
import Modal from 'react-modal';
import CustomButton from '../common/CustomButton';
import CustomInput from '../common/CustomInput';

interface GPAMFormProps {
    goalId: string;
    onAddGPAM: (newGPAM: GPAM) => void;
    isOpen: boolean;
    onRequestClose: () => void;
}

const GPAMForm: React.FC<GPAMFormProps> = ({ goalId, onAddGPAM, isOpen, onRequestClose }) => {
    const [title, setTitle] = useState('');
    const [plan, setPlan] = useState('');
    const [action, setAction] = useState('');
    const [measure, setMeasure] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newGPAM: GPAM = {
            id: Date.now().toString(),
            title,
            progress: 0,
            goalId,
            isCompleted: false,
            plan,
            action,
            measure,
        };
        onAddGPAM(newGPAM);
        resetForm();
        onRequestClose();
    };

    const resetForm = () => {
        setTitle('');
        setPlan('');
        setAction('');
        setMeasure('');
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="GPAM 추가"
            className="modal"
            overlayClassName="modal-overlay"
        >
            <form onSubmit={handleSubmit} className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold mb-4">새 GPAM 추가</h2>
                <CustomInput
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="목표"
                    required
                />
                <CustomInput
                    type="text"
                    value={plan}
                    onChange={(e) => setPlan(e.target.value)}
                    placeholder="계획"
                    required
                />
                <CustomInput
                    type="text"
                    value={action}
                    onChange={(e) => setAction(e.target.value)}
                    placeholder="행동"
                    required
                />
                <CustomInput
                    type="text"
                    value={measure}
                    onChange={(e) => setMeasure(e.target.value)}
                    placeholder="측정"
                    required
                />
                <div className="flex justify-end space-x-2">
                    <CustomButton type="submit" variant="primary">
                        추가
                    </CustomButton>
                    <CustomButton onClick={onRequestClose} variant="secondary">
                        취소
                    </CustomButton>
                </div>
            </form>
        </Modal>
    );
};

export default GPAMForm;
