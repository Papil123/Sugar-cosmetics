import React, { useState } from "react";
import styles from "./Tabs.module.css";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Portal,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

const Tabs = () => {
  return (
    <div className={styles.tabs}>
      <div>
        <Menu>
          <MenuButton>MAKE UP</MenuButton>
          <Portal>
            <MenuList fontSize="13px">
              <MenuItem>
                <Link to="./Lip">LIPS</Link>
              </MenuItem>
              <MenuItem><Link to='./eye' >EYES</Link></MenuItem>
              <MenuItem><Link to='./face' >FACE</Link></MenuItem>
            </MenuList>
          </Portal>
        </Menu>
      </div>
      <div>
        <Menu>
          <MenuButton>BRUSHES</MenuButton>
          <Portal>
            <MenuList fontSize="13px">
              <MenuItem>FACE BRUSHES</MenuItem>
              <MenuItem>EYES BRUSHES</MenuItem>
            </MenuList>
          </Portal>
        </Menu>
      </div>
      <div>
        <Menu>
          <MenuButton>SKINCARE</MenuButton>
          <Portal>
            <MenuList fontSize="13px">
              <MenuItem>MOISTURIZER</MenuItem>
              <MenuItem>SUNSCREEN</MenuItem>
              <MenuItem>SETTING MISTS</MenuItem>
              <MenuItem>COFFEE CULTURE RANGE</MenuItem>
              <MenuItem>SHEET MASK COMBO</MenuItem>
              <MenuItem>CITRUS GOT REAL</MenuItem>
              <MenuItem>AQUAHOLIC RANGE</MenuItem>
              <MenuItem>MASKS</MenuItem>
            </MenuList>
          </Portal>
        </Menu>
      </div>
      <div>
        <Menu>
          <MenuButton>TRENDING</MenuButton>
          <Portal>
            <MenuList fontSize="13px">
              <MenuItem>SUGAR MERCH STATION</MenuItem>
              <MenuItem>MAKEUP KITS</MenuItem>
              <MenuItem>BESTSELLERS</MenuItem>
              <MenuItem>SUGAR SETS</MenuItem>
              <MenuItem>VALUE SETS</MenuItem>
            </MenuList>
          </Portal>
        </Menu>
      </div>
      <div>
        <Menu>
          <MenuButton>BLOGS</MenuButton>
          <Portal>
            <MenuList fontSize="13px">
              <MenuItem>FEATURED</MenuItem>
              <MenuItem>MAKEUP</MenuItem>
              <MenuItem>SKINCARE</MenuItem>
            </MenuList>
          </Portal>
        </Menu>
      </div>
      <div>
        <p>OFFERS</p>
      </div>
      <div>
        <p>STORES</p>
      </div>
    </div>
  );
};

export default Tabs;
