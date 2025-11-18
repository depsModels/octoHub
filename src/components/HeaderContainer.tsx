"use client";
import { useState } from 'react';
import Header from './Header';

export default function HeaderContainer() {
  const [menuActive, setMenuActive] = useState(false);
  return <Header menuActive={menuActive} setMenuActive={setMenuActive} />;
}