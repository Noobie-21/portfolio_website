"use client"

import React, { useRef } from 'react'

const useMouse = () => {
    const mouseRef = useRef(null)
  return {mouseRef}
}

export default useMouse