import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Page2 = () => {
  const { t } = useTranslation();

  return <div>{t('Page2.title')}</div>;
};

Page2.displayName = 'Page2';

export default Page2;
