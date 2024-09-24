import GoalDetail from '@/components/goal/GoalDetail';
import GoalHeader from '@/components/goal/GoalHeader';
import { Goal } from '@/interfaces/goal.interface';
import { GPAM } from '@/interfaces/gpam.interface';
import { sampleGoals } from '@/pages';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function GoalDetailPage() {
    const router = useRouter();
    const { id } = router.query;
    const [goal, setGoal] = useState<Goal | null>(null);

    useEffect(() => {
        if (id) {
            const foundGoal = sampleGoals.find((g) => g.id === id);
            if (foundGoal) {
                setGoal(foundGoal);
            } else {
                console.error('Goal not found');
                router.push('/');
            }
        }
    }, [id, router]);

    const handleAddGPAM = (newGPAM: GPAM) => {
        if (goal) {
            const updatedGoal = { ...goal, gpams: [...goal.gpams, newGPAM] };
            setGoal(updatedGoal);
        }
    };

    const handleUpdateGoal = (goalId: string, updatedGoal: Goal) => {
        setGoal(updatedGoal);
    };

    const handleDeleteGPAM = (gpamId: string) => {
        if (goal) {
            const updatedGpams = goal.gpams.filter((gpam) => gpam.id !== gpamId);
            const updatedGoal = { ...goal, gpams: updatedGpams };
            setGoal(updatedGoal);
        }
    };

    if (!goal) return <div className="text-center py-8">로딩 중...</div>;

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <GoalHeader goal={goal} />
            <GoalDetail
                goal={goal}
                onUpdateGoal={handleUpdateGoal}
                onDeleteGPAM={handleDeleteGPAM}
                onAddGPAM={handleAddGPAM}
            />
            <button
                onClick={() => router.push('/')}
                className="mt-8 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded transition duration-300"
            >
                목록으로 돌아가기
            </button>
        </div>
    );
}
