import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Page1 = () => {
  const { t } = useTranslation();

  return <div>{t('Page1.title')}</div>;
};

Page1.displayName = 'Page1';

export default Page1;
