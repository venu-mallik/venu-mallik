import { useState } from 'react';
import PersonalInfo from '@/components/resume';

const isSSREnabled = () => typeof window === 'undefined';

export default function Home() {

  const [activeTab, setActiveTab] = useState(-1);

  return (
    <main>{!isSSREnabled() ?
      <>
            {
              activeTab == -1 && <PersonalInfo/>
            } 

        </>
      : null}</main>
  )
}
