import React from 'react';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { StyList, StyNavLink } from './style-components';

function Category() {
  return (
    <StyList>
      <StyNavLink to={'cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </StyNavLink>

      <StyNavLink to={'cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </StyNavLink>

      <StyNavLink to={'cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </StyNavLink>

      <StyNavLink to={'cuisine/Chinese'}>
        <GiChopsticks />
        <h4>Chinese</h4>
      </StyNavLink>
    </StyList>
  );
}

export default Category;
