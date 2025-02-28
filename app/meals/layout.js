import React from 'react'
export const metadata = {
  title: 'All Meals',
  description: 'Browse the dilicious meals',
};
export default function MealsLayout({children}) {
  return (
    <>
    <div>

        
    {children}
    </div>
    </>
  )
}
