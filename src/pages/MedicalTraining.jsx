import React from 'react';
import MedicalHero from '../components/medical/MedicalHero';
import MedicalExplainer from '../components/medical/MedicalExplainer';
import MedicalAudience from '../components/medical/MedicalAudience';
import MedicalPartnership from '../components/medical/MedicalPartnership';
import MedicalGoals from '../components/medical/MedicalGoals';
import MedicalCTA from '../components/medical/MedicalCTA';

export default function MedicalTraining() {
    return (
        <div className="bg-[#F5F1E8] font-sans selection:bg-[#0d6452] selection:text-white">
            <main>
                <MedicalHero />
                <MedicalExplainer />
                <MedicalAudience />
                <MedicalPartnership />
                <MedicalGoals />
                <MedicalCTA />
            </main>
        </div>
    );
}
