import React, { useState } from 'react';
import { useLocalStorage } from 'react-use';
import { Link } from 'react-router-dom';

import { Navbar, Button, Popover, Menu, Alignment, Position, Classes } from '@blueprintjs/core';
import i18next from '../i18n.js';

const useLanguage = languages => {
  const [lng, setLng] = useState(
    i18next.language || window.localStorage.i18nextLng || languages.find(l => l.default).short,
  );
  const setLanguage = language => {
    i18next.changeLanguage(language);
    setLng(language);
  };
  return [lng, setLanguage];
};

const Topbar = ({ topMenu, languages }) => {
  const [colorTheme, setColorTheme] = useLocalStorage('colorTheme', 'light', true);
  // const [lng, setlanguage] = useLanguage(i18next.language || languages.find(l => l.default).short);
  const [lng, setLanguage] = useLanguage(languages);

  document.body.className = colorTheme === 'dark' ? Classes.DARK : null;

  return (
    <Navbar fixedToTop>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Blueprint</Navbar.Heading>
        <Navbar.Divider />

        {topMenu.map(item => (
          <Link to={item.path} key={item.path}>
            <Button minimal icon={item.icon} text={item.text} />
          </Link>
        ))}
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <Navbar.Divider />
        <Button
          minimal
          icon={colorTheme === 'dark' ? 'flash' : 'moon'}
          onClick={() => void setColorTheme(colorTheme === 'light' ? 'dark' : 'light')}
        />
        <Popover
          minimal
          content={
            <Menu>
              {languages
                .filter(l => l.short !== lng)
                .map(({ short, display }) => {
                  console.log(short, display);
                  return (
                    <Menu.Item key={short} onClick={() => setLanguage(short)} text={display} />
                  );
                })}
            </Menu>
          }
          position={Position.BOTTOM}
        >
          <Button minimal text={lng.toUpperCase()} icon="globe-network" />
        </Popover>

        <Button minimal icon="user" />
        <Button minimal icon="notifications" />
        <Button minimal icon="cog" />
      </Navbar.Group>
    </Navbar>
  );
};

Topbar.displayName = 'Topbar';

export default Topbar;
