"use client";

import React from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 16px;
`;

const Header = styled.header`
  position: relative;
  z-index: 99;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Nav = styled.nav`
  margin: 24px 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavUl = styled.ul`
  display: flex;
  gap: 24px;
`;

const NavLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  & {
    a {
      color: #fff;
    }
    :hover {
      opacity: 0.8;
    }
  }

  /* background: #d82424;
  padding: 4px 8px;
  border-radius: 16px; */
`;

export default function header() {
  return (
    <Header>
      <Container>
        <Nav
          as={motion.nav}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <NavUl>
            {links.map((link) => (
              <NavLi key={link.hash}>
                <Link href={link.hash}>{link.name}</Link>
              </NavLi>
            ))}
          </NavUl>
        </Nav>
      </Container>
    </Header>
  );
}
