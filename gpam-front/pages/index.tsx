import GoalList from '@/components/goal/GoalList';
import { Goal } from '@/interfaces/goal.interface';
import { GPAM } from '@/interfaces/gpam.interface';
import { tailwindClasses as tw } from '@/styles/tailwind-classes';
import { useRouter } from 'next/router';

// 정적인 GPAM 데이터 생성 함수
const createSampleGPAM = (id: string, title: string, goalId: string, isCompleted: boolean): GPAM => ({
    id,
    title,
    progress: isCompleted ? 100 : 50, // 완료 여부에 따라 고정된 진행률
    goalId,
    isCompleted,
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01'),
    plan: `${title} 계획`,
    action: `${title} 행동`,
    measure: `${title} 평가`,
});

// 샘플 목표 데이터
export const sampleGoals: Goal[] = [
    {
        id: '1',
        title: '프로그래밍 실력 향상',
        description: '1년 안에 풀스택 개발자가 되기',
        createdAt: new Date('2023-01-01'),
        updatedAt: new Date('2023-01-01'),
        gpams: [
            createSampleGPAM('1', 'React 학습', '1', true),
            createSampleGPAM('2', 'Node.js 학습', '1', false),
            createSampleGPAM('3', 'Database 학습', '1', false),
        ],
    },
    {
        id: '2',
        title: '외국어 능력 향상',
        description: '6개월 안에 TOEIC 900점 달성',
        createdAt: new Date('2023-01-01'),
        updatedAt: new Date('2023-01-01'),
        gpams: [
            createSampleGPAM('4', '단어 학습', '2', true),
            createSampleGPAM('5', '문법 학습', '2', true),
            createSampleGPAM('6', '리스닝 연습', '2', false),
        ],
    },
];

export default function Home() {
    const router = useRouter();

    const handleSelectGoal = (goal: Goal) => {
        router.push(`/goals/${goal.id}`);
    };

    return (
        <div className={`${tw.container} flex flex-col items-center`}>
            <h1 className={tw.heading1}>GPAM 목표 관리</h1>
            <div className="w-full max-w-md">
                <GoalList goals={sampleGoals} onSelectGoal={handleSelectGoal} />
            </div>
        </div>
    );
}
