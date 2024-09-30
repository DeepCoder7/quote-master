"use client"
import Cookies from 'js-cookie'
import React from 'react'
import { useRouter, usePathname } from 'next/navigation'

const AuthHandler = () => {
    const router = useRouter()
    const pathname = usePathname()

    const onSignout = () => {
        Cookies.remove("auth_token")
        router.push("/login")
    }

    return (
        <div className="space-x-4">
            {pathname != "/login" && <button
                type='button'
                onClick={onSignout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
                Sign Out
            </button>}
        </div>
    )
}

export default AuthHandler