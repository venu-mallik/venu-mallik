import { useEffect, useState } from 'react';
import { Col, Row, Select, Layout, Table, Menu, Tag, Card } from 'antd';
import { tabsList } from '@/components/menu';
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
