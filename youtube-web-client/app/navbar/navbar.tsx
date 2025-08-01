'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import SignIn from './sign-in'
import styles from './navbar.module.css'
import { type User } from 'firebase/auth'
import { onAuthStateChangedHelper } from '../firebase/firebase'

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unscribe = onAuthStateChangedHelper((user) => setUser(user))

    return () => unscribe()
  }, [])

  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <Image width={90} height={20} src='/youtube-logo.svg' alt='YouTube Logo' />
      </Link>
      <SignIn user={user} />
    </nav>
  )
}

export default Navbar
