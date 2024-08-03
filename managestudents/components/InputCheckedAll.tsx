'use client';

import React, { useState } from 'react'

export function InputCheckedAll() {

  const [checkbox, setCheckbox] = useState<boolean>(false);

  return (
    <input
    type="checkbox"
    className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
  />
  )
}
