import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();

  return <div>{t('Login.title')}</div>;
};

Login.displayName = 'Login';

export default Login;
