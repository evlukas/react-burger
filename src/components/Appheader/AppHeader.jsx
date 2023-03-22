import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import cls from "./AppHeader.module.css";

function AppHeader() {
  return (
    <header className={cls.header}>
      <ul className={cls.headerTopMenu}>
        <li className={cls.headerItem}>
          <a className={cls.link} href="#">
            <BurgerIcon type="primary" />
            <span className="pl-2 pr-2">Конструктор</span>
          </a>
        </li>
        <li className={cls.headerItem}>
          <a className={cls.link} href="">
            <ListIcon type="primary" />
            <span className="pl-2">Лента заказов</span>
          </a>
        </li>
        <li className={cls.headerLogo}>
          <Logo />
        </li>
        <li className={cls.headerItem}>
          <a className={cls.link} href="">
            <ProfileIcon type="primary" />
            <span className="pl-2">Личный кабинет</span>
          </a>
        </li>
      </ul>
    </header>
  );
}

export default AppHeader;
